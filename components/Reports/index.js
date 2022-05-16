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

  const [projectId, setProjectId] = useState("")
  const [gatewayId, setGatewayId] = useState("")
  const [selectedProject, setSelectedProject] = useState("")
  const [selectedGateway, setSelectedGateway] = useState("")
  const [selectedFrom, setSelectedFrom] = useState(null)
  const [selectedTo, setSelectedTo] = useState(null)
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)

  const [projects, setProjects] = useState("")
  const [gateways, setGateways] = useState("")

  useEffect(() => {
    if (projects === "") {
      const fetchProjects = async () => {
        const res = await axios.get(
          "http://178.63.13.157:8090/mock-api/api/projects"
        )

        setProjects(res?.data?.data)
      }

      fetchProjects()
    }
  }, [])

  useEffect(() => {
    if (gateways === "") {
      const fetchGateways = async () => {
        const res = await axios.get(
          "http://178.63.13.157:8090/mock-api/api/gateways"
        )

        setGateways(res?.data?.data)
      }

      fetchGateways()
    }
  }, [])

  const handleChangeFrom = (date) => {
    setSelectedFrom(date)
  }

  const handleChangeTo = (date) => {
    setSelectedTo(date)
  }

  const postReport = async () => {
    setTo(selectedTo)
    setFrom(selectedFrom)
    setGatewayId(selectedGateway)
    setProjectId(selectedProject)
    const res = await axios.post(
      "http://178.63.13.157:8090/mock-api/api/report",
      {
        from: from,
        to: to,
        projectId: projectId,
        gatewayId: gatewayId,
      }
    )
    setReports(res?.data?.data)
  }

  let gatewayOptions =
    gateways &&
    gateways.map((g) => ({
      value: g.gatewayId,
      label: g.name,
    }))
  gateways && gatewayOptions.unshift({ value: "", label: "All Gateways" })

  let projectOptions =
    projects &&
    projects.map((p) => ({
      value: p.projectId,
      label: p.name,
    }))
  projects && projectOptions.unshift({ value: "", label: "All Projects" })

  projects &&
    projects.forEach((p) => {
      p.reports = []
      reports &&
        reports.forEach((r) => {
          if (r.projectId === p.projectId) {
            p.reports.push(r)
          }
        })
    })
  gateways &&
    gateways.forEach((g) => {
      g.reports = []
      reports &&
        reports.forEach((r) => {
          if (r.gatewayId === g.gatewayId) {
            g.reports.push(r)
          }
        })
    })

  return (
    <StyledReportsWrapper>
      <StyledReportsHeader>
        <StyledReportsTitleWrapper>
          <StyledReportsTitle>Reports</StyledReportsTitle>
        </StyledReportsTitleWrapper>
        <StyledButtonsWrapper>
          <Dropdown
            onChange={(project) => {
              setSelectedProject(project.value)
            }}
            options={projectOptions}
            placeholder="Select project"
          />
          <Dropdown
            onChange={(gateway) => {
              setSelectedGateway(gateway.value)
            }}
            options={gatewayOptions}
            placeholder="Select gateway"
          />
          <DateComponent
            date={from}
            placeholder="From date"
            handleChange={(date) => handleChangeFrom(date)}
          />
          <DateComponent
            date={to}
            placeholder="To date"
            handleChange={(date) => handleChangeTo(date)}
          />
          <Button onClick={postReport} text="Generate report" />
        </StyledButtonsWrapper>
      </StyledReportsHeader>
      <StyledReportsTitleDesc>
        Easily generate a report of your transactions
      </StyledReportsTitleDesc>
      <StyledReportsContentWrapper>
        {reports ? (
          <>
            <StyledReportsContent>
              <ReportDetailsWrapper
                reports={reports}
                projects={projects}
                gateways={gateways}
                projectId={projectId}
                gatewayId={gatewayId}
              />
              {!(
                (projectId === "" && gatewayId === "") ||
                (projectId !== "" && gatewayId !== "")
              ) ? (
                projectId !== "" ? (
                  <DoughnutChart
                    type="Project"
                    chartInfo={projects.filter(
                      (p) => p.projectId === projectId
                    )}
                  />
                ) : null
              ) : null}
            </StyledReportsContent>
            {(projectId === "" && gatewayId === "") ||
            (projectId !== "" && gatewayId !== "") ? (
              <Total totalText="Total" total="144000" currency="USD" />
            ) : null}
          </>
        ) : (
          <NoReports />
        )}
      </StyledReportsContentWrapper>
    </StyledReportsWrapper>
  )
}

export default Reports
