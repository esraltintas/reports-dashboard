import React from "react"
import {
  StyledReportDetail,
  StyledReportDetailTitleWrapper,
  StyledReportDetailCard,
  StyledReportDetailCardWrapper,
} from "./index.styled"

const ReportDetail = ({ project }) => {
  let total = 0
  project?.reports?.forEach((project) => {
    total += project.amount
  })

  const toggleDetailWrapper = () => {
    var el = document.getElementById(project.projectId)
    el.style.display = el.style.display === "none" ? "block" : "none"
  }
  return (
    <StyledReportDetail>
      <StyledReportDetailTitleWrapper onClick={() => toggleDetailWrapper()}>
        <span>{project?.name}</span>
        <span>{`TOTAL: ${total.toFixed(3).replace(".", ",")} USD`}</span>
      </StyledReportDetailTitleWrapper>
      <StyledReportDetailCardWrapper
        id={project.projectId}
        style={{ display: "none" }}>
        <StyledReportDetailCard color="white">
          <div>Date</div>
          <div>Gateway</div>
          <div>Transaction ID</div>
          <div>Amount</div>
        </StyledReportDetailCard>
        {project.reports.map((report, key) => {
          return (
            <StyledReportDetailCard color={key % 2 !== 0 && "white"}>
              <span>{report.created}</span>
              <span>{report.gatewayId}</span>
              <span>{report.paymentId}</span>
              <span>{`${report.amount.toFixed()} USD`}</span>
            </StyledReportDetailCard>
          )
        })}
      </StyledReportDetailCardWrapper>
    </StyledReportDetail>
  )
}

export default ReportDetail
