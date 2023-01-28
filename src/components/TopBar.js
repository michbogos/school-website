import React, { useState } from 'react'

import { Button, Toolbar, IconButton, Box, AppBar, Input, TextField, InputBase, Stack, InputAdornment, Link} from '@mui/material'
import {useNavigate} from "react-router-dom"

import Logo from "../assets/logo.svg"
import HoverButton from './HoverButton'
import LoggedInFragment from './LoggedInFragment'

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';


export default function TopBar(props) {
  let navigate = useNavigate();
  return (
    <AppBar color="appBar">
      <Stack direction="row" sx={{width:"100vw", margin:"0"}} alignItems="baseline" justifyContent="stretch">
        <Box sx={{flex:1}}>
          <IconButton onClick = {()=>{navigate("/school-website")}}><img style = {props.mode==="light" ? {width:"5vh", filter:"invert(0)"} : {width:"5vh", filter:"invert(1)"}} src={Logo}></img></IconButton>
          <HoverButton uid = "1" url = "/school-website/schule" label="Schule" sublables={["Info", "Mehr Erfahren", "Internat"]}></HoverButton>
          <HoverButton uid = "3" url = "/school-website/veranstaltungen" label="Veranstaltungen" sublables={["Sportwoache", "Schwimmwoche", "Wienwoche"]}></HoverButton>
          <HoverButton uid = "3" url = "/school-website/veranstaltungen" label="Shop" sublables={["Sportwoache", "Schwimmwoche", "Wienwoche"]}></HoverButton>
        </Box>
        <TextField fullWidth
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon></SearchIcon>
                </InputAdornment>
              ),
            }}
            sx={{flex:2}}
            placeholder="Suchen..."
            inputProps={{ 'aria-label': 'Suchen...' }}></TextField>
        <Box sx={{flex:1}}>
          {
            props.auth ? <LoggedInFragment toggleMode={props.toggleMode} mode={props.mode} logOut={props.logOut} auth={props.auth}></LoggedInFragment> :
          <Stack direction={"row"} height="100%" alignItems={""} justifyContent="right">
              <Button variant="text" onClick={()=>{navigate("/school-website/login")}}>Login</Button>
              <Button vatiant="text" onClick={()=>{navigate("/school-website/signup")}}>Konto Erstellen</Button>
              <IconButton style={{ backgroundColor: 'transparent' }} onClick={props.toggleMode} color="primary">
                {props.mode === "light" ?
                  <WbSunnyIcon/> :
                  <DarkModeIcon/>
              }
            </IconButton>
          </Stack>
          }
        </Box>
      </Stack>
    </AppBar>
  )
}