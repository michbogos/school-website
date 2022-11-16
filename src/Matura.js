import React from 'react'
import TopBar from "./TopBar.js"

export default function Matura() {
  return (
    <div className='stack'>
      <TopBar></TopBar>
      <div className='background' id="matura"></div>
      <div className='stack center'>
      <div className='card'>
        <h1>Matura</h1>
        <p>Bereite dich fur die Matura in unserer Schule vor</p>
      </div>
      </div>
    </div>
  )
}
