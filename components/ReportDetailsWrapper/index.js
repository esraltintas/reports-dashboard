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

  return (
    <StyledReportDetailWrapper>
      <StyledReportDetailTitle>
        {`${selectedProject === "" ? "All projects" : listedProjects[0].name} |
        ${selectedGateway === "" ? "All gateways" : listedGateways[0].name}`}
      </StyledReportDetailTitle>
      {projects.map((project, key) => (
        <ReportDetail
          project={project}
          key={key}
          selectedProject={selectedProject}
          selectedGateway={selectedGateway}
        />
      ))}
    </StyledReportDetailWrapper>
  )
}

export default ReportDetailsWrapper
