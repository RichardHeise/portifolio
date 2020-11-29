import React from "react";
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "./components/NavBar"

const useStyles =  makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  outerGrid: {
    flexDirection: "column"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
    <NavBar />
    </>
  );
}

export default App;
