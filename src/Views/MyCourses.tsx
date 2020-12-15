import React from "react";
import Bar from "../Components/Bar";
import Coursetable from "../Components/Coursetable";
import Drawer from "../Components/Drawer";

import "../css/App.css";

interface MyCoursesProps {
  setMobileOpen: Function;
  mobileOpen: boolean;
}

export const MyCourses: React.FC<MyCoursesProps> = (props) => {
  return (
    <div className="panelDiv">
      <Drawer
        mobileOpen={props.mobileOpen}
        mobileOpenFunction={props.setMobileOpen}
      />
      <main className="main">
        <Bar
          setMobileOpen={props.setMobileOpen}
          mobileOpen={props.mobileOpen}
        />
        <div className="MyCourses">
          <Coursetable />
        </div>
      </main>
    </div>
  );
};
