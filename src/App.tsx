import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./components/Layout";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  margin-top: 50px;
`;

export default function App() {
  return (
    <Router>
      <MainLayout>
        <AppContainer>
          <Switch>
            <Route path="/upload">
              <Upload />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </AppContainer>
      </MainLayout>
    </Router>
  );
}
