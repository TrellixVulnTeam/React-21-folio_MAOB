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

//importing images from folder/files

import project1 from "../images/html-css-javascript-1.png";
import project2 from "../images/html-css-javascript-2.png";
import project3 from "../images/mern-stack.png";
import project4 from "../images/react-redux.png";
import project5 from "../images/react.png";
import project6 from "../images/serv-side-api.png";

const useStyles = makeStyles((theme) => ({

    mainContainer: {
        background: "#233",
        backgroundImage: `url(https://res.allmacwallpaper.com/get/MacBook-Pro-12-inch-4K-Retina-wallpapers/Research-Station-2304x1440/7353-14.jpg)`,

        backgroundSize: "cover",
        backgroundPosition: "fixed",
        backgroundRepeat: "repeat",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem auto",
    },
    boldTypo: {
        fontWeight: "bolder",
        fontSize: "0.9rem",
        '&:hover': {
            color: '#00e6e6',
        },
    },
    github: {
        fontSize: "0.9rem",
        '&:hover': {
            color: 'orange',
        },

    },

}));


// Database material

const projects = [
    {
        name: "Initial Portfolio",
        description: `One of my original Portfolio website. Built with a Sass, Autoprefixer with github hosting. More details on the project is found on my github page `,
        image: project1,
    },
    {
        name: "Project 2",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
        consequatur magni quod nesciunt necessitatibus molestiae non\
        eligendi, magnam est aliquam recusandae? Magnam soluta minus\
        iste alias sunt veritatis nisi dolores!`,
        image: project2,
    },
    {
        name: "Project 3",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
        consequatur magni quod nesciunt necessitatibus molestiae non\
        eligendi, magnam est aliquam recusandae? Magnam soluta minus\
        iste alias sunt veritatis nisi dolores!`,
        image: project3,
    },
    {
        name: "Project 4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
        consequatur magni quod nesciunt necessitatibus molestiae non\
        eligendi, magnam est aliquam recusandae? Magnam soluta minus\
        iste alias sunt veritatis nisi dolores!`,
        image: project4,
    },
    {
        name: "Project 5",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
        consequatur magni quod nesciunt necessitatibus molestiae non\
        eligendi, magnam est aliquam recusandae? Magnam soluta minus\
        iste alias sunt veritatis nisi dolores!`,
        image: project5,
    },
    {
        name: "Project 6",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
        consequatur magni quod nesciunt necessitatibus molestiae non\
        eligendi, magnam est aliquam recusandae? Magnam soluta minus\
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
                                <CardMedia
                                    component="img"
                                    alt="Project 1"
                                    height="140"
                                    image={project.image}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button className={classes.github} size="small" color="primary"
                                    href="https://github.com/haluskua/mywebsite"
                                    target="_blank"

                                >
                                    Code+Github
                    </Button>
                                <Button className={classes.boldTypo} size="small" color="primary"
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
