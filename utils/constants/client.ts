const nodeEnv = process.env.NODE_ENV;

export const ClientConstants = {
  isProd: nodeEnv === 'production',
};

type RoundUps = 'dec-2020';

export const ROUTES = {
  Home: '/',
  Thinking: {
    RoundUps: '/thinking/round-ups',
    roundUp: (name: RoundUps) => `/thinking/round-ups/${name}`,
  },
  Preferences: {
    Stuff: '/preferences/stuff',
    Podcasts: '/preferences/podcasts',
  },
  Quantified: {
    Sleep: '/quantified/sleep',
  },
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
