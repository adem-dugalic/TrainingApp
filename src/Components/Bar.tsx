import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'

export default function Bar() {
  return(
    <div>
      <AppBar>
        <ToolBar>
          <IconButton>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h5">
            Training App
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  )

}