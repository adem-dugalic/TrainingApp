import React, { useState } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./css/App.css";

//Style imports
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import "fontsource-roboto";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Widgets } from "@material-ui/icons";

//Components
import Bar from "./Components/Bar";
import Drawer from "./Components/Drawer";
import Home from "./Components/Home";
import Coursetable from "./Components/Coursetable";
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";
import { AllCoursesTable } from "./Components/AllCoursesTable";

const theme = createMuiTheme({
  // palette:{
  //   primary: {
  //     main: orange[500]
  //   }
  // }
});

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  if (width < 800) {
    return true;
  } else return false;
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setisMobile] = useState(false);

  window.addEventListener("resize", () => {
    setisMobile(getWindowDimensions);
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="backgroundDiv">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/Home">
            <div className="panelDiv">
              <Drawer setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
              <main className="main">
                <div className="homeDiv">
                  {isMobile ? (
                    <Bar
                      setMobileOpen={setMobileOpen}
                      mobileOpen={mobileOpen}
                    />
                  ) : (
                    ""
                  )}
                  <Home />
                </div>
              </main>
            </div>
          </Route>
          <Route exact path="/MyCourses">
            <div className="panelDiv">
              <Drawer setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
              <main className="main">
                <Bar setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
                <div className="MyCourses">
                  <Coursetable />
                </div>
              </main>
            </div>
          </Route>
          <Route exact path="/AllCourses">
            <div className="panelDiv">
              <Drawer setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
              <main className="main">
                <Bar setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
                <AllCoursesTable />
              </main>
            </div>
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
