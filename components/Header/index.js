import React, { useEffect, useState } from "react"
import { StyledHeaderWrapper, StyledLogo } from "./index.styles"
import axios from "../../axios"
import Image from "next/image"
import User from "../User"

const Header = () => {
  const [user, setUser] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("users")
      setUser(res?.data.data[0])
    }
    fetchData()
  }, [])

  return (
    <StyledHeaderWrapper>
      <StyledLogo>
        <Image src="/assets/reports-logo.svg" width="40" height="40" />
        <Image src="/assets/lines.svg" width="40" height="40" />
      </StyledLogo>
      {user && (
        <User
          name={`${user?.firstName} ${user?.lastName}`}
          shortName={`${user.firstName
            .toUpperCase()
            .slice(0, 1)} ${user.lastName.toUpperCase().slice(0, 1)}`}
        />
      )}
    </StyledHeaderWrapper>
  )
}

export default Header
