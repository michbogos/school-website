import React, { useState, useEffect} from 'react'

import { Button, Menu, MenuItem} from '@mui/material'

import {useNavigate} from "react-router-dom"

export default function HoverButton(props) {
  const [anchor, setAnchor] = useState(null)

  let handleClick = (e)=>{
    if (anchor !== e.currentTarget) {
      setAnchor(e.currentTarget);
    }
  }

  function handleClose() {
    setAnchor(null);
  }

  let navigate = useNavigate()
  return (
    <React.Fragment>
        <Button onClick = {()=>{navigate(props.url)}} aria-haspopup="true" aria-owns={anchor ? "simple-menu" : undefined} onMouseOver={handleClick} id = {props.uid} variant='text'>{props.label}</Button>
    </React.Fragment>
  )
}
/* <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }}>
          {props.sublables.map((e)=>{return <MenuItem>{e}</MenuItem>})}
        </Menu> */