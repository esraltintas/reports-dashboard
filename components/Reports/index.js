import React, { useEffect, useState } from "react"
import axios from "axios"

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
  const [reports, setReports] = useState("")

  const postReport = async ({ from, to, projectId, gatewayId }) => {
    const res = await axios.post(
      "http://178.63.13.157:8090/mock-api/api/report",
      { from: from, to: to, projectId: projectId, gatewayId: gatewayId }
    )
    setReports(res?.data?.data[0])
  }

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
          <Button onClick={postReport} text="Generate report" />
        </StyledButtonsWrapper>
      </StyledReportsHeader>
      <StyledReportsContentWrapper>
        {reports ? (
          <>
            <StyledReportsContent>
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
            <Total totalText="Total" total="144000" currency="USD" />{" "}
          </>
        ) : (
          <NoReports />
        )}
      </StyledReportsContentWrapper>
    </StyledReportsWrapper>
  )
}

export default Reports
