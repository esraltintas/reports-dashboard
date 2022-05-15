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
  const [selectedProject, setSelectedProject] = useState("")
  const [selectedGateway, setSelectedGateway] = useState("")
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
    setFrom(date)
  }

  const handleChangeTo = (date) => {
    setTo(date)
  }

  const postReport = async () => {
    const res = await axios.post(
      "http://178.63.13.157:8090/mock-api/api/report",
      {
        from: from,
        to: to,
        projectId: selectedProject,
        gatewayId: selectedGateway,
      }
    )
    setReports(res?.data?.data)
  }

  let gatewayOptions =
    gateways &&
    gateways.map((gateway) => ({
      value: gateway.gatewayId,
      label: gateway.name,
    }))
  gateways && gatewayOptions.unshift({ value: "", label: "All Gateways" })

  let projectOptions =
    projects &&
    projects.map((project) => ({
      value: project.projectId,
      label: project.name,
    }))
  projects && projectOptions.unshift({ value: "", label: "All Projects" })

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
      <StyledReportsContentWrapper>
        {reports ? (
          <>
            <StyledReportsContent>
              <ReportDetailsWrapper
                reports={reports}
                projects={projects}
                gateways={gateways}
                selectedProject={selectedProject}
                selectedGateway={selectedGateway}
              />
              {!(
                (selectedProject === "" && selectedGateway === "") ||
                (selectedProject !== "" && selectedGateway !== "")
              ) ? (
                <DoughnutChart
                  labels={[
                    { title: "Project 1", color: "#A259FF" },
                    { title: "Project 2", color: "#F24E1E" },
                    { title: "Project 3", color: "#FFC107" },
                    { title: "Project 4", color: "#6497B1" },
                  ]}
                />
              ) : null}
            </StyledReportsContent>
            {(selectedProject === "" && selectedGateway === "") ||
            (selectedProject !== "" && selectedGateway !== "") ? (
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
