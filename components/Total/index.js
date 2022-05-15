import React from "react"
import { StyledTotalWrapper } from "./index.styles"

const Total = ({ totalText, total, currency }) => {
  return (
    <>
      {total && (
        <StyledTotalWrapper>
          {totalText} | {total} {currency}
        </StyledTotalWrapper>
      )}
    </>
  )
}

export default Total
