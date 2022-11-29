import './styles/App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage';
import Schule from './pages/Schule';
import Veranstaltungen from './pages/Veranstaltungen';

import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';
import Fotos from './pages/Fotos';
import Stundenplan from './pages/Stundenplan';
import VWA from './pages/VWA';
import Matura from './pages/Matura';
import Termine from './pages/Termine';
import Elternsprechtag from './pages/Elternsprechtag';
import Kontakt from './pages/Kontakt';
import Lehrer from './pages/Lehrer';
import Mitarbeiter from './pages/Mitarbeiter';
import Internat from './pages/Internat';
import Anmelden from './pages/Anmelden';
import Speisesaal from './pages/Speisesaal';

function App() {
  const pb = new PocketBase('http://127.0.0.1:8090');

  const [termine, setTermine] = useState("")

  useEffect(()=>{
    pb.collection("termine").getList(1, 50)
  }, [])

  return (
    <Routes>
      <Route path='/school-website' element={<Homepage/>}></Route>
      <Route path='/school-website/stundenplan' element={<Stundenplan></Stundenplan>}></Route>
      <Route path='/school-website/vwa' element={<VWA></VWA>}></Route>
      <Route path='/school-website/matura' element={<Matura></Matura>}></Route>
      <Route path="/school-website/termine" element={<Termine></Termine>}></Route>
      <Route path='/school-website/elternsprechtag' element={<Elternsprechtag></Elternsprechtag>}></Route>
      <Route path='/school-website/kontakt' element={<Kontakt></Kontakt>}></Route>
      <Route path='/school-website/lehrer' element={<Lehrer></Lehrer>}></Route>
      <Route path='/school-website/mitarbeiter' element={<Mitarbeiter></Mitarbeiter>}></Route>
      <Route path="school-website/bilder" element={<Fotos></Fotos>}></Route>
      <Route path='/school-website/veranstaltungen' element={<Veranstaltungen></Veranstaltungen>}></Route>
      <Route path='/school-website/internat' element={<Internat></Internat>}></Route>
      <Route path='/school-website/anmelden' element={<Anmelden></Anmelden>}></Route>
      <Route path="/school-website/speisesaal" element={<Speisesaal></Speisesaal>}></Route>
    </Routes>
  );
}
export default App;
