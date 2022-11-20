import React, { useState, useEffect} from 'react'

import { Button, Popover, Card } from '@mui/material'

export default function HoverButton(props) {
  const [isOpen, setIsOpen] = useState(false)

  let mouseEnterHandler = (e)=>{
    setIsOpen(true);
    console.log("enter")
  }

  let mouseLeaveHandler = (e)=>{
    setIsOpen(false);
  }
  return (
    <React.Fragment>
        <Button onMouseEnter={mouseEnterHandler} id = {props.uid} variant='text'>{props.label}</Button>
        <Popover  anchorEl={document.getElementById(props.uid)}
                  open={isOpen}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}>
            <Card onMouseLeave={mouseLeaveHandler}
                  onMouseEnter={mouseEnterHandler}>
              {props.element}
            </Card>
        </Popover>
    </React.Fragment>
  )
}
