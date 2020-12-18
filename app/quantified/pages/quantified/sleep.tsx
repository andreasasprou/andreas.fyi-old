import React from "react"
import { OuraData } from "quantified/types"
import { OuraService } from "quantified/services/oura"
import { OuraInsights } from "quantified/components/Oura"
import Layout from "../../../layouts/Layout"

interface QuantifiedPageProps {
  oura: OuraData
}

function QuantifiedPage({ oura, ...rest }: QuantifiedPageProps) {
  console.log(oura)

  return (
    <>
      <OuraInsights {...oura} />
    </>
  )
}

export async function getServerSideProps() {
  const oura = OuraService.allData()

  return {
    props: {
      oura: await oura,
    },
  }
}

QuantifiedPage.getLayout = (page) => <Layout title="Sleep">{page}</Layout>

export default QuantifiedPage
