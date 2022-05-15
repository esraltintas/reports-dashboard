import React from "react"
import NoReports from "../NoReports"
import Dropdown from "../Dropdown"
import DateComponent from "../DateComponent"
import Button from "../Button"
import Total from "../Total"
import ReportDetailsWrapper from "../ReportDetailsWrapper"
import DoughnutChart from "../DoughnutChart"

import {
  StyledReportsWrapper,
  StyledReportsHeader,
  StyledReportsContentWrapper,
  StyledReportsContent,
  StyledReportsTitleWrapper,
  StyledReportsTitle,
  StyledReportsTitleDesc,
  StyledButtonsWrapper,
} from "./index.styles"

const Reports = () => {
  const projectOptions = [
    {
      value: 1,
      label: "Test",
    },
  ]
  return (
    <StyledReportsWrapper>
      <StyledReportsHeader>
        <StyledReportsTitleWrapper>
          <StyledReportsTitle>Reports</StyledReportsTitle>
          <StyledReportsTitleDesc>
            Easily generate a report of your transactions
          </StyledReportsTitleDesc>
        </StyledReportsTitleWrapper>
        <StyledButtonsWrapper>
          <Dropdown options={projectOptions} placeholder="Select project" />
          <Dropdown options={projectOptions} placeholder="Select gateway" />
          <DateComponent />
          <DateComponent />
          <Button text="Generate report" />
        </StyledButtonsWrapper>
      </StyledReportsHeader>
      <StyledReportsContentWrapper>
        {/*         <NoReports />
         */}{" "}
        <StyledReportsContent>
          {" "}
          <ReportDetailsWrapper />
          <DoughnutChart
            labels={[
              { title: "Project 1", color: "#A259FF" },
              { title: "Project 2", color: "#F24E1E;" },
              { title: "Project 3", color: "#FFC107" },
              { title: "Project 4", color: "#6497B1" },
            ]}
          />
        </StyledReportsContent>
        <Total totalText="Total" total="144000" currency="USD" />
      </StyledReportsContentWrapper>
    </StyledReportsWrapper>
  )
}

export default Reports
