import React from 'react';
import db from 'db';
import Layout from 'layouts/Layout';
import { GlucoseReading } from 'quantified/types';
import superjson from 'superjson';

interface GlucoseQuantifiedPageProps {
  data: string;
}

const parseReadings = (data: string): GlucoseReading[] => {
  try {
    return superjson.parse(data);
  } catch (_) {
    return [];
  }
};

function GlucoseQuantifiedPage({ data }: GlucoseQuantifiedPageProps) {
  const readings = parseReadings(data);

  console.log(readings);

  return <>Readings</>;
}

export async function getStaticProps() {
  const readings = await db.glucoseReading.findMany({});

  return {
    props: {
      data: superjson.stringify(readings)
    },
    revalidate: 60 * 60 // one hour
  };
}

GlucoseQuantifiedPage.getLayout = (page) => <Layout title="Glucose">{page}</Layout>;

export default GlucoseQuantifiedPage;
