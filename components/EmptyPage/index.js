import React from "react"
import Image from "next/image"
;<Image src="/assets/noReports.svg" width="400" height="170" />

import { StyledEmptyWrapper, StyledText, StyledTitle } from "./index.styles"

const EmptyPage = () => {
  return (
    <StyledEmptyWrapper>
      <StyledTitle>Oppsss!</StyledTitle>
      <StyledText>Sorry, we have just reports page</StyledText>
      <Image src="/assets/noReports.svg" width="400" height="170" />
    </StyledEmptyWrapper>
  )
}

export default EmptyPage
