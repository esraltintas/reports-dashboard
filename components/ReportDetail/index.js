import React from "react"
import {
  StyledReportDetail,
  StyledReportDetailTitleWrapper,
  StyledReportDetailCard,
  StyledReportDetailCardWrapper,
} from "./index.styled"

const ReportDetail = ({ type, detail, selectedGateway, selectedProject }) => {
  let total = 0
  detail?.reports?.forEach((d) => {
    total += d.amount
  })

  const toggleDetailWrapper = () => {
    var el = document.getElementById(
      type === "project" ? detail.projectId : detail.gatewayId
    )
    el.style.display = el.style.display === "none" ? "block" : "none"
  }
  return total !== 0 ? (
    <StyledReportDetail>
      <StyledReportDetailTitleWrapper onClick={() => toggleDetailWrapper()}>
        <span>{detail?.name}</span>
        <span>{`TOTAL: ${total.toFixed(3).replace(".", ",")} USD`}</span>
      </StyledReportDetailTitleWrapper>
      <StyledReportDetailCardWrapper
        id={type === "project" ? detail.projectId : detail.gatewayId}
        style={{ display: "none" }}>
        <StyledReportDetailCard
          color="white"
          selectedProject={selectedProject}
          selectedGateway={selectedGateway}>
          <div>Date</div>
          {!(selectedProject !== "" || selectedGateway !== "") && (
            <div>Gateway</div>
          )}
          <div>Transaction ID</div>
          <div>Amount</div>
        </StyledReportDetailCard>
        {detail.reports.map((report, key) => {
          return (
            <StyledReportDetailCard
              selectedProject={selectedProject}
              selectedGateway={selectedGateway}
              color={key % 2 !== 0 ? "white" : 0}
              key={key}>
              <span>{report.created}</span>
              {!(selectedProject !== "" || selectedGateway !== "") && (
                <span>{report.gatewayName}</span>
              )}
              <span>{report.paymentId}</span>
              <span>{`${report.amount.toFixed()} USD`}</span>
            </StyledReportDetailCard>
          )
        })}
      </StyledReportDetailCardWrapper>
    </StyledReportDetail>
  ) : null
}

export default ReportDetail
