import './styles/App.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Homepage from './pages/Homepage';
import Schule from './pages/Schule';
import Veranstaltungen from './pages/Veranstaltungen';

import PocketBase from 'pocketbase';
import React, { useEffect, useState } from 'react';
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
import Login from "./pages/Login"

import { WebUntisAnonymousAuth, WebUntisElementType } from 'webuntis';
import TopBar from './components/TopBar';
import BeitragErstellen from './pages/BeitragErstellen';
import TerminErstellen from './pages/TerminErstellen';
import { FormControlUnstyledContext } from '@mui/base';

function App() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  //const untis = new WebUntisAnonymousAuth('brg-borg-traunsee', 'mese.webuntis.com');
  //untis.login().then(res=>console.log(res));

  //untis.getClasses().then((res)=>{
  //  console.log(res)
  //})

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [termine, setTermine] = useState([]);
  const [auth, setAuth] = useState(null);

  let navigate = useNavigate();

  useEffect(()=>{
    pb.collection("users").authRefresh().then((res)=>{setAuth(res)})
    pb.collection('posts').getList(1, 50).then((res)=>{setPosts(res.items)});
    pb.collection('posts').subscribe('*', (e)=>{
      setPosts([...posts, e])
    })
    pb.collection('users').getFullList(200, {filter:"verified = true"}).then((res)=>{setUsers(res)});
    pb.collection('termine').getFullList(200).then((res)=>{setTermine(res)})
  }, [])

  let logIn=(email, password)=>{
    pb.collection('users').authWithPassword(
      email,
      password,
  ).then((res)=>{setAuth(res); navigate("/school-website")});
  }

  let logOut=(email, password)=>{
    pb.authStore.clear();
    setAuth(null);
  }

  return (
    <React.Fragment>
      <TopBar logOut={logOut} auth={auth}></TopBar>
      <Routes>
        <Route path='/school-website' element={<Homepage posts={posts}/>}></Route>
        <Route path='/school-website/stundenplan' element={<Stundenplan></Stundenplan>}></Route>
        <Route path='/school-website/vwa' element={<VWA></VWA>}></Route>
        <Route path='/school-website/matura' element={<Matura></Matura>}></Route>
        <Route path="/school-website/termine" element={<Termine termine={termine}></Termine>}></Route>
        <Route path='/school-website/elternsprechtag' element={<Elternsprechtag></Elternsprechtag>}></Route>
        <Route path='/school-website/kontakt' element={<Kontakt users={users}></Kontakt>}></Route>
        <Route path='/school-website/lehrer' element={<Lehrer></Lehrer>}></Route>
        <Route path='/school-website/mitarbeiter' element={<Mitarbeiter></Mitarbeiter>}></Route>
        <Route path="school-website/bilder" element={<Fotos></Fotos>}></Route>
        <Route path='/school-website/veranstaltungen' element={<Veranstaltungen></Veranstaltungen>}></Route>
        <Route path='/school-website/internat' element={<Internat></Internat>}></Route>
        <Route path='/school-website/anmelden' element={<Anmelden></Anmelden>}></Route>
        <Route path="/school-website/speisesaal" element={<Speisesaal></Speisesaal>}></Route>
        <Route path="/school-website/login" element={<Login logIn={logIn}></Login>}></Route>
        <Route path="/school-website/new" element={<BeitragErstellen pb={pb} logIn={logIn} auth={auth}></BeitragErstellen>}></Route>
        <Route path="/school-website/termin_erstellen" element={<TerminErstellen pb={pb} logIn={logIn} auth={auth}></TerminErstellen>}></Route>
      </Routes>
    </React.Fragment>
  );
}
export default App;
