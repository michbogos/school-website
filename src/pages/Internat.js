import { Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import Standort from "../assets/standort.jpg"

export default function Internat() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h1">Internat</Typography>
      <Stack direction="row">
        <Stack flex={1}>
          <Typography variant="h3">Informationen</Typography>
          <Typography variant="body1">Der Schule ist ein Internat für Mädchen und Burschen angeschlossen.
Es gliedert sich in ein <strong>Vollinternat</strong>, das Mädchen und Burschen von der 1.-8. Klasse (BRG) bzw. von der 5.-8. Klasse (ORG) offen steht und ein <strong>Halbinternat</strong> (Freizeit- und Lernbetreuung bis 18.00) für Schüler/innen der 1.-5. Klassen.
Das Schulgebäude und das prächtige Schloss inmitten herrlicher Parkanlagen sowie hauseigene und in unmittelbarer Umgebung liegende Freizeiteinrichtungen schaffen ideale Voraussetzungen für gemeinsame Arbeit und Freizeit.</Typography>
          <Typography variant="h3">Konakt</Typography>
          <Typography variant="body1"><strong>Internatsleiterin:</strong> Mag. Ulrike Neuböck, erziehungsleitung@schlosstraunsee.at</Typography>
          <Typography variant="body1"><strong>Sekretariat:</strong> Fr. Riedl, 07612/62415-38, Mo-Do 7.30-12.30 u. 13.00-15.30; Fr 7.30-12.00</Typography>
          <Typography variant="h3">Standort</Typography>
          <Typography variant="body1">Pensionatstraße 74, 4810 Gmunden</Typography>
          <Typography variant="h3">Lernbetreuung</Typography>
          <Typography variant="body1">Die Studierzeit gliedert sich in zwei Abschnitte:
Während des ersten Studiums (14.25-16.00) erledigen alle Schüler/innen, die in einer Gruppe zusammengefasst sind, unter der Aufsicht ihrer Erzieherin/ihres Erziehers ihre Hausübungen. Während des zweiten Teils (16.15-17.30) besteht die Möglichkeit verschiedene Freizeitangebote in Anspruch zu nehmen, wenn das nötige Lernpensum erfüllt ist. Über das gesamte Schuljahr werden 6 Unterrichtseinheiten Förderkurse pro Woche angeboten (drei in Mathematik, zwei in Englisch und eine in Französisch).
Unsere Mädchen und Burschen sollen gezielte fachliche Hilfe erhalten, die je nach persönlichem Bedarf ständig, gelegentlich oder teilweise in Anspruch genommen werden kann. Ziel ist es, sich im Rahmen des Internatsbetriebes selbstständig Unterstützung in der eigenen Schule zu holen, damit auf externe Nachhilfe verzichtet werden kann.</Typography>

        </Stack>
        <Stack flex={1}>
          <img src={Standort}></img>
        </Stack>
      </Stack>
    </Container>
  )
}
