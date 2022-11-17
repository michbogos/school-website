import React from 'react'
import {useNavigate} from 'react-router-dom'
import Logo from "./logo.svg"

export default function NavBar() {
  let navigate = useNavigate()
  return (
    <div className='navBar'>
        <button className='textButton' onClick={()=>{navigate("/recepies")}}>Lieblingsessen</button>
        <button className='textButton'><img style={{height:"100%"}} src={Logo}/></button>
        <button onMouseLeave={(e)=>{document.body.style.background = "#ffffff"}} onMouseEnter={(e)=>{document.body.style.background = "var(--b100)"}} onClick={()=>{navigate("/vario");document.body.style.background = "#ffffff"}}className='textButton one'>VARIO</button>
        <button onMouseLeave={(e)=>{document.body.style.background = "#ffffff"}} onMouseEnter={(e)=>{document.body.style.background = "var(--b200)"}}  onClick={()=>{navigate("/zweige");document.body.style.background = "#ffffff"}}className='textButton two'>ORG/W</button>
        <button onMouseLeave={(e)=>{document.body.style.background = "#ffffff"}} onMouseEnter={(e)=>{document.body.style.background = "var(--b300)"}}  onClick={()=>{navigate("/matura");document.body.style.background = "#ffffff"}}className='textButton three'>MATURA</button>
        <button onMouseLeave={(e)=>{document.body.style.background = "#ffffff"}} onMouseEnter={(e)=>{document.body.style.background = "var(--r100)"}}  onClick={()=>{navigate("/wir");document.body.style.background = "#ffffff"}}className='textButton four'>WIR</button>
        <button onMouseLeave={(e)=>{document.body.style.background = "#ffffff"}} onMouseEnter={(e)=>{document.body.style.background = "var(--b400)"}}  onClick={()=>{navigate("/kontakt");document.body.style.background = "#ffffff"}}className='textButton five'>KONTAKT</button>
    </div>
  )
}
