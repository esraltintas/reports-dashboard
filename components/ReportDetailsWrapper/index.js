import React from "react"
import ReportDetail from "../ReportDetail"
import {
  StyledReportDetailWrapper,
  StyledReportDetailTitle,
} from "./index.styles"

const ReportDetailsWrapper = ({ projects, gateways, projectId, gatewayId }) => {
  let listedProjects =
    projects && projects.filter((p) => p.projectId === projectId)

  let listedGateways =
    gateways && gateways.filter((p) => p.gatewayId === gatewayId)

  return (
    <StyledReportDetailWrapper>
      <StyledReportDetailTitle>
        {`${projectId === "" ? "All projects" : listedProjects[0].name} |
        ${gatewayId === "" ? "All gateways" : listedGateways[0].name}`}
      </StyledReportDetailTitle>
      {projectId === "" || (projectId !== "" && gatewayId !== "")
        ? projects.map((p, key) => (
            <ReportDetail
              detail={p}
              type="project"
              key={key}
              selectedProject={projectId}
              selectedGateway={gatewayId}
            />
          ))
        : gateways.map((g, key) => (
            <ReportDetail
              detail={g}
              type="gateway"
              key={key}
              selectedProject={projectId}
              selectedGateway={gatewayId}
            />
          ))}
    </StyledReportDetailWrapper>
  )
}

export default ReportDetailsWrapper
