import { PageTextWithHover, PageSubSection, PageText, PageTextHighlight } from "ui/common"
import React from "react"
import { OuraData, OuraSleepDatapoint } from "quantified/types"
import parseISO from "date-fns/parseISO"
import { getAverageTimeOfDay } from "quantified/services/time-utils"
import sub from "date-fns/sub"
import { Text, Center, Grid } from "@chakra-ui/layout"

interface WakeUpTimeProps {
  sleep: OuraSleepDatapoint[]
}

// HH:MM:SS -> HH:MM
const getHourMinutesFromTime = (time: string) => time.split(":").slice(0, 2).join(":")

const getYesterday = (sleep: OuraSleepDatapoint[]) => {
  return sleep.find(
    (item) =>
      parseISO(item.summary_date).getDay() ===
      sub(new Date(), {
        days: 1,
      }).getDay()
  ) as OuraSleepDatapoint
}

function WakeUpTime({ sleep }: WakeUpTimeProps) {
  const yesterday = getYesterday(sleep)
  const yesterdayWakeupTime = getHourMinutesFromTime(
    new Date(yesterday.bedtime_end).toTimeString().split(" ")[0]
  )
  const aveWakeUpTime = getHourMinutesFromTime(
    getAverageTimeOfDay(sleep.map((item) => new Date(item.bedtime_end)))
  )

  return (
    <PageText>
      I woke up at <PageTextHighlight>{yesterdayWakeupTime}</PageTextHighlight> this morning,
      compared to{" "}
      <PageTextWithHover hoverContent="TODO: Sparklines chart of last month wake up time">
        <PageTextHighlight>{aveWakeUpTime}</PageTextHighlight>
      </PageTextWithHover>{" "}
      average over the last month.
    </PageText>
  )
}

function formatHours(hours: number) {
  const rhours = Math.floor(hours)
  const minutes = (hours - rhours) * 60
  const rminutes = Math.round(minutes)

  return `${rhours}h ${rminutes}m`
}

const secondsToHours = (seconds: number) => formatHours(seconds / 3600)

function SleepSummary({ day }: { day: OuraSleepDatapoint }) {
  const stats = [
    {
      title: "Sleep score",
      stat: `${day.score}/100`,
    },
    {
      title: "Time in bed",
      stat: secondsToHours(day.duration),
    },
    {
      title: "Efficiency",
      stat: `${day.efficiency}%`,
    },
    {
      title: "RHR",
      stat: day.hr_lowest,
    },
  ]

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={10}>
      {stats.map(({ title, stat }) => (
        <Center flexDirection="column" key={title}>
          <Text
            textTransform="uppercase"
            textAlign="center"
            fontSize="12px"
            fontWeight={700}
            opacity={0.5}
          >
            {title}
          </Text>
          <Text textAlign="center" color="whiteAlpha.300">
            {stat}
          </Text>
        </Center>
      ))}
    </Grid>
  )
}

function SleepData({ sleep }: WakeUpTimeProps) {
  const yesterday = getYesterday(sleep)
  const average = sleep.reduce((sum, item) => sum + item.total, 0) / sleep.length

  return (
    <PageText>
      I had{" "}
      <PageTextWithHover hoverContent={<SleepSummary day={yesterday} />}>
        <PageTextHighlight>{secondsToHours(yesterday.total)}</PageTextHighlight>
      </PageTextWithHover>{" "}
      of sleep last night, compared to{" "}
      <PageTextWithHover hoverContent="TODO: Sparklines chart of last month wake up time">
        <PageTextHighlight>{secondsToHours(average)}</PageTextHighlight>
      </PageTextWithHover>{" "}
      average over the last month.
    </PageText>
  )
}

export function OuraInsights({ sleep }: OuraData) {
  return (
    <PageSubSection>
      <WakeUpTime sleep={sleep} />
      <SleepData sleep={sleep} />
    </PageSubSection>
  )
}
