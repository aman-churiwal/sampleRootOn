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
import Ielts from "./Ielts";
import Alert from '@mui/material/Alert';
import Education from './Education';
import AddIcon from '@mui/icons-material/Add';
import Navbar from "./Navbar";


const Scorecore = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9']

const Apply = () => {
    const [edu, setEdu] = useState(false)
    const [submit, setSubmit] = useState(false);
    const [yesNo, setYesNo] = useState("")
    const [gender, setGender] = useState("")

    const handleChange = e => {
        e.preventDefault();
    }

    const handleYesNoChange = e => {
        e.preventDefault()
        setYesNo(e.target.value)
    }

    const handleAddEduClick = e => {
        e.preventDefault()
        setEdu(true)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setSubmit(true)
    }

    const handleGenderChange = e => {
        e.preventDefault();
        setGender(e.target.value)
    }

    const defaultTheme = createTheme()
    return (
        <React.Fragment>
            <Navbar/>
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
                                <FormControl fullWidth>
                                    <InputLabel id="select-yesNo-label">Have you given IELTS</InputLabel>
                                        <Select
                                        labelId="select-yesNo-label"
                                        id="yesNo"
                                        required
                                        value={yesNo}
                                        label="Have you given IELTS"
                                        onChange={handleYesNoChange}
                                        >
                                            <MenuItem value={"yes"}>Yes</MenuItem>
                                            <MenuItem value={"no"}>No</MenuItem>
                                        </Select>
                                    </FormControl>
                            </Grid>


                            {yesNo==="yes" && <Ielts/>}
                            
                            {
                                yesNo === "no" &&
                                <Grid item xs={12} >
                                    <Date label="Date planned for IELTS"/>
                                </Grid>
                            }
                            

                            <Education />
                            
                            {
                                edu && <Education onAdd={ ()=>{setEdu(false)}} />
                            }
                        </Grid>
                            <Button
                                sx={{ mt: 3, mb: 2 }} variant="contained"
                                fullWidth
                                onClick={handleAddEduClick} endIcon={<AddIcon />}>
                                    Add Education
                                </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            onClick={handleSubmit}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Apply
                        </Button>

                        {
                            submit && 
                            <Alert sx={{marginBottom:"2%"}} variant="filled" severity="success">
                                You have applied successfully!
                            </Alert>
                        }
                    </Box>
                </Box>
            </Container>
            </ThemeProvider>
            </React.Fragment>
    )
}

export default Apply