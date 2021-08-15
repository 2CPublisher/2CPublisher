import * as React from "react"
import Container from "@material-ui/core/Container"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import UserAddressInfo from "../UserAddressInfo"

import styled from "@emotion/styled"

const Square = styled.div`
  width: 25px;
  height: 25px;
  background: #41d5b0;
`

type MainLayoutProps = { children: React.ReactNode }

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "#100F10" }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Square />
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ flexGrow: 1, marginLeft: 2, fontWeight: 600 }}
            >
              The publisher
            </Typography>
            <UserAddressInfo />
          </Toolbar>
        </AppBar>
        <Container>{children}</Container>
      </Box>
    </>
  )
}

export default MainLayout
