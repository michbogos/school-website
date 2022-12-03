import { TabPanelUnstyled } from '@mui/base'
import { Stack } from '@mui/system'
import React from 'react'

export default function BeitragErstellen() {
  return (
    <Stack direction="row">
        <Stack>
            <Tabs>
                <Tab>

                </Tab>
            </Tabs>
            <TabPanelUnstyled >

            </TabPanelUnstyled>
        <Box id = "editor">

        </Box>
        </Stack>
        <Box id="preview">

        </Box>
    </Stack>
  )
}
