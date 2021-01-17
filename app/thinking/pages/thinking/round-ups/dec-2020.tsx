import React from 'react';
import {
  Box,
  BoxProps,
  Code,
  Flex,
  Grid,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/layout';
import Layout from 'layouts/Layout';
import { LayoutConstants } from 'utils/constants/client';
import { Quote } from 'thinking/components';
import { BodyText, BodyTextWithPopover, Link } from 'ui/common';
import { ProgressNav } from 'thinking/components/ProgressNav';
import { useBgColor } from 'theme';

const sections = [
  {
    id: 'materials',
    title: 'Materials',
  },
  {
    id: 'product-focus',
    title: 'Unapologetically Focus on Product',
  },
  {
    id: 'levelling-up',
    title: 'As a T-Shaped Individual, where should I Level Up?',
  },
  {
    id: 'customer-centricity',
    title: 'Design Companies Around The Customer',
  },
  {
    id: 'trust-communication',
    title: 'Communicating About Trust',
  },
  {
    id: 'charging-trust',
    title: 'Strategies to Keep The Trust Battery Charged',
  },
  {
    id: 'inspiring-change',
    title: 'Inspiring Change in Other People',
  },
];

const sectionIds = sections.map(({ id }) => id);

type SectionId = typeof sectionIds[number];

const getSectionId = (id: SectionId): SectionId =>
  sections.find((section) => section.id === id)?.id as SectionId;

function BodySection({
  sectionId,
  children,
  ...rest
}: BoxProps & {
  sectionId: SectionId;
}) {
  const bg = useBgColor();
  const section = sections.find(({ id }) => id === sectionId);

  if (!section) {
    return <></>;
  }

  return (
    <Box
      as="section"
      pb={LayoutConstants.margin.small}
      maxW={LayoutConstants.textMaxWidth}
      id={section.id}
      {...rest}
    >
      <Heading
        bg={bg}
        py={LayoutConstants.margin.paragraph}
        zIndex={2}
        position="sticky"
        top={0}
        scrollMargintop="72px"
        size="md"
      >
        {section.title}
      </Heading>
      {children}
    </Box>
  );
}

function Dec2020() {
  return (
    <>
      <Heading>Reflections from December</Heading>

      <BodySection sectionId={getSectionId('materials')}>
        <List spacing={3} listStyleType="disc">
          <ListItem>
            <Link href="https://www.theobservereffect.org/tobi.html" isExternal>
              Insights from CEO of Shopify
            </Link>{' '}
            (finished)
          </ListItem>
          <ListItem>
            <Link
              href="https://www.theschooloflife.com/shop/dating-book-the-love-series-1/"
              isExternal
            >
              The Couples Workbook
            </Link>{' '}
            (in-progress)
          </ListItem>
          <ListItem>
            <Link
              href="https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders"
              isExternal
            >
              Jeff Bezos on why it's always Day 1 at Amazon
            </Link>{' '}
            (finished)
          </ListItem>
        </List>
      </BodySection>

      <BodySection sectionId={getSectionId('product-focus')}>
        <Quote name="Tobi Lütke">
          "My attention is the most liquid and valuable resource that I have.
          Even back in the day when Shopify went public, I spent a good deal of
          time pre-selling the various investors. During meetings, I would say,
          "Hey, I'm here, and we've been doing this roadshow, but I actually
          spend a lot of my time on the product." This was to set expectations
          because I knew I wasn't going to attend very many investor
          conferences. Fundamentally, my attention belonged to the product, not
          to the sales and marketing of it."
        </Quote>
        <BodyText mt={LayoutConstants.margin.paragraph}>
          I <strong>love</strong> engineering, I’m passionate about UX & UI and
          I enjoy growth & product marketing, but there are certain aspects of
          building a business that I don’t enjoy. I’m inspired by the
          unapologetic approach Tobi has with how he spends his attention. This
          has been a huge sticking point for me in my projects.. Sales, hiring &
          raising money have never been sustained interests of mine. Keeping
          this in mind helps me battle my false belief that I should be enthused
          about all areas of building a business as an entrepreneur.
        </BodyText>
      </BodySection>

      <BodySection sectionId={getSectionId('levelling-up')}>
        <Quote name="Tobi Lütke">
          When I get close to any field, I think about how far I want to go. I'm
          probably further along with programming. I don’t know if I want to get
          from 90 to 91% in programming when, with the same amount of work, I
          could figure out the first 60 to 70% of UX or even something like
          drawing. There’s a recent book about this called Range, which I really
          like. The book pushes in this direction and explores this topic a bit
          more than I do. But I just found myself nodding throughout reading it,
          because it turns out that very often—really, every field has
          fundamental wisdom that you discover when you're learning and talking
          to the people who have mastered it. I find that going wide and
          learning the best lessons from the people who have dedicated their
          entire lives to a certain pursuit gets you really, really close to
          mastery.
        </Quote>
        <BodyText>
          Creativity generally is taking lessons learnt from one field and
          applying them to another field in different ways.
        </BodyText>
      </BodySection>
      <BodySection sectionId="customer-centricity">
        <Heading size="sm">Insights from Jeff Bazos</Heading>
        <BodyText>
          Jeff Bazos in his{' '}
          <Link
            href="https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders"
            isExternal
          >
            letter to his shareholders
          </Link>{' '}
          in 2016 talks about techniques and tactics on how to keep Amazon out
          of Day 2.
        </BodyText>
        <Quote name="Jeff Bazos">
          Day 2 is stasis. Followed by irrelevance. Followed by excruciating,
          painful decline. Followed by death. And that is why it is always Day
          1.
        </Quote>
        <BodyText>
          His first point was around maintaining "True Customer Obsession", that
          results in customers dissatisfaction, which will force you to
          continuously invent on their behalf. I can't think of any better ways
          to build the foundation of a product roadmap. Can you?
        </BodyText>
        <Quote name="Jeff Bazos">
          There are many advantages to a customer-centric approach, but here’s
          the big one: customers are always beautifully, wonderfully
          dissatisfied, even when they report being happy and business is great.
          Even when they don’t yet know it, customers want something better, and
          your desire to delight customers will drive you to invent on their
          behalf. No customer ever asked Amazon to create the Prime membership
          program, but it sure turns out they wanted it, and I could give you
          many such examples.
        </Quote>
        <BodyText>
          Jeff also comments on a common mistake when attempting to understand
          customer needs. He introduces the idea to "resist proxies", and how
          they are dangerous signs of Day 2. He proves an example of proxies for
          customers as market research and customer surveys.
        </BodyText>
        <Quote name="Jeff Bazos">
          ...market research and customer surveys can become proxies for
          customers – something that’s especially dangerous when you’re
          inventing and designing products. "Fifty-five percent of beta testers
          report being satisfied with this feature. That is up from 47% in the
          first survey." That’s hard to interpret and could unintentionally
          mislead.
        </Quote>
        <Quote name="Jeff Bazos">
          Good inventors and designers deeply understand their customer. They
          spend tremendous energy developing that intuition. They study and
          understand many anecdotes rather than only the averages you’ll find on
          surveys. They live with the design.
        </Quote>
        <Heading size="sm" mt={LayoutConstants.margin.paragraph}>
          Insights from Tobi Lütke
        </Heading>
        <Quote name="Tobi Lütke">
          Interestingly, people commonly design companies that are in
          significant conflict with their customer base. And you play these
          games to win them over, like taking them out to golf to get them to
          sign an enterprise contract. That's weird. I mean, I get that it
          works, but that's a different game than I'm playing.
        </Quote>
        <BodyText>
          As company builders we should attempt to structure the organisation so
          that it is as easy as possible to serve the customer. Software systems
          can be designed in ways which will allow rapid iteration and{' '}
          <BodyTextWithPopover
            hoverContent={
              <Box>
                I love how easy{' '}
                <Link
                  color="black"
                  href="https://render.com"
                  textDecoration="underline"
                  isExternal
                >
                  Render
                </Link>{' '}
                and{' '}
                <Link
                  color="black"
                  href="https://rauchg.com/2020/develop-preview-test"
                  textDecoration="underline"
                  isExternal
                >
                  Vercel
                </Link>{' '}
                has made this for me.
              </Box>
            }
            followCursor={false}
            interactive
          >
            feature delivery
          </BodyTextWithPopover>
          , throwaway features and A/B testing. Anticipate confusions in your
          product and embed helpful resources into your designs. Use products
          like{' '}
          <Link href="https://www.fullstory.com/" isExternal>
            FullStory
          </Link>{' '}
          and{' '}
          <Link href="https://www.http://sentry.io/" isExternal>
            Sentry
          </Link>{' '}
          so that you quickly become aware when customers are having problems,
          or at least make it easy to reach out{' '}
          <BodyTextWithPopover
            contentProps={{
              bg: '#1A202C',
              minW: 370,
            }}
            hoverContent={
              <Code bg="#1A202C" color="brand.500">
                Intercom(
                <Text as="span" color="green.500">
                  'showNewMessage'
                </Text>
                ,{' '}
                <Text as="span" color="green.500">
                  'Help me!'
                </Text>
                );
              </Code>
            }
          >
            when issues arise
          </BodyTextWithPopover>
          . Set up your employee incentives so your customer support team to
          treat your customers as kings and queens (instead of being driven by
          making sales).{' '}
          <Link href="https://twitter.com/Josh_lemmon_" isExternal>
            Josh Lemmon
          </Link>
          , head of customer success at{' '}
          <Link href="https://flick.tech" isExternal>
            Flick.tech
          </Link>{' '}
          is an exemplar of this principle.
        </BodyText>
      </BodySection>
      <BodySection sectionId="trust-communication">
        <Quote name="Tobi Lütke">
          We talk about the trust battery as a metaphor quite casually. I know
          from people who are coming into the company that it may seem really
          strange. But it's something you just observe over time. Personally, I
          have found it really, really useful to be able to reason about a
          relationship without getting egos involved too much. I can have a
          conversation with someone saying, “Hey, you made a commitment to ship
          this thing, and you did. That's awesome. That's a super big charge on
          the trust battery, but you’re actually late for every meeting. Even
          though that's relatively minor—like it decreases 0.1% on your
          battery—you should fix that.”
        </Quote>
        <BodyText mt={LayoutConstants.margin.paragraph}>
          Trust, in my opinion is an emotional luxury, that some individuals
          have not been fortunate enough to have grown up with or develop. I
          love how Tobi reframes the notion of developing trust into something
          which we can objectively look at, as if it were a game. Often people
          are too identified and emotionally caught up in their ability to be
          trusted, by describing it as a "trust battery" we may be more able to
          non-judgmentally see how we can make meaningful transformations.
        </BodyText>
      </BodySection>
      <BodySection sectionId="charging-trust">
        <Heading size="sm">1. Empathise</Heading>
        <BodyText mt={2}>
          Trust, in my opinion is an emotional luxury. Some individuals have not
          have been fortunate enough to have grown up with, or been able to
          develop it. I love that Tobi is transforming developing trust into
          something which we can objectively look at, as if it were a game.
          Often people are too identified and emotionally caught up in their
          ability to be trusted, by describing it as a "trust battery" we may be
          more able to non-judgmentally see how we may be able to make
          meaningful transformations.
        </BodyText>
        <Quote name="Henry Ford">
          If there is any one secret of success, it lies in the ability to get
          the other person’s point of view and see things from that person’s
          angle as well as from your own.
        </Quote>
        <Heading mt={LayoutConstants.margin.paragraph} size="sm">
          2. Self-reflection and awareness
        </Heading>
        <BodyText mt={2}>
          Be conscious of what has happened in the past that has made it hard to
          trust. Building this awareness is usually the first step to making
          change.
        </BodyText>
        <Heading size="sm" mt={LayoutConstants.margin.paragraph}>
          3. Layer criticism with reassurance
        </Heading>
        <BodyText mt={2}>
          I originally read about this in{' '}
          <Link
            href="https://www.theschooloflife.com/shop/dating-book-the-love-series-1/"
            isExternal
          >
            The Couples Workbook
          </Link>{' '}
          (a thoughtful and insinuating christmas present from my
          girlfriend...). It's the idea that criticism sometimes feels like a
          withdrawal of trust. So, the writer suggests that we should "convey
          great admiration and respect as we're announcing our negative
          insight". A comedic example, related to romantic relationships
          provided in the book:
        </BodyText>
        <Grid
          templateColumns="1fr 1fr"
          gap={LayoutConstants.margin.paragraph}
          alignItems="flex-start"
        >
          <Quote mt={LayoutConstants.margin.paragraph} name="Good communicator">
            "I love giving you a kiss, bu there's just this one tiny think: It's
            even nicer when you've just brushed your teeth."
          </Quote>
          <Quote
            mt={LayoutConstants.margin.paragraph}
            quotePosition="right"
            name="Bad communicator"
          >
            "You know, your breath stinks. It's disgusting."
          </Quote>
        </Grid>
        <BodyText mt={LayoutConstants.margin.paragraph}>
          Let's also remember some wise words from Dale Carnegie's{' '}
          <Link href="https://en.wikipedia.org/wiki/How_to_Win_Friends_and_Influence_People">
            How to Win Friends and Influence People
          </Link>
          :
        </BodyText>
        <Quote name="Dale Carnegie" mt={LayoutConstants.margin.paragraph}>
          Criticism is futile because it puts a person on the defensive and
          usually makes him strive to justify himself. Criticism is dangerous,
          because it wounds a person’s precious pride, hurts his sense of
          importance, and arouses resentment. …. Any fool can criticize, condemn
          and complain—and most fools do. But it takes character and
          self-control to be understanding and forgiving.
        </Quote>
      </BodySection>
      <BodySection sectionId={getSectionId('inspiring-change')}>
        <BodyText mt={0}>
          As an extension on the point about "layer criticism with reassurance",
          I'm reminded of Dale Carnegie's commandments for being a better
          leader.
        </BodyText>
        <Quote name="Dale Carnegie" mt={LayoutConstants.margin.paragraph}>
          When dealing with people, let us remember we are not dealing with
          creatures of logic. We are dealing with creatures of emotion,
          creatures bristling with prejudices and motivated by pride and vanity.
        </Quote>
        <BodyText>
          <Heading size="sm" mb={2} pt={3}>
            How to Change People Without Giving Offense or Arousing Resentment
          </Heading>
          <List styleType="decimal">
            <ListItem>Begin with praise and honest appreciation.</ListItem>
            <ListItem>Call attention to people's mistakes indirectly.</ListItem>
            <ListItem>
              Talk about your own mistakes before criticizing the other person.
            </ListItem>
            <ListItem>
              Ask questions instead of giving direct orders. Let the other
              person save face.
            </ListItem>
            <ListItem>
              Praise the slightest improvement and praise every improvement.
            </ListItem>
            <ListItem>
              Give the other person a fine reputation to live up to.
            </ListItem>
            <ListItem>Use encouragement.</ListItem>
            <ListItem>Make the fault seem easy to correct.</ListItem>
            <ListItem>
              Make the other person happy about doing the thing you suggest.
            </ListItem>
          </List>
        </BodyText>
      </BodySection>
    </>
  );
}

function Dec2020WithSidebar() {
  return (
    <Flex w="100%" pt={LayoutConstants.margin.large}>
      <Box>
        <Dec2020 />
      </Box>
      <ProgressNav sections={sections} />
    </Flex>
  );
}

Dec2020WithSidebar.getLayout = (page) => (
  <Layout title={['Thinking with the door open', 'Dec 2020']}>{page}</Layout>
);

export default Dec2020WithSidebar;
