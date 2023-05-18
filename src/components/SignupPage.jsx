import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MuiPhoneNumber from 'material-ui-phone-number';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button";
import Link from "@mui/material/Link"
import validator from "validator"


const SignupForm = () => {
    const [gender, setGender] = useState("")
    const [emailError, setEmailError] = useState(false) 
    const [passError, setPassError] = useState(false)
    const [touch, setTouch] = useState(false);
    const [confPassError, setConfPassError] = useState(false)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const defaultTheme = createTheme()

    const confirmWithOrig = (e) => {
        setConfirmPassword(e.target.value)
        //console.log(pass)
        if (password !== e.target.value) {
            setConfPassError(true)
        } else {
            setConfPassError(false)
        }
    }

    const handleChange = e => {
        e.preventDefault();
    }
    
    const handleGenderChange = e => {
        handleChange(e)
        setGender(e.target.value)
    }
    
    const validateEmail = (e) => {
        handleChange(e)
        if (validator.isEmail(e.target.value)) {
            setEmailError(false)
        } else {
            setEmailError(true)
        }
    }
    
    const validatePassword = (e) => {
        handleChange(e)
        setPassword(e.target.value)
        if (e.target.value === "") {
            setPassError("")
        } else if (validator.isStrongPassword(e.target.value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setPassError("Strong Password")
        } else {
            setPassError("Password should be at least 8 characters and should cotains atleast one each of uppercase, lowercase, digit and special character") 
        }
    }

    const handleSubmit = e => {
        handleChange(e)
        const data = new FormData(e.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password')
        })
    }

    return (
        <ThemeProvider theme={defaultTheme} >
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                sx={{
                        //marginTop: 2,
                        display: 'flex',
                        flexDirection: 'columnn',
                        alignItems: 'center'
                }}
                >
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
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

                    <Avatar
                        sx={{
                            m: 2, 
                            bgcolor: 'secondary.main',
                        }}
                        src="../rooton.png"
                    >
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography
                    component="h1" variant="h5">
                        Sign Up
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
                                <MuiPhoneNumber 
                                    defaultCountry={'in'}
                                    required
                                    fullWidth
                                    id="phoneNo"
                                    name="phoneNo"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="select-gender-label">Gender</InputLabel>
                                        <Select
                                            labelId="select-gender-label"
                                            id="gender"
                                            value={gender}
                                        label="Gender"
                                        required
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
                                    error={emailError}
                                    autoComplete="email"
                                    onChange={(e) => validateEmail(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            error={touch && passError === ""}
                            helperText={touch && passError === "" ?  'Empty field!' : passError}
                            onChange={(e) => validatePassword(e) }
                            autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => confirmWithOrig(e)}
                                    error={confPassError}
                                    helperText={confPassError ? 'Passwords Do Not Match' : ''}
                                    autoComplete="confirm-password"
                            />
                        </Grid>
                        </Grid>
                        
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign In
                                </Link>
                            </Grid>
                        </Grid>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
)

}

export default SignupForm