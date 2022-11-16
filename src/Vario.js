import React from 'react'
import TopBar from "./TopBar.js"

export default function Vario() {
  return (
    <div className='stack'>
      <TopBar></TopBar>
      <div className='background' id="vario"></div>
      <div className='stack center'>
      <div className='card'>
        <h1>Vario</h1>
        <p>Vario ist cool.</p>
        <h1>Interessiert?</h1>
        <center><button onClick={()=>{window.location.replace("https://vario.schlosstraunsee.at/index.php?view=mycourses")}} id="buchen">Jetzt buchen</button></center>
      </div>
      </div>
    </div>
  )
}
