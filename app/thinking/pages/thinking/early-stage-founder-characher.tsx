import { Box, Heading, Text, TextProps } from '@chakra-ui/layout';
import React from 'react';
import { ListItem } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';
import Layout from 'layouts/Layout';
import { BodyText } from 'ui/common';
import { LayoutConstants } from 'utils/constants/client';
import { Callout } from 'ui/common/Callout';

const Quality = (props: TextProps) => (
  <Text fontWeight={600} fontStyle="italic" as="span" {...props} />
);

function EarlyStageFounderCharacter() {
  return (
    <Box
      maxW={LayoutConstants.textMaxWidth}
      w="100%"
      pt={LayoutConstants.margin.large}
    >
      <Heading mb={LayoutConstants.margin.paragraph}>
        Key Characteristics Of a Successful Early Stage Founder
      </Heading>
      <BodyText color="whiteAlpha.700">05/09/2021</BodyText>
      <Callout
        display="inline-flex"
        title="Qualities"
        mb={LayoutConstants.margin.paragraph}
        mt={LayoutConstants.margin.small}
      >
        Optimism, pragmatism, stubbornness, and steady, ceaseless effort
      </Callout>
      <BodyText mb={LayoutConstants.margin.paragraph}>
        Each one of the above characteristics in isolation is futile, maybe even
        harmful. For example, a stubborn individual is unable to change their
        beliefs and may end up building a solution to a doomed problem space. By
        blending stubbornness with pragmatism, one is more likely to pivot when
        presented with the right signs, thereby minimising wasted time and
        resources. Pragmatism without optimism leads to constant doubt, lack of
        innovation and not persisting long enough to validate their ideas.
      </BodyText>
      <BodyText mb={LayoutConstants.margin.paragraph}>
        Now for each individually:
      </BodyText>
      <List fontSize="lg" styleType="disc" spacing={3}>
        <ListItem>
          Without <Quality>optimism</Quality>, there will be no innovation
          (think Steve Jobs). You'll have limited resistance to the tough
          conditions that exist in startups. Despite tons of information
          provided by zealous pessimists, optimists believe everything will turn
          out fine. Pessimism is the default state of the human psyche and the
          easy way out. Optimism takes effort.
        </ListItem>
        <ListItem>
          <Quality>Pragmatism</Quality> allows you to constantly shift your
          belief systems and re-prioritise. Most companies fail because their
          founders aren't able to prioritise effectively and drop things that
          aren't suitable for the current state of their business. Pragmatism
          allows you to battle against the inner perfectionist. An example
          mindset: "Just because something might have good results doesn't mean
          you should do it." You should consider all aspects of the decision and
          corresponding tradeoffs. E.g. "Creating an IG account would be good!"
          → "It requires us to take our limited resources creating high-quality
          blog content" → "Let's do it later."
        </ListItem>
        <ListItem>
          <Quality>Stubbornness</Quality>: when combined with pragmatism, we
          have a concise way of saying "strong beliefs loosely held". As
          mentioned above, the conditions in an early-stage startup are tough.
          You will have so much evidence why it won't work. Stubbornness and
          optimism help to stay grounded whilst experiencing large amounts of
          failure.
        </ListItem>
        <ListItem>
          <Quality>Steady, ceaseless effort</Quality> is in essence consistency.
          Without this, nothing significant happens.
        </ListItem>
      </List>
    </Box>
  );
}

EarlyStageFounderCharacter.getLayout = (page) => (
  <Layout title="Key Characteristics of an Early Stage Founder">{page}</Layout>
);

export default EarlyStageFounderCharacter;
