import React from "react"
import { StyledButton } from "./index.styles"

const Button = ({ text, onClick = () => {} }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

export default Button
