import React, { useState } from 'react'

import { Button, Toolbar, IconButton, Box, AppBar} from '@mui/material'
import {useNavigate} from "react-router-dom"

import Logo from "../assets/logo.svg"
import HoverButton from './HoverButton'
import LoggedInFragment from './LoggedInFragment'

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';


export default function TopBar(props) {
  let navigate = useNavigate();
  return (
    <AppBar color="appBar">
    <Toolbar>
      <Box sx={{flexGrow:1}}>
        <IconButton onClick = {()=>{navigate("/school-website")}}><img style = {{width:"5vh"}} src={Logo}></img></IconButton>
        <HoverButton uid = "1" url = "/school-website/schule" label="Schule" sublables={["Info", "Mehr Erfahren", "Internat"]}></HoverButton>
        <HoverButton uid = "2" url = "/school-website/wir"label="Wir" sublables={["Klassen", "Kolegen", "Mitarbeiter"]}></HoverButton>
        <HoverButton uid = "3" url = "/school-website/veranstaltungen" label="Veranstaltungen" sublables={["Sportwoache", "Schwimmwoche", "Wienwoche"]}></HoverButton>
        <HoverButton uid = "4" label="Bilder" url="/school-website/bilder" sublables={["Über", "Vario Portal"]}></HoverButton>
      </Box>
      <Box>
      </Box>
      <Box>
        {
          props.auth ? <LoggedInFragment logOut={props.logOut} auth={props.auth}></LoggedInFragment> :
        <>
          <Button variant="text" onClick={()=>{navigate("/school-website/login")}}>Login</Button>
          <Button vatiant="text" onClick={()=>{navigate("/school-website/signup")}}>Konto Erstellen</Button>
          <IconButton onClick={props.toggleMode} color="primary">
            {props.mode === "light" ?
              <WbSunnyIcon/> :
              <DarkModeIcon/>
          }
          </IconButton>
        </>
        }
      </Box>
    </Toolbar>
    </AppBar>
  )
}