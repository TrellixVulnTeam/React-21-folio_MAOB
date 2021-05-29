import React from 'react';

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";



const useStyles = makeStyles((theme) => ({
    contactContainer: {
        background: "#233",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
        height: "100vh",
        backgroundSize: "cover",
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tan",
    },
    formStyle: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    heading: {
        color: "tomato",
        textAlign: "uppercase",
        marginBottom: "1rem",
    },
    field: {
        margin: "0rem",
    },
    bottom: {
        marginTop: '1rem',
        color: 'tomato',

    }

}));




const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan",
            },
            "&.Mui-focused fieldset": {
                color: "#fff",
                borderColor: "tan",
            },
        },
    },
})(TextField);



const Contact = () => {
    const classes = useStyles();


    return (
        <Box component="div" className={classes.contactContainer}>
            <Grid container justify="center">
                <Box component="form" className={classes.formStyle}>
                    <Typography variant="h5" className className={classes.heading}>
                        Hire or work with me ..
                    </Typography>

                    <InputField

                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        inputProps={{ className: classes.input }}
                        className={classes.field}
                    />
                    <InputField
                        fullWidth={true}
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        inputProps={{ className: classes.input }}
                    />
                    <Button
                        variant="outlined"
                        fullWidth={true}
                        endIcon={<Send />}
                        className={classes.button}
                    >Contact Me</Button>



                </Box>
            </Grid>
        </Box>
    );
};

export default Contact;