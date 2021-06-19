import React from 'react';
import Marginer from '../Marginer/index';
import styled from 'styled-components';
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";


import { device } from '../MediaQuery/device';

const useStyles = makeStyles((theme) => ({

    centerLL: {
        display: "flex",
        justifyContent: "center",
        padding: ".03rem",
        with: "100%",
        height: "auto",
    },
    centerOne: {
        padding: "2px",
    },
    hamburger_lines: {
        display: "flex",
        justifyContent: "center",
        background: "rgb(53 181 214)",
        color: "#fff",
        borderRadius: "50%",
        cursor: "pointer",
        margin: "5px",
        padding: "1px",
        border: "none",
        boxShadow: "2px 5px 10px rgba(0, 0, 0, 0.32)",
    },
    title: {
        color: "#769299",
        marginTop: "1rem",
        textTransform: "uppercase",
        fontFamily: "'Staatliches', Open Sans condensed",
        fontSize: "14.5px",
        letterSpacing: ".43px",
    },
}));

const buttonVariants = {
    hover: {
        scale: [1, 1.03],
        textShadow: "0 0 6px rgb(255, 255, 255)",
        boxShadow: "0px 0px 8px rgb(179, 255, 255)",
        transition: {
            duration: .5,
            yoyo: Infinity
        }
    }
};

export function LogoDetails(props) {
    const classes = useStyles();

    return <DetailsContainer>

        <Marginer direction="vertical" margin="1.525em" />
        <SmallText>DESIGNER & DEVELOPER</SmallText>
        <Marginer direction="vertical" margin=".525em" />
        <Box component="div" className={classes.centerLL}>
            <SpacedHorizontalContainer>
                <MediumText>Frontend | Fullstack</MediumText>
            </SpacedHorizontalContainer>
        </Box >
        <Toolbar>
            <Link to="/portfolio">
                <IconButton >
                    <motion.button className={classes.hamburger_lines}
                        variants={buttonVariants}
                        whileHover="hover">
                        <ArrowBack
                            className={classes.hamburger_lines} />
                    </motion.button>
                </IconButton>
            </Link>
            <Marginer direction="vertical" margin="8.2em" />
            <Typography variant="h5" className={classes.title} gutterBottom>
                My Portfolio
                </Typography>
        </Toolbar>

    </DetailsContainer >;
};

const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0em;
`;

const MediumText = styled.span`
  font-size: 16.3px;
  color: #77939a;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-family: 'Staatliches', Open Sans condensed;
  line-height: 1.5rem;
  text-align: center;
  width: 100%;
  @media ${device.laptop} {
      
      font-size: 18px;
}
  `;

const SmallText = styled.span`
  font-size: 24px;
  color: #35b5d6;
  font-weight: 400;
  line-height: 1.4rem;
  letter-spacing: 0.174rem;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Staatliches', Open Sans condensed;
  @media ${device.laptop}{
      font-size: 33.72px;
      line-height: 2.133rem;
  }
  
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

