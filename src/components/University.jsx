import React, { useState } from 'react';
import Navbar from './Navbar';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"
//import { Navigate } from 'react-router-dom';

const University = (props) => {
    //const navigate = Navigate()
    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.id === "back") {
            navigate('/dashboard')
        }
    }

    return (
        <div>
            <Navbar />
            <Container>
                <Box
                    sx={{
                        boxShadow: 1,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        /*backgroundColor: "#F6DDCC"*/
                    }}
                >
                <Grid>
                    <Typography
                        sx={{
                        marginTop: 0,
                        marginBottom : 1
                        }}
                        component="h1" variant="h5">
                        {props.uniName}
                    </Typography>
                </Grid>
                <Grid>
                    <Button id="back" sx={{ marginRight: 2 }} variant="contained"
                    onClick={<Link to="dashboard"></Link>}>Back</Button>
                    <Button id="apply"variant="contained">Apply</Button>
                </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default University