import { dynamic } from "@blitzjs/core"

export const Tooltip = dynamic(() => import("./Tooltip"), {
  ssr: false,
})
