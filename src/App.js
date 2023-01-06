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

import TopBar from './components/TopBar';
import BeitragErstellen from './pages/BeitragErstellen';
import TerminErstellen from './pages/TerminErstellen';
import FotoHochladen from './pages/FotoHochladen';

function App() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  //const untis = new WebUntisAnonymousAuth('brg-borg-traunsee', 'mese.webuntis.com');
  //untis.login().then(res=>console.log(res));

  //untis.getClasses().then((res)=>{
  //  console.log(res)
  //})

  const [posts, setPosts] = useState(false);
  const [users, setUsers] = useState(false);
  const [termine, setTermine] = useState(false);
  const [auth, setAuth] = useState(null);
  const [images, setImages] = useState(false);

  let navigate = useNavigate();

  useEffect(()=>{
    pb.collection("users").authRefresh().then((res)=>{setAuth(res)})
    pb.collection('posts').getList(1, 50).then((res)=>{setPosts(res.items)});
    pb.collection('users').getFullList(200, {filter:"verified = true"}).then((res)=>{setUsers(res)});
    pb.collection('termine').getFullList(200).then((res)=>{setTermine(res)})
    pb.collection("images").getFullList(200, {sort:"-created"}).then((res)=>{console.log(res);setImages(res.map((item)=>{return pb.getFileUrl(item, item.img, {'thumb': '500x0'})}));console.log(images)})
    // if(window.Worker){
    //   const worker = new WorkerBuilder(loaderWorker)
    //   worker.onmessage = (e)=>{console.log(e.data)}
    //   worker.postMessage(pb.collection);
    // }
    // else{
    //   pb.collection("users").authRefresh().then((res)=>{setAuth(res)})
    //   pb.collection('posts').getList(1, 50).then((res)=>{setPosts(res.items)});
    //   pb.collection('posts').subscribe('*', (e)=>{
    //     setPosts([...posts, e])
    //   })
    //   pb.collection('users').getFullList(200, {filter:"verified = true"}).then((res)=>{setUsers(res)});
    //   pb.collection('termine').getFullList(200).then((res)=>{setTermine(res)})
    //   pb.collection("images").getFullList(200, {sort:"-created"}).then((res)=>{console.log(res);setImages(res.map((item)=>{return pb.getFileUrl(item, item.img, {'thumb': '500x0'})}));console.log(images)})
    // }
  })

  let logIn=(email, password)=>{
    pb.collection('users').authWithPassword(
      email,
      password,
  ).then((res)=>{setAuth(res);return 0}).catch((e)=>{console.log(e.name);setAuth(false);return -1});
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
        <Route path="school-website/bilder" element={<Fotos images={images}></Fotos>}></Route>
        <Route path='/school-website/veranstaltungen' element={<Veranstaltungen></Veranstaltungen>}></Route>
        <Route path='/school-website/internat' element={<Internat></Internat>}></Route>
        <Route path='/school-website/anmelden' element={<Anmelden></Anmelden>}></Route>
        <Route path="/school-website/speisesaal" element={<Speisesaal></Speisesaal>}></Route>
        <Route path="/school-website/login" element={<Login error={auth === false} logIn={logIn}></Login>}></Route>
        <Route path="/school-website/new" element={<BeitragErstellen pb={pb} logIn={logIn}></BeitragErstellen>}></Route>
        <Route path="/school-website/termin_erstellen" element={<TerminErstellen pb={pb} logIn={logIn}></TerminErstellen>}></Route>
        <Route path="/school-website/foto_hochladen" element={<FotoHochladen pb={pb} logIn={logIn}/>}></Route>
      </Routes>
    </React.Fragment>
  );
}
export default App;
