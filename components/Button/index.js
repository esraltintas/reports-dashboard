import React from "react"
import { StyledButton } from "./index.styles"

const Button = ({ children, color, label, variant, size, ...rest }) => {
  return (
    <StyledButton buttonColor={color} aria-label={label} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button
