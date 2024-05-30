import React from 'react'
import './Comp.styles.css'
const SpinningCircle = () => {
  return (
    <svg className="spinning-circle" viewBox="0 0 100 100" width="900" height="900">
      <defs>
        <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
      </defs>
      <text fontSize="15" fill="#464646">
        <textPath href="#circlePath"  startOffset="50%" textAnchor="middle">
          DREAMZMEDIA EVENTS
        </textPath>
      </text>
    </svg>
  )
}

export default SpinningCircle;