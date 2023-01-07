import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Fade from '@mui/material/Fade';
import type { HeadFC, PageProps } from "gatsby"
import {useEffect, useState} from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const mudkip = {
    maxWidth: 300,
}

const IndexPage: React.FC<PageProps> = () => {
  const [doneLoading, setDoneLoading] = useState(false)

  useEffect(() => {
    setDoneLoading(true)
  })

  return (
    <Fade in={doneLoading}>
      <main style={pageStyles}>
        <h1>
            this page will do something cool ... eventually
        </h1>
        <StaticImage src="../images/mudkip.jpeg" alt="mudkip" style={mudkip} placeholder="blurred"/>
      </main>
    </Fade>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>balloon health</title>
