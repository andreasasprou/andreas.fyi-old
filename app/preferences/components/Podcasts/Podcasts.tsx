import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';
import { PageSubSection, PageText } from 'ui/common';

interface ListeningTimeProps extends BoxProps {
  timeListenedInSeconds: string;
}

const formatSeconds = (timeInSeconds: string) => {
  let delta = parseInt(timeInSeconds, 10);

  // calculate (and subtract) whole days
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  return `${days} days, ${hours} hours and ${minutes} minutes`;
};

export function ListeningTime({
  timeListenedInSeconds,
  ...rest
}: ListeningTimeProps) {
  return (
    <PageSubSection spacing={2} {...rest}>
      <PageText>
        I've listen to{' '}
        <PageText as="span" color="brand.500">
          {formatSeconds(timeListenedInSeconds)}
        </PageText>{' '}
        of podcasts, according to Pocket Casts API.
      </PageText>
    </PageSubSection>
  );
}
