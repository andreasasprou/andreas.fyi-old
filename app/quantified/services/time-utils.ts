function timeToSeconds(hms: string) {
  const parts = hms.split(":")
  const h = parseInt(parts[0])
  const m = parseInt(parts[1])
  const s = parseInt(parts[2])

  return h * 60 * 60 + m * 60 + s
}

function secondsToTime(seconds: number) {
  let hour: string | number = Math.floor(seconds / (60 * 60))

  if (hour < 10) {
    hour = "0" + hour
  }

  seconds = seconds % (60 * 60)

  let minute: string | number = Math.floor(seconds / 60)

  if (minute < 10) {
    minute = "0" + minute
  }

  let secondsFormatted: string | number = seconds % 60

  if (secondsFormatted < 10) {
    secondsFormatted = "0" + seconds
  }

  return hour + ":" + minute + ":" + secondsFormatted
}

// https://rosettacode.org/wiki/Averages/Mean_time_of_day#JavaScript
export function getAverageTimeOfDay(dates: Date[]) {
  const times = dates.map((date) => date.toTimeString().split(" ")[0])
  const aveSeconds = Math.round(
    times.reduce((acc, time) => acc + timeToSeconds(time), 0) / times.length
  )

  return secondsToTime(aveSeconds)
}
