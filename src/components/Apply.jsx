import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Date from "./Date";
import Button from "@mui/material/Button"

const lrswScore = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9']

const Apply = () => {

    const [gender, setGender] = useState("")
    const [ielts, setIelts] = useState("")
    const [ieltsError, setIeltsError] = useState(false)
    const [lrsw, setLrsw] = useState("")
    
    const handleChange = e => {
        e.preventDefault();
    }

    const handleIeltsChange = e => {
        e.preventDefault()
        setIelts(e.target.value)
    }

    const handleLrswChange = e => {
        e.preventDefault()
        setLrsw(e.target.value)
    }

    const handleGenderChange = e => {
        e.preventDefault();
        setGender(e.target.value)
    }

    const defaultTheme = createTheme()
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                sx={{
                        //marginTop: 2,
                        display: 'flex',
                        flexDirection: 'columnn',
                        alignItems: 'center'
                    }}>
                    <Box
                        component="form"
                        noValidate
                        sx={{
                        mt:3
                        }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Typography
                    component="h1" variant="h5">
                        Apply
                    </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    onChange={handleChange}/>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="select-gender-label">Gender</InputLabel>
                                        <Select
                                        labelId="select-gender-label"
                                        id="gender"
                                        required
                                        value={gender}
                                        label="Gender"
                                        onChange={handleGenderChange}
                                        >
                                            <MenuItem value={"M"}>Male</MenuItem>
                                            <MenuItem value={"F"}>Female</MenuItem>
                                            <MenuItem value={"LGBTQ"}>Non-Binary</MenuItem>
                                            <MenuItem value={"NA"}>Prefer not to say</MenuItem>
                                        </Select>
                                    </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                            />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="ielts"
                                    label="IELTS Score"
                                    name="ielts"
                                    value={ielts}
                                    error={ieltsError}
                                    onChange={handleIeltsChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="select-lrsw-label">L-R-S-W Score</InputLabel>
                                        <Select
                                            labelId="select-lrsw-label"
                                            id="lrsw"
                                            value={lrsw}
                                        label="L-R-S-W Score"
                                        onChange={handleLrswChange}
                                        required
                                        >
                                        {lrswScore.map(score => {
                                            return (
                                                <MenuItem value={score}>{score}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="degree"
                                    required
                                    fullWidth
                                    id="degree"
                                    label="Degree"
                                    onChange={handleChange}/>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="specialization"
                                    required
                                    fullWidth
                                    id="specialization"
                                    label="Specialization"
                                    onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                    <Date label="Start Date"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Date label="End Date"/>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Apply
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Apply