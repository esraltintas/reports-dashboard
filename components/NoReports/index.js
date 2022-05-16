import React from "react"
import Image from "next/image"
import {
  StyledWrapperNoReports,
  StyledNoReportsTitle,
  StyledNoReportsDesc,
} from "./index.styles"

const NoReports = () => {
  return (
    <StyledWrapperNoReports>
      <StyledNoReportsTitle>No Reports</StyledNoReportsTitle>
      <StyledNoReportsDesc>
        Currently you have no data for the reports to be generated. Once you
        start generating traffic through the Balance application the reports
        will be shown.
      </StyledNoReportsDesc>
      <Image src="/assets/noReports.svg" width="400" height="170" />
    </StyledWrapperNoReports>
  )
}

export default NoReports
