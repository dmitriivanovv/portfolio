
import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = () => (
  <ContentLoader
    speed={1}
    width={370}
    height={318}
    viewBox="0 0 370 318"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="18" ry="18" width="370" height="247" />
    <rect x="5" y="281" rx="9" ry="9" width="268" height="33" />
  </ContentLoader>
)

