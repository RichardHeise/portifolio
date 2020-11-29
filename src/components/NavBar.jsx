import React from "react";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import GitIcon from "./GitHub-Mark-32px.png"
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  outerGrid: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  paper: {
    position: "fixed",
    justifyContent: "flex-start",
  },
  button: {
    fontSize: "100%",
  }
}));
function NavBar() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid item container className={classes.outerGrid}>
      <Tooltip>
          <IconButton
            aria-label="add question"
            type="submit"
            size="medium"
            className={classes.button}
          >
            <img src={GitIcon} alt="Git"/>
            Github
          </IconButton>
        </Tooltip>
        <Tooltip>
          <IconButton
            aria-label="add question"
            type="submit"
            size="medium"
            className={classes.button}
          >
            <img src={GitIcon} alt="Git"/>
            LinkedIn
          </IconButton>
        </Tooltip>
      </Grid>
    </Paper>
  );
}

export default NavBar;
