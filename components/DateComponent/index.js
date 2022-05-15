import React from "react"
import DatePicker from "react-datepicker"

import { StyledDatePickerWrapper } from "./index.styles"

import "react-datepicker/dist/react-datepicker.css"

const DateComponent = ({ date, handleChange = () => {}, placeholder }) => {
  return (
    <StyledDatePickerWrapper>
      <DatePicker
        selected={date}
        onChange={handleChange}
        placeholderText={placeholder}
      />
    </StyledDatePickerWrapper>
  )
}

export default DateComponent
