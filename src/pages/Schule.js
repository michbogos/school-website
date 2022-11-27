import React from 'react'

import TopBar from '../components/TopBar'
import {Box, Typography} from "@mui/material"

export default function Schule() {
  return (
    <div>
      <TopBar></TopBar>
      <Box>
        <img style={{height:"100vh", width:"100vw"}} src="https://upload.wikimedia.org/wikipedia/commons/8/82/Schloss_Traunsee.JPG"></img>
      </Box>
      <Typography variant="h1">Unsere Schule</Typography>
    </div>
  )
}