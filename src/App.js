//  This is the main file(App.js)
// -->In this there are 2 main components-UserLogin and UserRegistration.
// -->Ahead in this we have made use of react-router for navigation between above components.
//-->We have mainly used react-bootstrap library for designing purpose.
//-->For external css we have App.css file.

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";
import { Switch, Route } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import EditUser from './EditUser'
import Admin from './Admin'
import AddByAdmin from './AddByAdmin'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditCategory from "./EditCategory";
import Category from "./Category";
import AddCategory from "./AddCategory";
import Project from "./Project";
import AddProject from "./AddProject";
import EditProject from "./EditProject";
import Action from './Action'
function App() {
  return (
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
      <Route path="/edit" >
        <EditUser />
      </Route>
      <Route path="/admin" >
        <Admin />
      </Route>
      <Route path="/action" >
        <Action />
      </Route>
      <Route path="/addbyadmin" >
        <AddByAdmin />
      </Route>
      <Route path="/editcategory" >
        <EditCategory />
      </Route>
      <Route path="/category" >
        <Category />
      </Route>
      <Route path="/addcategory"  >
        <AddCategory />
      </Route>
      <Route path="/editproject" >
        <EditProject />
      </Route>
      <Route path="/project" >
        <Project />
      </Route>
      <Route path="/addproject"  >
        <AddProject />
      </Route>
    </Switch>
  );
}

export default App;
