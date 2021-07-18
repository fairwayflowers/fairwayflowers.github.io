import { AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
import React from "react";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

interface NavigationPage {
  path: string,
  text: string,
}
const NavigationPages: NavigationPage[] = [
  { path: "/about", text: "About" },
  { path: "/bespoke-arrangements", text: "Bespoke Arrangements" },
  { path: "/contact", text: "Contact" },
  { path: "/cut-flowers", text: "Cut Flowers" },
  { path: "/events", text: "Events" },
  { path: "/", text: "Home" },
  { path: "/petal-confetti", text: "Petal Confetti" },
  { path: "/workshops", text: "Workshops" }
]

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginLeft: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
  },
}));

export default function Header() {
  const router = useRouter();
  const currentPage = router.pathname;
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>
          {NavigationPages.map((navlink, i) => navigationLink(currentPage, navlink, i))}
        </List>
      </Drawer>
    </>
  )
}

function navigationLink(currentPage: string, navlink: NavigationPage, key: number) {
  return (
    <Link key={key} href={navlink.path}>
      <ListItem button style={(currentPage == navlink.path) ? { backgroundColor: "rgba(0,0,0,0.1)" } : undefined}>
        <a>{navlink.text}</a>
      </ListItem>
    </Link>
  )
}