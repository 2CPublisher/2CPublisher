import * as React from "react"
import Grid from "@material-ui/core/Grid"
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Square />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, marginLeft: 2 }}
            >
              Publisher
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ marginRight: 1 }}
            >
              Tabs on an interface
            </Typography>
            <UserAddressInfo />
          </Toolbar>
        </AppBar>
        <Grid container direction="column" alignContent="center">
          {children}
        </Grid>
      </Box>
    </>
  )
}

export default MainLayout
