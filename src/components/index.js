import React from "react";
import FrontCard from "../components/3D/index";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box component="div" className={classes.indexContainer}>
        <FrontCard />
      </Box>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  indexContainer: {
    background: "#f3f4f7",
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
  },
}));

export default Home;
