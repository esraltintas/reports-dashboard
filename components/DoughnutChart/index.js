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

const data = {
  datasets: [
    {
      data: [300, 50, 100, 20],
      backgroundColor: ["#A259FF", "#F24E1E", "#FFC107", "#6497B1"],
    },
  ],
}

const DoughnutChart = ({ labels }) => {
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
      <Total totalText="Project Total" total="14,065" currency="USD" />
    </StyledDoughnutChartWrapper>
  )
}

export default DoughnutChart
