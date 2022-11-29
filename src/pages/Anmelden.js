import { ListItem, Card, Typography, List, CardContent} from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { Link, useMediaQuery, Stack } from '@mui/material'
import TopBar from '../components/TopBar'

export default function Anmelden() {
    const isSmall = useMediaQuery("(max-width:1000px)")
  return (
    <Container maxWidth="xl">
        <TopBar></TopBar>
        <Typography variant="h1">Anmeldung</Typography>
        <Stack spacing={4} direction={isSmall?"column":"row"}>
            <Box>
                <Typography variant="body1">Sehr geehrte Eltern,</Typography>
                <Typography variant="body1">wir freuen uns, dass Sie Ihr Kind bei uns anmelden möchten. Wir sind eine öffentliche Schule, der auch ein Internat für Mädchen und Burschen angeschlossen ist. Es gliedert sich in ein Voll- und Halbinternat. Nähere Informationen dazu finden Sie unter dem Link „Internat“.</Typography>
            </Box>
        <Card sx={{minWidth:400}}>
            <CardContent>
            <Typography variant="h3">Ausgefüllt mitzubringen</Typography>
            <List>
                <ListItem>
                    <Link href="https://www.schlosstraunsee.at/wordpress/wp-content/uploads/2022/01/Anmeldedokumente_Homepage_2021-22.doc">Übersicht</Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.schlosstraunsee.at/wordpress/wp-content/uploads/2022/01/aufnahmeformular1kl-fuer-2022-23.pdf">Aufnahmeformular</Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.schlosstraunsee.at/wordpress/wp-content/uploads/2022/01/Zustimmungserklaerung_Datenschutz.pdf">Algemeines Datenschutzblatt</Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.schlosstraunsee.at/wordpress/wp-content/uploads/2022/01/Datenblatt-Fotograf.pdf">Datenblatt für den Fotografen</Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.schlosstraunsee.at/wordpress/wp-content/uploads/2022/01/Elternfragebogen_Stand_17_2_09.pdf">Elternfragebogen für den Schularzt</Link>
                </ListItem>
            </List>
            </CardContent>
        </Card>
        </Stack>
    </Container>
  )
}
