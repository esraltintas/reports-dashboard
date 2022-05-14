import React from "react"
import Image from "next/image"
import Link from "next/link"
import { StyledNavBarWrapper } from "./index.styles"

const NavBar = () => {
  return (
    <StyledNavBarWrapper>
      <Link href="/?statistic=1">
        <Image
          src="/assets/statistics.svg"
          width="24"
          height="24"
          fill="blue"
        />
      </Link>
      <Link href="/?table=1">
        <Image src="/assets/tables.svg" width="24" height="24" />
      </Link>
      <Link href="/?media=1">
        <Image src="/assets/tv.svg" width="24" height="24" />
      </Link>
      <Link href="/?reports=1">
        <Image src="/assets/chart.svg" width="24" height="24" />
      </Link>
      <Image src="/assets/shutdown.svg" width="24" height="24" />
    </StyledNavBarWrapper>
  )
}

export default NavBar
