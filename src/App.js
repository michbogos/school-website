import './styles/App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage';
import Schule from './pages/Schule';
import Veranstaltungen from './pages/Veranstaltungen';

import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';
import InfoS from './pages/InfoS';
import InfoE from './pages/InfoE';
import InfoA from './pages/InfoA';

function App() {
  const pb = new PocketBase('http://127.0.0.1:8090');

  const [termine, setTermine] = useState("")

  useEffect(()=>{
    pb.collection("termine").getList(1, 50)
  }, [])

  return (
    <Routes>
      <Route path='/school-website' element={<Homepage/>}></Route>
      <Route path='/school-website/info/schueler' element={<InfoS></InfoS>}></Route>
      <Route path='/school-website/info/eltern' element={<InfoE></InfoE>}></Route>
      <Route path='/school-website/info/schule' element={<InfoA></InfoA>}></Route>
    </Routes>
  );
}
export default App;
