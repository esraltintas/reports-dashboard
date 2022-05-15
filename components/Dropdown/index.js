import React from "react"
import Select, { components } from "react-select"
import makeAnimated from "react-select/animated"
import Image from "next/image"

const animatedComponents = makeAnimated()

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Image src="/assets/dropdownIcon.svg" width="14" height="14" />
    </components.DropdownIndicator>
  )
}

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#1BC5BD",
    color: "white",
    borderRadius: "5px",
    borderColor: "#1BC5BD",
    boxShadow: null,
    "&:hover": {
      borderColor: "#1BC5BD",
    },
    fontSize: "14px",
    minHeight: "32px",
    cursor: "pointer",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
}

const Dropdown = ({
  value,
  defaultSelected,
  options,
  placeholder,
  ...rest
}) => {
  return (
    <Select
      components={{
        animatedComponents,
        DropdownIndicator,
        IndicatorSeparator: () => null,
      }}
      value={value || defaultSelected}
      options={options}
      placeholder={placeholder}
      styles={customStyles}
      {...rest}
    />
  )
}

export default Dropdown
