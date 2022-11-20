import React, { useState } from 'react'

import Stack from "@mui/material/Stack"
import AppBar from "@mui/material/AppBar"
import { Button, Toolbar, IconButton, Popover } from '@mui/material'

import Logo from "../assets/logo.svg"
import HoverButton from './HoverButton'


export default function TopBar() {
  return (
    <AppBar style={{background:"#ffffff"}}>
    <Toolbar>
        <IconButton><img style = {{width:"5vh"}} src={Logo}></img></IconButton>
        <HoverButton uid = "1" label="Schule" element={<div><p>gggggg</p><p>ggggggg</p></div>}></HoverButton>
    </Toolbar>
    </AppBar>
  )
}