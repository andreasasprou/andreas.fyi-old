import { getStringEnvVar } from "utils/constants/utils";

export const ServerConstants = {
  mailchimp: {
    apiKey: getStringEnvVar("MAILCHIMP_API_KEY"),
    listId: getStringEnvVar("MAILCHIMP_LIST_ID"),
  },
};
