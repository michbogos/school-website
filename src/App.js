import './styles/App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage';
import Schule from './pages/Schule';

function App() {
  return (
    <Routes>
      <Route path='/school-website' element={<Homepage/>}></Route>
      <Route path='/school-website/schule' element={<Schule/>}></Route>
      <Route path='/school-website' element={<Homepage/>}></Route>
      <Route path='/school-website' element={<Homepage/>}></Route>
      <Route path='/school-website' element={<Homepage/>}></Route>
      <Route path='/school-website' element={<Homepage/>}></Route>
      <Route path='/school-website' element={<Homepage/>}></Route>
      <Route path='/school-website' element={<Homepage/>}></Route>
    </Routes>
  );
}
export default App;
