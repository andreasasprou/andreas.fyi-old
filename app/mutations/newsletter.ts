import { ServerConstants } from "utils/constants/server";

interface Payload {
  email: string;
}

async function subscribeToNewsletter({ email }: Payload) {
  if (!email) {
    throw new Error("Email is required");
  }

  const LIST_ID = ServerConstants.mailchimp.listId;

  const response = await fetch(`https://us7.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
    headers: {
      Authorization: `apikey ${ServerConstants.mailchimp.apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  }).then((res) => res.json());

  if (response.status === 400 && response.title === "Member Exists") {
    return;
  }

  if (response.status >= 400) {
    throw new Error(
      "Hm, couldn't add you to the newsletter - ping me directly at andyasprou@gmail.com and I'll add you to this list!"
    );
  }

  return;
}

export default subscribeToNewsletter;
