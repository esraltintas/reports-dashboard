import React from "react"
import ReportDetail from "../ReportDetail"
import {
  StyledReportDetailWrapper,
  StyledReportDetailTitle,
} from "./index.styles"

const ReportDetailsWrapper = () => {
  return (
    <StyledReportDetailWrapper>
      <StyledReportDetailTitle>
        All projects | All gateways
      </StyledReportDetailTitle>
      <ReportDetail id="1" title="Project 1" total="14,212" currency="USD" />
      <ReportDetail id="2" title="Project 2" total="14,212" currency="USD" />
      <ReportDetail id="3" title="Project 3" total="14,245" currency="USD" />
      <ReportDetail id="4" title="Project 4" total="13,212" currency="USD" />
    </StyledReportDetailWrapper>
  )
}

export default ReportDetailsWrapper
