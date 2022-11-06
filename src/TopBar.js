import React from 'react'
import Logo from "./logo.svg"
import {useNavigate} from "react-router-dom"

export default function TopBar() {
  let navigate = useNavigate();
  return (
    <div className='navBar slim'>
        <button onClick={()=>{navigate("/")}} style={{"flex":"none"}} className='textButton'><img style={{height:"100%"}} src={Logo}/></button>
    </div>
  )
}
