const nodeEnv = process.env.NODE_ENV

export const ClientConstants = {
  gtagTrackingId: "G-6353F1BVDT",
  isProd: nodeEnv === "production",
}

export const ROUTES = {
  Home: "/",
}

export const LayoutConstants = {
  margin: {
    large: { base: 12, md: 28 },
    small: {
      base: 6,
      md: 12,
    },
  },
}
