import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Home from "./pages/Home/Home"
import reportWebVitals from "./reportWebVitals"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#67dcbf",
      main: "#41D4B0",
      dark: "#2d947b",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
