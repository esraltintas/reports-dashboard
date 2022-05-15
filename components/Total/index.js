import React from "react"
import { StyledTotalWrapper } from "./index.styles"

const Total = ({ total, currency }) => {
  return (
    <>
      {total && (
        <StyledTotalWrapper>
          TOTAL: {total} {currency}
        </StyledTotalWrapper>
      )}
    </>
  )
}

export default Total
