import React from 'react';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Account from '../Account';

// Company swipes thru job seekers
  
//Styling for dashboard content.

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
    display: "flex"
    },
    toolbar: {
    paddingRight: 24 // keep right padding when drawer closed

    },
    toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
    },
   
    appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    })
    },
    menuButton: {
    marginRight: 36
    },
    menuButtonHidden: {
    display: "none"
    },
    title: {
    flexGrow: 1
    },
    drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    })
    },
    drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9)
    }
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
    },
    container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
    },
    paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
    },
    fixedHeight: {
    height: 240
    }
}));

//the Dashboard Component relies here.
function CompanySwiping(){
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
    <div className={classes.root}>
        <CssBaseline />
        
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                <ui>
                    <Account/>
                </ui>
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>User Data</Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper className={classes.paper}>Current Matches?</Paper>
            </Grid>
            </Grid>
        </Container>
    </div>
    );
}
    


export default CompanySwiping