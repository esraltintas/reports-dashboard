import React from "react"
import {
  StyledReportDetail,
  StyledReportDetailTitleWrapper,
  StyledReportDetailCard,
  StyledReportDetailCardWrapper,
} from "./index.styled"

const ReportDetail = ({ id, title, total, currency }) => {
  const toggleDetailWrapper = () => {
    var el = document.getElementById(id)
    el.style.display = el.style.display === "none" ? "block" : "none"
  }
  return (
    <StyledReportDetail>
      <StyledReportDetailTitleWrapper onClick={() => toggleDetailWrapper()}>
        <span>{title}</span>
        <span>
          TOTAL:{total} {currency}
        </span>
      </StyledReportDetailTitleWrapper>
      <StyledReportDetailCardWrapper id={id} style={{ display: "none" }}>
        <StyledReportDetailCard color="white">
          <span>Date</span>
          <span>Gateway 1</span>
          <span>Transaction ID</span>
          <span>Amount</span>
        </StyledReportDetailCard>
        <StyledReportDetailCard>
          <span>01/21/2021</span>
          <span>Gateway 2</span>
          <span>a732b</span>
          <span>3964 USD</span>
        </StyledReportDetailCard>
        <StyledReportDetailCard color="white">
          <span>01/24/2021</span>
          <span>Gateway 3</span>
          <span>a732b</span>
          <span>2554 USD</span>
        </StyledReportDetailCard>
        <StyledReportDetailCard>
          <span>01/27/2021</span>
          <span>Gateway 4</span>
          <span>a732b</span>
          <span>3547 USD</span>
        </StyledReportDetailCard>
      </StyledReportDetailCardWrapper>
    </StyledReportDetail>
  )
}

export default ReportDetail
