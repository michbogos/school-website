import React from 'react'
import TopBar from "./TopBar.js"

export default function Food() {
  return (
    <div className='stack'>
      <TopBar></TopBar>
        <div className="stack center">
          <div className='card'>
            <h1>Hähnchen an Sahnesauce</h1>
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
                    <td>300g</td>
                    <td>Hähnchen</td>
                  </tr>
                  <tr>
                    <td>~50g</td>
                    <td>Butter</td>
                  </tr>
                  <tr>
                    <td>1 Flasche</td>
                    <td>Olivenöl</td>
                  </tr>
                  <tr>
                    <td>300g</td>
                    <td>Reis</td>
                  </tr>
                  <tr>
                    <td>ein paar Brisen</td>
                    <td>Salz</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
                <h2>Vorbereitung</h2>
                <ol>
                  <li>Hähnchen in Würfel schneiden</li>
                  <li>Pfanne aufheizen</li>
                  <li>Butter in die Pfanne geben</li>
                  <li>Olivenöl zum Butter geben, damit sie nicht brennt</li>
                  <li>Hähnchen in die Pfanne geben</li>
                  <li>Mit Deckel zudecken</li>
                  <li>Ein paar Minuten auf hoher Hitze kochen lassen</li>
                  <li>Jede paar Minuten Pfanne schütteln, damit das Hähnchen gleichmäßig gekocht wird</li>
                  <li>Temperatur kleiner machen</li>
                  <li>Noch 10-15 Minuten kochen bis fertig aussieht</li>
                  <li>Warm essen, mit Reis oder Kartoffeln</li>
                </ol>
              </div>
              <div id ="food">
              </div>
          </div>
        </div>
    </div>
  )
}
