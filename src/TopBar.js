import React from 'react'
import Logo from "./logo.svg"

export default function TopBar() {
  return (
    <div className='navBar slim'>
        <button style={{"flex":"none"}} className='textButton'><img style={{height:"100%"}} src={Logo}/></button>
        <button>
            jslkf
        </button>
    </div>
  )
}
