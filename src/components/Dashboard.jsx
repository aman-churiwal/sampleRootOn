import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import universities from "../universities"
import Navbar from "./Navbar";
import University from "./University"

const Dashboard = () => {
    const handleUniChange = e => {
        setUni(e.target.value)
    }

    return (
        <div>
            <Navbar/>
            <Container component="main" maxWidth="sm">
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
                            Select any university
                        </Typography>
                    </Grid>
                    <Stack spacing={2}
                    sx={{
                        width: 300,
                        direction:"column",
                    }}>
                        <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                            disableClearable
                            uniName={universities.map(uni=> uni.name)}
                        options={universities.map((uni) => uni.name)}
                        key={universities.map(uni=>uni.key)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="University"
                                InputProps={{
                                ...params.InputProps,
                                type: 'search',
                                }}
                            />
                            )}
                        />
                    </Stack>
                </Box>
            </Container>
        </div>
    )
}

export default Dashboard