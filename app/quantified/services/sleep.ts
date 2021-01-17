import { OuraReadinessDatapoint, OuraSleepDatapoint } from "quantified/types";

import oura from "oura";
import sub from "date-fns/sub";
import { ServerConstants } from "utils/constants/server";

export class OuraService {
  private static client: oura.Client;

  private static getClient() {
    if (!this.client) {
      this.client = new oura.Client(ServerConstants.ouraToken);
    }

    return this.client;
  }

  static async allData() {
    const start = sub(new Date(), {
      days: 7,
    });
    const readinessLastWeek = this.getClient().readiness(start, new Date()) as Promise<{
      readiness: OuraReadinessDatapoint[];
    }>;
    const sleepLastWeek = this.getClient().sleep(start, new Date()) as Promise<{
      sleep: OuraSleepDatapoint[];
    }>;
    const activityLastWeek = this.getClient().activity(start, new Date()) as Promise<{
      activity: any[];
    }>;

    return {
      readiness: (await readinessLastWeek).readiness,
      sleep: (await sleepLastWeek).sleep,
      activity: (await activityLastWeek).activity,
    };
  }
}
