import React from "react"
import { Box, BoxProps, Code, Heading, Link, List, ListItem, Text } from "@chakra-ui/layout"
import Layout from "layouts/Layout"
import { LayoutConstants } from "utils/constants/client"
import { BodyText, BodyTextWithPopover, Quote } from "thinking/components"

interface TobiLutkeObserverProps extends BoxProps {}

function TobiLutkeObserver({ ...rest }: TobiLutkeObserverProps) {
  return (
    <Box py={LayoutConstants.margin.large} {...rest}>
      <Heading>Reflections from December</Heading>

      <Box maxW={LayoutConstants.textMaxWidth} my={LayoutConstants.margin.small}>
        <Heading size="md" mb={LayoutConstants.margin.paragraph}>
          Sources
        </Heading>
        <List spacing={3}>
          <ListItem>
            Insights from CEO of Shopify{" "}
            <Link href="https://www.theobservereffect.org/tobi.html" isExternal>
              (The Observer Effect)
            </Link>
          </ListItem>
          <ListItem>Insights from CEO of Shopify</ListItem>
        </List>
      </Box>

      <Box maxW={LayoutConstants.textMaxWidth} my={LayoutConstants.margin.small}>
        <Heading size="md" mb={LayoutConstants.margin.paragraph}>
          Unapologetically Focus on Product
        </Heading>
        <Quote>
          "My attention is the most liquid and valuable resource that I have. Even back in the day
          when Shopify went public, I spent a good deal of time pre-selling the various investors.
          During meetings, I would say, "Hey, I'm here, and we've been doing this roadshow, but I
          actually spend a lot of my time on the product." This was to set expectations because I
          knew I wasn't going to attend very many investor conferences. Fundamentally, my attention
          belonged to the product, not to the sales and marketing of it."
        </Quote>
        <BodyText mt={LayoutConstants.margin.paragraph}>
          I'm particularly inspired by the unapologetic approach Tobi has in how he spends his
          attention. This has been a huge sticking point for me in my projects. I{" "}
          <strong>love</strong> engineering, I'm passionate about UX & UI and I enjoy growth &
          product marketing, but there are certain things I don't. Sales, hiring & raising money
          have never been a sustained interest of mine. I've always had a false belief that I should
          be enthused about all areas of building a business.
        </BodyText>
      </Box>

      <Box maxW={LayoutConstants.textMaxWidth} my={LayoutConstants.margin.small}>
        <Heading size="md" mb={LayoutConstants.margin.paragraph}>
          As a T-Shaped Individual, where should I Level Up?
        </Heading>
        <Quote mt={LayoutConstants.margin.paragraph}>
          When I get close to any field, I think about how far I want to go. I'm probably further
          along with programming. I don’t know if I want to get from 90 to 91% in programming when,
          with the same amount of work, I could figure out the first 60 to 70% of UX or even
          something like drawing. There’s a recent book about this called Range, which I really
          like. The book pushes in this direction and explores this topic a bit more than I do. But
          I just found myself nodding throughout reading it, because it turns out that very
          often—really, every field has fundamental wisdom that you discover when you're learning
          and talking to the people who have mastered it. I find that going wide and learning the
          best lessons from the people who have dedicated their entire lives to a certain pursuit
          gets you really, really close to mastery.
        </Quote>
        <BodyText mt={LayoutConstants.margin.paragraph}>
          "Creativity generally is people using lessons from one field in another field in different
          ways."
        </BodyText>
      </Box>
      <Box maxW={LayoutConstants.textMaxWidth} my={LayoutConstants.margin.small}>
        <Heading size="md" mb={LayoutConstants.margin.paragraph}>
          Design Companies Around The Customer
        </Heading>
        <Quote mt={LayoutConstants.margin.paragraph}>
          Interestingly, people commonly design companies that are in significant conflict with
          their customer base. And you play these games to win them over, like taking them out to
          golf to get them to sign an enterprise contract. That's weird. I mean, I get that it
          works, but that's a different game than I'm playing.
        </Quote>
        <BodyText mt={LayoutConstants.margin.paragraph}>
          As company builders we should attempt to structure the organisation so that it is as easy
          as possible to serve the customer. Software systems can be designed in ways which will
          allow{" "}
          <BodyTextWithPopover hoverContent={<Box>test</Box>}>rapid iteration</BodyTextWithPopover>{" "}
          and{" "}
          <BodyTextWithPopover
            hoverContent={
              <Box>
                I love how easy{" "}
                <Link href="https://render.com" textDecoration="underline" isExternal>
                  Render
                </Link>{" "}
                and{" "}
                <Link
                  href="https://rauchg.com/2020/develop-preview-test"
                  textDecoration="underline"
                  isExternal
                >
                  Vercel
                </Link>
                has made this for me.
              </Box>
            }
            followCursor={false}
          >
            feature delivery
          </BodyTextWithPopover>
          , throwaway features and A/B testing. Anticipate confusions in your product and embed
          helpful resources into your designs. Use products like{" "}
          <Link href="https://www.fullstory.com/" isExternal>
            FullStory
          </Link>{" "}
          and{" "}
          <Link href="https://www.http://sentry.io/" isExternal>
            Sentry
          </Link>{" "}
          so that you quickly become aware when customers are having problems, or at least make it
          easy to reach out{" "}
          <BodyTextWithPopover
            contentProps={{
              bg: "#1A202C",
            }}
            hoverContent={
              <Code color="white">
                Intercom(
                <Text as="span" color="green.500">
                  'showNewMessage'
                </Text>
                ,{" "}
                <Text as="span" color="green.500">
                  'Help me!'
                </Text>
                );
              </Code>
            }
          >
            when issues arise
          </BodyTextWithPopover>
          . Set up your employee incentives so your customer support team to treat your customers as
          kings and queens (as opposed to making sales for instance).
        </BodyText>
      </Box>
      <Box maxW={LayoutConstants.textMaxWidth} my={LayoutConstants.margin.small}>
        <Heading size="md" mb={LayoutConstants.margin.paragraph}>
          Communicating Around Trust
        </Heading>
        <Quote mt={LayoutConstants.margin.paragraph}>
          We talk about the trust battery as a metaphor quite casually. I know from people who are
          coming into the company that it may seem really strange. But it's something you just
          observe over time. Personally, I have found it really, really useful to be able to reason
          about a relationship without getting egos involved too much. I can have a conversation
          with someone saying, “Hey, you made a commitment to ship this thing, and you did. That's
          awesome. That's a super big charge on the trust battery, but you’re actually late for
          every meeting. Even though that's relatively minor—like it decreases 0.1% on your
          battery—you should fix that.”
        </Quote>
        <BodyText mt={LayoutConstants.margin.paragraph}>
          Trust, in my opinion is an emotional luxury. Some individuals have not have been fortunate
          enough to have grown up with, or been able to develop it. I love that Tobi is transforming
          developing trust into something which we can objectively look at, as if it were a game.
          Often people are too identified and emotionally caught up in their ability to be trusted,
          by describing it as a "trust battery" we may be more able to non-judgmentally see how we
          may be able to make meaningful transformations.
        </BodyText>
      </Box>
    </Box>
  )
}

TobiLutkeObserver.getLayout = (page) => <Layout title="Thinking with the door open">{page}</Layout>

export default TobiLutkeObserver
