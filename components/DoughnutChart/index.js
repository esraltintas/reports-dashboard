import React from "react"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js"
import { groupBy } from "../../utils"
import Total from "../Total"
import {
  StyledDonutChartTitles,
  StyledDoughnutChartWrapper,
  StyledChartParts,
  StyledColor,
  StyledTitle,
  StyledDoughnutWrapper,
} from "./index.styles"

ChartJS.register(ArcElement, Tooltip)

const DoughnutChart = ({ type, chartInfo }) => {
  let charts
  if (type === "project") {
    charts = groupBy(chartInfo[0].reports, "gatewayName")
  } else {
    charts = groupBy(chartInfo[0].reports, "projectName")
  }
  const chartData = Object.keys(charts)

  const colors = ["#A259FF", "#F24E1E", "#FFC107", "#6497B1"]
  let labels = []

  chartData.forEach((cd) => {
    let totalAmount = 0
    charts[cd].forEach(({ amount }) => {
      totalAmount += amount
    })
    if (labels.length < 4) {
      labels.push({
        title: cd,
        color: colors[labels.length],
        data: totalAmount,
      })
    }
  })

  let total = 0
  chartInfo[0].reports.forEach((report) => {
    total += report.amount
  })

  const data = {
    datasets: [
      {
        data: labels.map(({ data }) => data),
        backgroundColor: labels.map(({ color }) => color),
      },
    ],
  }

  return (
    <StyledDoughnutChartWrapper>
      <StyledDonutChartTitles>
        {labels &&
          labels.map((i, key) => (
            <StyledChartParts key={key}>
              <StyledColor color={i.color} />
              <StyledTitle>{i.title}</StyledTitle>
            </StyledChartParts>
          ))}
      </StyledDonutChartTitles>
      <StyledDoughnutWrapper>
        <Doughnut
          data={data}
          height={200}
          width={200}
          options={{ responsive: true, maintainAspectRatio: true }}
        />
      </StyledDoughnutWrapper>
      <Total
        totalText={`${type.toUpperCase()} Total`}
        total={total.toFixed(3).replace(".", ",")}
        currency="USD"
      />
    </StyledDoughnutChartWrapper>
  )
}

export default DoughnutChart
