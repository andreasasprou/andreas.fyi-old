import React from "react";
import { getPocketCastsData } from "preferences/services/pocketcasts";
import { PodcastsData } from "preferences/types";
import { ListeningTime } from "preferences/components/Podcasts";
import Layout from "layouts/Layout";

interface PodcastsPageProps {
  podcasts: PodcastsData;
}

function PodcastsPage({ podcasts }: PodcastsPageProps) {
  return <ListeningTime timeListenedInSeconds={podcasts?.stats?.timeListened} />;
}

export async function getServerSideProps() {
  const pocdcasts = getPocketCastsData();

  return {
    props: {
      podcasts: await pocdcasts,
    },
  };
}

PodcastsPage.getLayout = (page) => <Layout title="Podcasts">{page}</Layout>;

export default PodcastsPage;
