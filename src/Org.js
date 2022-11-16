import React from 'react'
import TopBar from "./TopBar.js"

export default function Org() {
  return (
    <div className='stack'>
      <TopBar></TopBar>
      <div className='background' id="org"></div>
      <div className='stack center'>
        <div className='row'>
          <div className='card'>
            <h1>ORG</h1>
            <p>In ORG lernt man Physik</p>
          </div>
          <div className='card'>
            <h1>W</h1>
            <p>In W lernt man Franzoesisch.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
