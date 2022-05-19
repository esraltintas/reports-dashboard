import React from "react"
import DatePicker from "react-datepicker"
import Image from "next/image"

import { StyledDatePickerWrapper } from "./index.styles"

import "react-datepicker/dist/react-datepicker.css"

const DateComponent = ({ date, handleChange = () => {}, placeholder }) => {
  const CustomInput = React.forwardRef((props, ref) => {
    return (
      <div>
        <label onClick={props.onClick} ref={ref}>
          {props.value || props.placeholder}
        </label>
        <Image src="/assets/date.svg" width="11" height="11" />
      </div>
    )
  })
  console.log(date)
  return (
    <StyledDatePickerWrapper>
      <DatePicker
        selected={date}
        onChange={handleChange}
        placeholderText={placeholder}
        customInput={<CustomInput />}
        format="dd.mm.yyyy"
      />
    </StyledDatePickerWrapper>
  )
}

export default DateComponent
