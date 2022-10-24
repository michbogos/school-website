import React from 'react'
import {useNavigate} from 'react-router-dom'
import Logo from "./logo.svg"

export default function NavBar() {
    let navigate = useNavigate()
  return (
    <div className='navBar'>
        <button className='textButton'><img style={{height:"100%"}} src={Logo}/></button>
        <button onMouseLeave={(e)=>{document.body.style.background = "#ffffff"}} onMouseEnter={(e)=>{document.body.style.background = "var(--b100)"}} onClick={()=>{navigate("/vario")}}className='textButton one'>VARIO</button>
        <button onMouseLeave={(e)=>{document.body.style.background = "#ffffff"}} onMouseEnter={(e)=>{document.body.style.background = "var(--b200)"}}  onClick={()=>{navigate("/zweige")}}className='textButton two'>ORG/W</button>
        <button onMouseLeave={(e)=>{document.body.style.background = "#ffffff"}} onMouseEnter={(e)=>{document.body.style.background = "var(--b300)"}}  onClick={()=>{navigate("/matura")}}className='textButton three'>MATURA</button>
        <button onMouseLeave={(e)=>{document.body.style.background = "#ffffff"}} onMouseEnter={(e)=>{document.body.style.background = "var(--r100)"}}  onClick={()=>{navigate("/wir")}}className='textButton four'>WIR</button>
        <button onMouseLeave={(e)=>{document.body.style.background = "#ffffff"}} onMouseEnter={(e)=>{document.body.style.background = "var(--b400)"}}  onClick={()=>{navigate("/kontakt")}}className='textButton five'>KONTAKT</button>
    </div>
  )
}
