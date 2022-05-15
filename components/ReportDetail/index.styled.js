import styled from "@emotion/styled"

export const StyledReportDetail = styled.div``

export const StyledReportDetailTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem;
  margin-bottom: 0.875rem;
  background-color: #ffffff;
  border-radius: 0.625rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: #011f4b;
  cursor: pointer;
`

export const StyledReportDetailCard = styled.div`
  display: grid;
  grid-template-columns:
    minmax(auto, 25rem) minmax(1rem, 25rem) minmax(1rem, 25rem)
    minmax(1rem, 5rem);
  grid-template-rows: 1fr;
  padding: 0.3125rem;
  margin: 0.9375rem;
  background-color: ${(p) => (p.color === "white" ? "#fff" : "#F1FAFE;")};
  font-weight: 400;
  font-size: 16px;
  line-height: 164.4%;
  color: #011f4b;
`

export const StyledReportDetailCardWrapper = styled.div`
  max-height: 16.6875rem;
  overflow: scroll;
  scroll-behavior: auto;
`
