import React from "react"
import { SocialIcon } from "react-social-icons"

const Social = (props) => {
  return (
    <ul
      style={{
      listStyleType: "none",
      display: "flex",
      }}
    >
      <li><a href={ "https://github.com/" + props.github }>GitHub</a></li>
      <li><a href={ "https://twitter.com/" + props.twitter }>Twitter</a></li>
    </ul>
    )
}

export default Social