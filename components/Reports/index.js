import React from "react"
import NoReports from "../NoReports"
import Dropdown from "../Dropdown"
import DateComponent from "../DateComponent"
import Button from "../Button"

import {
  StyledReportsWrapper,
  StyledReportsHeader,
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
      <StyledReportsContent>
        {/*         <NoReports />
         */}{" "}
      </StyledReportsContent>
    </StyledReportsWrapper>
  )
}

export default Reports
