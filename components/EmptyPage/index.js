import React from "react"

import { StyledEmptyWrapper, StyledText, StyledTitle } from "./index.styles"

const EmptyPage = () => {
  return (
    <StyledEmptyWrapper>
      <StyledTitle>Oppsss!</StyledTitle>
      <StyledText>Sorry, we have just reports page</StyledText>
    </StyledEmptyWrapper>
  )
}

export default EmptyPage
