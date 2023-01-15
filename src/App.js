import './styles/App.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Homepage from './pages/Homepage';
import Schule from './pages/Schule';
import Veranstaltungen from './pages/Veranstaltungen';

import PocketBase from 'pocketbase';
import React, { Suspense, useEffect, useState } from 'react';

import Stundenplan from './pages/Stundenplan';
import VWA from './pages/VWA';
import Matura from './pages/Matura';
import Elternsprechtag from './pages/Elternsprechtag';
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
import SignUp from './pages/SignUp';
import Loading from './components/Loading';
import NotFound from './pages/NotFound';


function App() {
  const pb = new PocketBase('http://127.0.0.1:8090');

  const Fotos = React.lazy(() => import('./pages/Fotos'));
  const Termine = React.lazy(()=> import('./pages/Termine'));
  const Kontakt = React.lazy(()=> import('./pages/Kontakt'));
  //const untis = new WebUntisAnonymousAuth('brg-borg-traunsee', 'mese.webuntis.com');
  //untis.login().then(res=>console.log(res));

  //untis.getClasses().then((res)=>{
  //  console.log(res)
  //})

  const [posts, setPosts] = useState(false);
  const [users, setUsers] = useState([]);
  const [termine, setTermine] = useState([]);
  const [auth, setAuth] = useState(null);
  const [images, setImages] = useState([]);
  //const [pageIds, setPageIds] = useState

  let getUsers = ()=>{
    pb.collection('users').getFullList(200, {filter:"verified = true"}).then((res)=>{console.log(res);setUsers(res)});
  }

  let getPosts = ()=>{
    pb.collection('posts').getList(1, 50).then((res)=>{setPosts(res.items)});
  }

  let getTermine = ()=>{
    pb.collection('termine').getFullList(200).then((res)=>{setTermine(res)})
  }

  let getImages = ()=>{
    pb.collection("images").getFullList(200, {sort:"-created"}).then((res)=>{console.log(res);setImages(res.map((item)=>{return pb.getFileUrl(item, item.img, {'thumb': '500x0'})}));console.log(images)})
  }

  useEffect(()=>{
    pb.collection("users").authRefresh().then((res)=>{setAuth(res)})
    //pb.collection('posts').getList(1, 50).then((res)=>{setPosts(res.items)});
    //pb.collection('users').getFullList(200, {filter:"verified = true"}).then((res)=>{setUsers(res)});
    //pb.collection('termine').getFullList(200).then((res)=>{setTermine(res)})
    //pb.collection("images").getFullList(200, {sort:"-created"}).then((res)=>{console.log(res);setImages(res.map((item)=>{return pb.getFileUrl(item, item.img, {'thumb': '500x0'})}));console.log(images)})

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
  }, [])

  let logIn=(email, password)=>{
    pb.collection('users').authWithPassword(
      email,
      password,
  ).then((res)=>{setAuth(res);return 0}).catch((e)=>{console.log(e.name);setAuth(false);return -1});
  }

  let signUp=(username, email, password, passwordConfirm, name, surname)=>{
    pb.collection('users').create({"username":username,
                                   "email":email, 
                                   "password":password, 
                                   "passwordConfirm":passwordConfirm,
                                   "name": [name, surname].join(" ")}).then((res)=>{
                                    logIn(email, password);
    }).catch((err)=>{
      setAuth(false);
    })
  }

  let logOut=(email, password)=>{
    pb.authStore.clear();
    setAuth(null);
  }

  return (
    <React.Fragment>
      <TopBar logOut={logOut} auth={auth}></TopBar>
      <Routes>
        <Route path='/school-website' element={<Homepage getPosts={getPosts} posts={posts}/>}></Route>
        <Route path='/school-website/stundenplan' element={<Stundenplan></Stundenplan>}></Route>
        <Route path='/school-website/vwa' element={<VWA></VWA>}></Route>
        <Route path='/school-website/matura' element={<Matura></Matura>}></Route>
        <Route path="/school-website/termine" element={<Suspense fallback={<Loading></Loading>}><Termine getTermine={getTermine} termine={termine}></Termine></Suspense>}></Route>
        <Route path='/school-website/elternsprechtag' element={<Elternsprechtag></Elternsprechtag>}></Route>
        <Route path='/school-website/kontakt' element={<Suspense fallback={<Loading></Loading>}><Kontakt getUsers={getUsers} users={users}></Kontakt></Suspense>}></Route>
        <Route path='/school-website/lehrer' element={<Lehrer></Lehrer>}></Route>
        <Route path='/school-website/mitarbeiter' element={<Mitarbeiter></Mitarbeiter>}></Route>
        <Route path="school-website/bilder" element={<Suspense fallback={<Loading></Loading>}><Fotos images = {images} getImages={getImages}></Fotos></Suspense>}></Route>
        <Route path='/school-website/veranstaltungen' element={<Veranstaltungen></Veranstaltungen>}></Route>
        <Route path='/school-website/internat' element={<Internat></Internat>}></Route>
        <Route path='/school-website/anmelden' element={<Anmelden></Anmelden>}></Route>
        <Route path="/school-website/speisesaal" element={<Speisesaal></Speisesaal>}></Route>
        <Route path="/school-website/login" element={<Login error={auth === false} logIn={logIn}></Login>}></Route>
        <Route path="/school-website/new" element={<BeitragErstellen pb={pb} logIn={logIn}></BeitragErstellen>}></Route>
        <Route path="/school-website/termin_erstellen" element={<TerminErstellen pb={pb} logIn={logIn}></TerminErstellen>}></Route>
        <Route path="/school-website/foto_hochladen" element={<FotoHochladen pb={pb} logIn={logIn}/>}></Route>
        <Route path="/school-website/signup" element={<SignUp signUp={signUp}></SignUp>}></Route>
        <Route path="/school-website/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </React.Fragment>
  );
}
export default App;
