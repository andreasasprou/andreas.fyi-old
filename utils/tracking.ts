import { isRunningOnServerSide } from "./shared";

export type EventNames = "";

export const trackEvent = (name: EventNames) => {
  if (isRunningOnServerSide()) {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.sa_event(name);
};
