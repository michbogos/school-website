import { TabPanelUnstyled } from '@mui/base'
import { Stack, Box} from '@mui/system'
import {React, useEffect, useState} from 'react'

import { redirect } from 'react-router-dom'
import { marked } from "marked"
import Login from './Login'
import DOMPurify from 'dompurify';
import { Button } from '@mui/material'

export default function BeitragErstellen(props){

  let createPost = (content)=>{
    props.pb.collection("posts").create({"title":"Title", "content":content, "creator":props.auth.record.username})
  }

  useEffect(()=>{
    if(!props.auth){
      redirect("school-website/login")
    }
  }, [])
  const [markdown, setMarkdown] = useState("")
  if(props.auth){
    return (
      <Stack>
        <Button variant="text" onClick={()=>{createPost(document.getElementById("preview").innerHTML)}}>Posten</Button>
        <Stack direction="row" width={"100vw"}>
          <Box id="editor" sx={{overflow:"scroll", padding:"1vh",height:"90vh", width:"50vw"}} onInput={(e)=>{setMarkdown(e.currentTarget.innerText)}} contentEditable>dsufdlk</Box>
          <div sx={{padding:"1vh", height:"90vh", width:"50vw"}}><div id="preview" sx={{overflow:"hidden"}} dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(marked(markdown, {gfm:true, breaks:true}))}}></div></div>
        </Stack>
      </Stack>
    )
  }
  else{
    return(
      <Login logIn={props.logIn}></Login>
    )
  }
}
