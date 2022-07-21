import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={480}
    viewBox="0 0 245 480"
    backgroundColor="#c2c2c2"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="120" cy="112" r="103" /> 
    <rect x="0" y="272" rx="20" ry="20" width="245" height="88" /> 
    <rect x="86" y="273" rx="0" ry="0" width="17" height="0" /> 
    <rect x="0" y="222" rx="13" ry="13" width="245" height="27" />
  </ContentLoader>
)

export default Loader