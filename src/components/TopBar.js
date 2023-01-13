import React, { useState } from 'react'

import Stack from "@mui/material/Stack"
import AppBar from "@mui/material/AppBar"
import { Button, Toolbar, IconButton, Box, Avatar} from '@mui/material'
import {useNavigate} from "react-router-dom"

import Logo from "../assets/logo.svg"
import HoverButton from './HoverButton'
import LoggedInFragment from './LoggedInFragment'


export default function TopBar(props) {
  let navigate = useNavigate();
  return (
    <AppBar style={{background:"#ffffff"}}>
    <Toolbar>
      <Box sx={{flexGrow:1}}>
        <IconButton onClick = {()=>{navigate("/school-website")}}><img style = {{width:"5vh"}} src={Logo}></img></IconButton>
        <HoverButton uid = "1" url = "/school-website/schule" label="Schule" sublables={["Info", "Mehr Erfahren", "Internat"]}></HoverButton>
        <HoverButton uid = "2" url = "/school-website/wir"label="Wir" sublables={["Klassen", "Kolegen", "Mitarbeiter"]}></HoverButton>
        <HoverButton uid = "3" url = "/school-website/veranstaltungen" label="Veranstaltungen" sublables={["Sportwoache", "Schwimmwoche", "Wienwoche"]}></HoverButton>
        <HoverButton uid = "4" label="Bilder" url="/school-website/bilder" sublables={["Über", "Vario Portal"]}></HoverButton>
      </Box>
      <Box>
        {
          props.auth ? <LoggedInFragment logOut={props.logOut} auth={props.auth}></LoggedInFragment> :
        <>
          <Button variant="text" onClick={()=>{navigate("/school-website/login")}}>Login</Button>
          <Button vatiant="text" onClick={()=>{navigate("/school-website/signup")}}>Konto Erstellen</Button>
        </>
        }
      </Box>
    </Toolbar>
    </AppBar>
  )
}