import * as React from "react"
import {HeadFC, navigate} from "gatsby"

const NotFoundPage: React.FC<null> = () => {
  navigate('/')
  return null
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
