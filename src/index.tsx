import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#A5A4FF",
      main: "#A5A4FF",
      dark: "#A5A4FF",
      contrastText: "#000",
    },
    secondary: {
      main: "#100F10",
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
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
