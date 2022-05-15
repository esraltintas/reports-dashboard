import styled from "@emotion/styled"

export const StyledDoughnutChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledDonutChartTitles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2.75rem;
  padding: 1.25rem;
  border-radius: 0.625rem;
  background-color: #f1fafe;
  min-width: 32rem;
`

export const StyledChartParts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

export const StyledColor = styled.div`
  background-color: ${(p) => p.color};
  border-radius: 0.3125rem;
  width: 0.9375rem;
  height: 0.9375rem;
`

export const StyledTitle = styled.span`
  font-size: 0.875rem;
  line-height: 1rem;
  color: #011f4b;
`

export const StyledDoughnutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5.875rem;
`
