import React, { useState } from 'react';
import Navbar from './Navbar';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { passUni } from '../redux/actions/Uni';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const University = ({ uniName }) => {
    
    const location = useLocation()
    const navigate = useNavigate()
    const handleBackClick = (e) => {
        e.preventDefault();
        if (e.target.id === "back") {
            navigate('/dashboard')
        }
    }

    const handleApplyClick = (e) => {
        e.preventDefault();
        if (e.target.id === "apply") {
            navigate('/apply')
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
                        {location.state.uniName}
                    </Typography>
                </Grid>
                <Grid>
                    <Button id="back" sx={{ marginRight: 2 }} variant="contained"
                    onClick={handleBackClick}>Back</Button>
                    <Button id="apply"variant="contained" onClick={handleApplyClick}>Apply</Button>
                </Grid>
                </Box>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {uniName: state.uniReducer}
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(University)