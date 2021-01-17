import PocketCasts from 'pocketcasts';
import { PodcastsData } from 'preferences/types';
import { ServerConstants } from 'utils/constants/server';

export async function getPocketCastsData(): Promise<PodcastsData> {
  const pocketcasts = new PocketCasts(
    ServerConstants.pocketCasts.password,
    ServerConstants.pocketCasts.password,
  );

  await pocketcasts.login();

  const inProgress = pocketcasts.getInProgress();
  const started = pocketcasts.getStarred();
  const history = pocketcasts.getHistory();
  const stats = pocketcasts.getStats();

  return {
    inProgress: await inProgress,
    started: await started,
    history: await history,
    stats: await stats,
  };
}
