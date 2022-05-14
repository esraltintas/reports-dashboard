import React from "react"
import {
  StyledUserWrapper,
  StyledShortName,
  StyledFullName,
} from "./index.styles"

const User = ({ shortName, name }) => {
  return (
    <StyledUserWrapper>
      {shortName && <StyledShortName>{shortName}</StyledShortName>}
      {name && <StyledFullName>{name}</StyledFullName>}
    </StyledUserWrapper>
  )
}

export default User
