import React, { useState } from "react"
import DatePicker from "react-datepicker"
import { StyledDatePickerWrapper } from "./index.styles"

import "react-datepicker/dist/react-datepicker.css"

const DateComponent = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <StyledDatePickerWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </StyledDatePickerWrapper>
  )
}

export default DateComponent
