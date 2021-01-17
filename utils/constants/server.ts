import { getStringEnvVar } from "utils/constants/utils";

export const ServerConstants = {
  mailchimp: {
    apiKey: getStringEnvVar("MAILCHIMP_API_KEY"),
    listId: getStringEnvVar("MAILCHIMP_LIST_ID"),
  },
  libre: {
    email: getStringEnvVar("LIBRE_EMAIL", ""),
    password: getStringEnvVar("LIBRE_PASSWORD", ""),
  },
  recaptchaToken: getStringEnvVar("RECAPTCHA_TOKEN", ""),
  apiKey: getStringEnvVar("API_KEY"),
};
