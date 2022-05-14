import React from "react"
import { StyledHeaderWrapper, StyledLogo } from "./index.styles"
import Image from "next/image"
import User from "../User"

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledLogo>
        <Image src="/assets/reports-logo.svg" width="40" height="40" />
        <Image src="/assets/lines.svg" width="40" height="40" />
      </StyledLogo>
      <User name="John Doe" shortName="JD" />
    </StyledHeaderWrapper>
  )
}

export default Header
