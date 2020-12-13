const nodeEnv = process.env.NODE_ENV

export const ClientConstants = {
  gtagTrackingId: "G-6353F1BVDT",
  isProd: nodeEnv === "production",
}
