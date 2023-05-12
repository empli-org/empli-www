import * as React from 'react'
export const Gradient = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" {...props}>
    <defs>
      <filter
        id="a"
        width="400%"
        height="400%"
        x="-100%"
        y="-100%"
        colorInterpolationFilters="sRGB"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
      >
        <feGaussianBlur
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          in="SourceGraphic"
          result="blur"
          stdDeviation={83}
        />
      </filter>
    </defs>
    <g filter="url(#a)">
      <ellipse cx={536.575} cy={305.084} fill="#d3bfde" rx={113.5} ry={114.5} />
      <ellipse cx={527.104} cy={486.97} fill="#1b2545" rx={113.5} ry={114.5} />
      <ellipse cx={333.824} cy={341.706} fill="#159679" rx={113.5} ry={114.5} />
      <ellipse cx={334.255} cy={472.774} fill="#dcf0ed" rx={113.5} ry={114.5} />
    </g>
  </svg>
)
export default Gradient
