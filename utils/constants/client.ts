const nodeEnv = process.env.NODE_ENV;

export const ClientConstants = {
  isProd: nodeEnv === "production",
};

export const ROUTES = {
  Home: "/",
};

export const LayoutConstants = {
  textMaxWidth: 800,
  margin: {
    paragraph: {
      base: 2,
      md: 4,
    },
    large: { base: 12, md: 28 },
    small: {
      base: 6,
      md: 12,
    },
  },
};
