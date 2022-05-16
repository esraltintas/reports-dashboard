import React from "react"
import Image from "next/image"

import { StyledEmptyWrapper, StyledText, StyledTitle } from "./index.styles"

const EmptyPage = () => {
  return (
    <StyledEmptyWrapper>
      <StyledTitle>Oppsss!</StyledTitle>
      <StyledText>Sorry, we have just reports page</StyledText>
      <Image src="/assets/004.jpg" width="500" height="400" />
    </StyledEmptyWrapper>
  )
}

export default EmptyPage
