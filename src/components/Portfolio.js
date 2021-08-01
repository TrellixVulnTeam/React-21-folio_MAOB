import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "../components/portfolio.scss";

//importing images from folder/files

import project1 from "../images/crest_trans_ompa.png";
import project2 from "../images/crest_trans_ompa.png";
import project3 from "../images/crest_trans_ompa.png";
import project4 from "../images/crest_trans_ompa.png";
import project5 from "../images/crest_trans_ompa.png";
import project6 from "../images/crest_trans_ompa.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#f3f4f7",
    padding: "0 1rem",

    [theme.breakpoints.up("sm")]: {
      padding: "0rem ",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0rem 8rem",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0rem 16rem",
    },
  },
  cardContainer: {
    maxWidth: "88%",
    margin: "3rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "3rem 0",
    boxShadow: "3px 3px 6px #cecfd4, -3px -3px 6px #fff",
    background: "#f3f4f7",
    [theme.breakpoints.up("md")]: {
      maxWidth: "90% ",
    },
  },
  boldTypo: {
    fontWeight: "bolder",
    fontSize: "0.9rem",
    "&:hover": {
      color: "#00e6e6",
    },
  },
  github: {
    fontSize: "0.9rem",
    "&:hover": {
      color: "orange",
    },
  },
  projectName: {
    color: "#2f859b",
    fontSize: "1.35rem",
    lineHeight: "1.41rem",
    fontFamily: "Nunito Sans",
    textTransform: "uppercase",
    fontWeight: "700",
    padding: "0px 0 22px 0",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.65rem",
      lineHeight: "1.55rem",
      paddingTop: "3px",
    },
  },
  pro_text: {
    color: "#231214",
    textAlign: "left",
    width: "100%",
    display: "flex",
    lineHeight: "1.5rem",
    justifyContent: "center",
    fontFamily: "Nunito Sans",
    letterSpacing: "0",
    fontSize: "1.12rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
      padding: "0 1.52rem",
    },
  },

  imgBox: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  imgItem: {
    width: "65%",
  },
}));

// Database material

const projects = [
  {
    name: "Initial Portfolio",
    description: `Updating this site over the years has improved my coding ability as a developer. Built with Html, Sass, Js, Autoprefixer, version control with Git and hosted with gh-pages on github, This has been the foundation for my passion web development. `,
    image: project1,
  },
  {
    name: "Project 2",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
        consequatur magni quod nesciunt necessitatibus molestiae non
        eligendi, magnam est aliquam recusandae? Magnam soluta minus
        iste alias sunt veritatis nisi dolores!`,
    image: project2,
  },
  {
    name: "Project 3",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
        consequatur magni quod nesciunt necessitatibus molestiae non
        eligendi, magnam est aliquam recusandae? Magnam soluta minus
        iste alias sunt veritatis nisi dolores!`,
    image: project3,
  },
  {
    name: "Project 4",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
        consequatur magni quod nesciunt necessitatibus molestiae non
        eligendi, magnam est aliquam recusandae? Magnam soluta minus
        iste alias sunt veritatis nisi dolores!`,
    image: project4,
  },
  {
    name: "Project 5",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
        consequatur magni quod nesciunt necessitatibus molestiae non
        eligendi, magnam est aliquam recusandae? Magnam soluta minus
        iste alias sunt veritatis nisi dolores!`,
    image: project5,
  },
  {
    name: "Project 6",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
        consequatur magni quod nesciunt necessitatibus molestiae non
        eligendi, magnam est aliquam recusandae? Magnam soluta minus
        iste alias sunt veritatis nisi dolores!`,
    image: project6,
  },
];

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <Box component="div" className={classes.imgBox}>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="auto"
                    image={project.image}
                    className={classes.imgItem}
                  ></CardMedia>
                </Box>

                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.projectName}
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className={classes.pro_text}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.github}
                  size="small"
                  color="primary"
                  href="https://github.com/haluskua/mywebsite"
                  target="_blank"
                >
                  Code+Github
                </Button>
                <Button
                  className={classes.boldTypo}
                  size="small"
                  color="primary"
                  href="https://haluskua.github.io/mywebsite"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
