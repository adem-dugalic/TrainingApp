import React from 'react'
import ResponsiveDrawer from '../Components/Drawer';
import Home from '../Components/Home'

interface MainProps {

}

export const Main: React.FC<MainProps> = ({}) => {
    return (
      <div>
        <Home/>
      </div>
    );
}