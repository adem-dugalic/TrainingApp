import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - 200px)`,
        marginLeft: 200,
      },
      backgroundColor: "#292626",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

interface Mobile {
  setMobileOpen: Function;
  mobileOpen: boolean;
}

export default function Bar(props: Mobile) {
  const classes = useStyles();
  const mobile = props.mobileOpen;
  // const [customS, setCustomS] = React.useState('classes.noShow');

  const handleDrawerToggle = () => {
    props.setMobileOpen(!mobile);
  };
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          IUS pre-registration system
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
