import React, { useState } from 'react'

import Stack from "@mui/material/Stack"
import AppBar from "@mui/material/AppBar"
import { Button, Toolbar, IconButton, Popover } from '@mui/material'
import {useNavigate} from "react-router-dom"

import Logo from "../assets/logo.svg"
import HoverButton from './HoverButton'


export default function TopBar() {
  let navigate = useNavigate();
  return (
    <AppBar style={{background:"#ffffff"}}>
    <Toolbar>
        <IconButton onClick = {()=>{navigate("/school-website")}}><img style = {{width:"5vh"}} src={Logo}></img></IconButton>
        <HoverButton uid = "1" url = "schule" label="Schule" sublables={["Info", "Mehr Erfahren", "Internat"]}></HoverButton>
        <HoverButton uid = "2" label="Wir" sublables={["Klassen", "Kolegen", "Mitarbeiter"]}></HoverButton>
        <HoverButton uid = "3" label="Veranstaltungen" sublables={["Sportwoache", "Schwimmwoche", "Wienwoche"]}></HoverButton>
        <HoverButton uid = "4" label="Vario" sublables={["Über", "Vario Portal"]}></HoverButton>
        <HoverButton uid = "5" label="Info" sublables={["Kotakt", "Administration"]}></HoverButton>
    </Toolbar>
    </AppBar>
  )
}