import { TextField, Paper, Typography, Table, TableBody, TableContainer, TableCell, TableHead, TableRow, IconButton} from '@mui/material'
import { Container, Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

//Add table name and adress

export default function Kontakt(props) {
  const [searchQuery, setSearchQuery] = useState("")
  useEffect(()=>{
    props.getUsers()
  }, [])
  return (
    <Container maxWidth="lg">
    <Stack height="100%" width="100%">
        <TextField onChange={(e)=>{setSearchQuery(e.target.value)}} label="Wen suchen Sie?" fullWidth></TextField>
        <Stack height="70vh" overflow={"scroll"}>
            <TableContainer component={Paper}>
              <Table stickyHeader sx={{minWidth:"50vw"}}>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant='body2'>Name</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">E-Mail-Adresse</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((e)=>{return e}).filter(option => option.name.toLowerCase().includes(searchQuery.toLowerCase())).map(element =>
                        <TableRow>
                          <TableCell>
                            <Typography variant='body1'>{element.name}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant='body1'>{element.email}</Typography>
                          </TableCell>
                        </TableRow>)}
                </TableBody>
              </Table>
            </TableContainer>
        </Stack>
    </Stack>
    </Container>
  )
}
