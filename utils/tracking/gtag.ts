// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
import { ClientConstants } from "utils/constants/client"

type GTagEvent = {
  action: string
  category: string
  label: string
  value: number
}

export class GtagService {
  static pageview(url: URL) {
    if (!ClientConstants.isProd) return

    window.gtag("config", ClientConstants.gtagTrackingId, {
      page_path: url,
    })
  }

  // https://developers.google.com/analytics/devguides/collection/gtagjs/events
  static event({ action, category, label, value }: GTagEvent) {
    if (!ClientConstants.isProd) return

    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
