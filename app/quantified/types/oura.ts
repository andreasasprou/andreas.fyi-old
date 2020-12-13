export interface OuraReadinessDatapoint {
  period_id: number
  rest_mode_state: number
  score: number
  score_activity_balance: number
  score_hrv_balance: number
  score_previous_day: number
  score_previous_night: number
  score_recovery_index: number
  score_resting_hr: number
  score_sleep_balance: number
  score_temperature: number
  summary_date: string // YYY-MM-DD
}

export interface OuraSleepDatapoint {
  awake: number
  bedtime_end: string
  bedtime_end_delta: number
  bedtime_start: string
  bedtime_start_delta: number
  breath_average: number
  deep: number
  duration: number
  efficiency: number
  hr_5min: number[]
  hr_average: number
  hr_lowest: number
  hypnogram_5min: string
  is_longest: number
  light: number
  midpoint_at_delta: number
  midpoint_time: number
  onset_latency: number
  period_id: number
  rem: number
  restless: number
  rmssd: number
  rmssd_5min: number[]
  score: number
  score_alignment: number
  score_deep: number
  score_disturbances: number
  score_efficiency: number
  score_latency: number
  score_rem: number
  score_total: number
  summary_date: string
  temperature_delta: number
  temperature_deviation: number
  temperature_trend_deviation: number
  timezone: number
  total: number
}

export interface OuraData {
  sleep: OuraSleepDatapoint[]
  readiness: OuraReadinessDatapoint[]
}
