//  This is the main file(App.js)
// -->In this there are 2 main components-UserLogin and UserRegistration.
// -->Ahead in this we have made use of react-router for navigation between above components.
//-->We have mainly used react-bootstrap library for designing purpose.
//-->For external css we have App.css file.

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";
import { Switch, Route } from "react-router-dom";
import UserDashboard from "./UserDashboard";
function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <UserLogin />
        </Route>
        <Route path="/register">
          <UserRegistration />
        </Route>
        <Route path="/dashboard">
          <UserDashboard />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
