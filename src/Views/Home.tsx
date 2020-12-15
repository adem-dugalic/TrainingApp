import React, { useState } from "react";
import Bar from "../Components/Bar";
import Drawer from "../Components/Drawer";
import Welcome from "../Components/Welcome";

import "../css/App.css";

interface HomeProps {
  setMobileOpen: Function;
  mobileOpen: boolean;
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  if (width < 800) {
    return true;
  } else return false;
}

export const Home: React.FC<HomeProps> = (props) => {
  const [isMobile, setisMobile] = useState(false);
  window.addEventListener("resize", () => {
    setisMobile(getWindowDimensions);
  });
  return (
    <div className="panelDiv">
      <Drawer
        mobileOpenFunction={props.setMobileOpen}
        mobileOpen={props.mobileOpen}
      />
      <main className="main">
        <div className="homeDiv">
          {isMobile ? (
            <Bar
              setMobileOpen={props.setMobileOpen}
              mobileOpen={props.mobileOpen}
            />
          ) : (
            ""
          )}
          <Welcome />
        </div>
      </main>
    </div>
  );
};
