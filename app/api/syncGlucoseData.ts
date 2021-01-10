import puppeteer from "puppeteer-extra";

import RecaptchaPlugin from "puppeteer-extra-plugin-recaptcha";
import { Page } from "puppeteer";
import { storeFreestyleCsvReadings } from "quantified/services/glucose";
import { ServerConstants } from "utils/constants/server";
import { NextApiRequest, NextApiResponse } from "next";

puppeteer.use(
  RecaptchaPlugin({
    provider: {
      id: "2captcha",
      token: ServerConstants.recaptchaToken,
    },
    visualFeedback: true,
  })
);

async function login(page: Page) {
  await page.waitForNavigation();
  await page.waitForSelector("#loginForm-email-input");
  await page.type("#loginForm-email-input", ServerConstants.libre.email);
  await page.type("#loginForm-password-input", ServerConstants.libre.password);
  await page.evaluate(
    (selector) => document.querySelector(selector).click(),
    "#loginForm-submit-button"
  );
  await page.waitForNavigation();

  await page.waitForSelector("#main-header-reports-nav-link");
  await page.click("#main-header-reports-nav-link");
}

async function syncGlucoseData() {
  const browser = await puppeteer.launch({
    headless: false,
    // executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 800,
  });

  page.on("response", async (response) => {
    const request = response.request();
    if (request.url().includes("https://hub-eu.libreview.io/poll/")) {
      try {
        const data = (await response.json()) as {
          args?: {
            currentStep: number;
            totalSteps: number;
            url: string;
          };
        };

        if (data?.args?.totalSteps === data?.args?.currentStep && data?.args?.url) {
          await storeFreestyleCsvReadings(data?.args?.url);
        }
      } catch (error) {
        console.error(error);
      }
    }
  });

  await page.goto("https://www2.libreview.com");
  await page.evaluate(async () => {
    // Avoid country select
    localStorage.setItem("chosenCountryLang", '{"language":"en-GB","country":"GB"}');
  });

  await login(page);

  await page.goto("https://www2.libreview.com/glucosereports");
  await page.waitForSelector("#exportData-button");
  await page.evaluate((selector) => document.querySelector(selector).click(), "#exportData-button");
  await page.waitForSelector("#exportData-modal-download-button");
  await page.waitFor(1500);
  await page.solveRecaptchas();
  await page.evaluate(
    (selector) => document.querySelector(selector).click(),
    "#exportData-modal-download-button"
  );
  await browser.close();
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apiKey = req.body.apiKey;

    if (apiKey !== ServerConstants.apiKey) {
      throw new Error("Incorrect api key");
    }

    await syncGlucoseData();
    res.status(200).send("Done");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

export default handler;
