import React from "react"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js"
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
  const labels = [
    { title: "Project 1", color: "#A259FF" },
    { title: "Project 2", color: "#F24E1E" },
    { title: "Project 3", color: "#FFC107" },
    { title: "Project 4", color: "#6497B1" },
  ]

  let total = 0
  chartInfo[0].reports.forEach((report) => {
    total += report.amount
  })

  const data = {
    datasets: [
      {
        data: [300, 50, 100, 20],
        backgroundColor: ["#A259FF", "#F24E1E", "#FFC107", "#6497B1"],
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
        totalText={`${type} Total`}
        total={total.toFixed(3).replace(".", ",")}
        currency="USD"
      />
    </StyledDoughnutChartWrapper>
  )
}

export default DoughnutChart
