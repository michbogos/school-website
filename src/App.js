import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './Homepage';

function App() {
  return (
    <Routes>
      <Route path='/school-website' element={<Homepage/>}></Route>
    </Routes>
  );
}
export default App;
