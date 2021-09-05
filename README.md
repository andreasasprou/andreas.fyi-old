# andreas.fyi

This isn't a blog. More of an app? I write all my posts in React. Keen to introduce MDX into the mix.

## Why does this exist?

- Publicly documenting what I learn month-to-month. This might include anything from experiences growing [Flick.tech](https://www.flick.tech) & [Dweet](https://www.dweet.com), my content diet (books, podcasts, blogs etc) to the lifestyle experiments I'm running (keto, intermittent fasting etc).
- Listing things I love across:
  - Engineering practices
  - Products/tools
  - Blogs/books/podcasts
  - Health products
  - Places
- For others to discover the lessons from the journey I've been on over the last few years:
  - Bootstrapping my first business (Flick.tech) to $2M ARR in 3 years whilst graduating computer science at Imperial College London in the top 3 of the cohort.
  - Co-founding [Dweet.com](https://www.dweet.com) - the first business that is successfully bringing the world of freelance work to the fashion & retail industries.
  - Founding & solo-developing multiple other side-projects [Combox](https://combox.app) & [Garn.io](https://garn.io).
- Self quantification dashboards:
  - Sleep, HRV, RHR via [Oura ring](https://ouraring.com/) API
  - Metabolic health via Freestyle Libre glucose monitor (similar to [Levels](https://www.levelshealth.com/))
  - Podcasts consumption via [Pocket casts](https://www.pocketcasts.com/) API
  - Exercise via Oura ring & Apple watch
  - Body vitals via [FitTrack](https://uk.fittrack.com/products/fittrack-smart-body-bmi-scale)
  - Articles via [Pocket](https://getpocket.com/) API

## Running Locally

1. Clone and install deps

```bash
git clone hhttps://github.com/andreasasprou/andreas.fyi.git
cd andreas.fyi
yarn
```

2. Populate your `.env.local` file

```.env
MAILCHIMP_API_KEY=
MAILCHIMP_LIST_ID=
DATABASE_URL="postgresql://username@localhost:5432/andreas.fyi"
API_KEY=something_secure
```

3. Setup the database

```bash
yarn migrate
```

4. Start the dev server

```bash
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

### Built using

- [Blitz.js](https://blitzjs.com/)
- [Vercel](https://vercel.com)
- [Chakra](https://chakra-ui.com/)
