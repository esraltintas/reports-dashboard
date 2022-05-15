import React from "react"
import ReportDetail from "../ReportDetail"
import {
  StyledReportDetailWrapper,
  StyledReportDetailTitle,
} from "./index.styles"

const ReportDetailsWrapper = ({
  projects,
  gateways,
  reports,
  selectedProject,
  selectedGateway,
}) => {
  let listedProjects =
    projects && projects.filter((p) => p.projectId === selectedProject)

  let listedGateways =
    gateways && gateways.filter((p) => p.gatewayId === selectedGateway)

  projects &&
    projects.forEach((project) => {
      project.reports = []
      reports &&
        reports.forEach((report) => {
          if (report.projectId === project.projectId) {
            project.reports.push(report)
          }
        })
    })
  gateways &&
    gateways.forEach((gateway) => {
      gateway.reports = []
      reports &&
        reports.forEach((report) => {
          if (report.gatewayId === gateway.gatewayId) {
            gateway.reports.push(report)
          }
        })
    })

  return (
    <StyledReportDetailWrapper>
      <StyledReportDetailTitle>
        {`${selectedProject === "" ? "All projects" : listedProjects[0].name} |
        ${selectedGateway === "" ? "All gateways" : listedGateways[0].name}`}
      </StyledReportDetailTitle>
      {projects.map((project) => (
        <ReportDetail project={project} />
      ))}
    </StyledReportDetailWrapper>
  )
}

export default ReportDetailsWrapper
