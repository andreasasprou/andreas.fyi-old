export interface PodcastEpisode {
  duration: number
  podcastTitle: string
  published: string
  title: string
  url: string
}

export interface PodcastsData {
  inProgress: any
  started: any
  history: {
    episodes: {}[]
  }
  stats: {
    timeListened: string
  }
}
