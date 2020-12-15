import React, { useState } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./css/App.css";

//Style imports
import "fontsource-roboto";

//Components
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";
import { MyCourses } from "./Views/MyCourses";
import { AllCourses } from "./Views/AllCourses";
import { Home } from "./Views/Home";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="backgroundDiv">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/Home">
          <Home setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
        </Route>
        <Route exact path="/MyCourses">
          <MyCourses setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
        </Route>
        <Route exact path="/AllCourses">
          <AllCourses setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
