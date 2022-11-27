import React from 'react'

import {Stack, Link, ListItem, List, Typography} from "@mui/material"

export default function Links() {
  return (
    <Stack>
              <center>
                <Typography variant='h3'>Links</Typography>
                <List>
                  <ListItem>
                    <Link href='https://mese.webuntis.com/WebUntis/monitor?school=brg-borg-traunsee&monitorType=oh'>Kontaktliste Sprechstunde</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://mese.webuntis.com/WebUntis/?school=brg-borg-traunsee#main">WebUntis</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="http://outlook.office.com/">Office365</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://vario.schlosstraunsee.at/">vario-Portal</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://brg-schloss-traunsee.webopac.at/search">WebOPAC - Online Schulbibliothek</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://fujitsu.cancom.at/schulnotebooks/">Supportseite Schulnotebooks - Fujitsu - CANCOM</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.schlosstraunsee.at/?page_id=4244">Erasmus+</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://schloss-traunsee.edclub.com/">TypingClub (Schulzugang)</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://adm.schultermine.com/asyncRequests/createPDF01.php?skz=407036&id=tag&filter=schulfrei22&wLA=false&wSAT=false&dtv=2022-09-12&dtb=2023-07-10">Schulfreie Tage 2022/23</Link>
                  </ListItem>
                </List>
              </center>
            </Stack>
  )
}
