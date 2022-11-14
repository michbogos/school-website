import React from 'react'
import TopBar from "./TopBar.js"

export default function Food() {
  return (
    <div className='stack'>
      <TopBar></TopBar>
      <div className='stack center'>
        <h1>Essen</h1>
        <div id = "table-border">
          <table>
            <thead>
              <tr>
                <th>Menge</th>
                <th>Zutat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100g</td>
                <td>Zwetchken</td>
              </tr>
              <tr>
                <td>200g</td>
                <td>Birnen</td>
              </tr>
              <tr>
                <td>300g</td>
                <td>Orangen</td>
              </tr>
              <tr>
                <td>400g</td>
                <td>Erdbeeren</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
