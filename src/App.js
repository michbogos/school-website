import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './Homepage';
import Food from './Food';

import Wir from './Wir'
import Schule from './Schule'
import Vario from './Vario'
import Org from './Org'
import Kontakt from './Kontakt'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/recepies' element={<Food/>}></Route>
      <Route path='/wir' element={<Wir></Wir>}></Route>
      <Route path='/schule' element={<Schule></Schule>}></Route>
      <Route path='/vario' element={<Vario></Vario>}></Route>
      <Route path='/zweige' element={<Org></Org>}></Route>
      <Route path='/Kontakt' element={<Kontakt></Kontakt>}></Route>
    </Routes>
  );
}

export default App;
