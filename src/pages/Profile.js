import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import { redirect } from 'react-router-dom'

export default function Profile(props) {
    useEffect(()=>{
        if(!props.pb.authStore.isValid){
            redirect("/school-website/login")
        }
    }, [])
  return (
    <Container maxWidth="xl">
    { props.pb.authStore.isValid ?
        <div>Profile</div> : <></>}
    </Container>
  )
}
