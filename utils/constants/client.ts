const nodeEnv = process.env.NODE_ENV;

export const ClientConstants = {
  isProd: nodeEnv === 'production',
  baseUrl:
    nodeEnv === 'development' ? 'http://localhost:3000' : 'https://andreas.fyi',
};

type RoundUps = 'dec-2020';
type EngineeringArticle = 'nextjs-auth-skeleton-loaders';

export const ROUTES = {
  Home: '/',
  Engineering: {
    Home: '/engineering',
    article: (name: EngineeringArticle) => `/engineering/${name}`,
  },
  Thinking: {
    Home: '/thinking',
    roundUp: (name: RoundUps) => `/thinking/round-ups/${name}`,
    FounderCharacteristics: '/thinking/early-stage-founder-character',
    post: (name: string) => `/thinking/${name}`,
  },
  Preferences: {
    Stuff: '/preferences/stuff',
    Podcasts: '/preferences/podcasts',
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
