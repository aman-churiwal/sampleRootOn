import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { MuiTelInput } from 'mui-tel-input'
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button";
import Link from "@mui/material/Link"
import validator from "validator"
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { v4 as uuidv4 } from 'uuid';
//import fs from "browserify-fs";
import users from "../localDb/users";
const fs = require("fs")

import { addUser } from "../redux/slices/applySilce"
import { useDispatch } from "react-redux";


const SignupForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [flag, setFlag] = useState(false)
    const [flag1, setFlag1] = useState(false)
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passError, setPassError] = useState(false)
    const [passHelperText, setPassHelperText] = useState("")
    const [confPassError, setConfPassError] = useState()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confPassHelperText, setConfPassHelperText] = useState("")

    const defaultTheme = createTheme()

    // const postUser = (user) => {
    //     user = {
    //         ...user,
    //         id: uuidv4()
    //     }
    //     users.push(user)
    //     const jsonData = JSON.stringify(users)
    //     console.log(jsonData)
        // fs.writeFile('users.json', jsonData, 'utf-8', (err) => {
        //     if (err) {
        //         console.error(err)
        //     } else {
        //         console.log("JSON file updated")
        //     }
        // })
    // }

    const confirmWithOrig = (e) => {
        setConfirmPassword(e.target.value)
        //console.log(pass)
        if (e.target.value === "") {
            setConfPassError("* Required")
        } else if (password !== e.target.value) {
            setConfPassHelperText("Passwords do not match")
            setConfPassError(Boolean(true))
        } else {
            setConfPassHelperText("Passswords Matched")
            setConfPassError(Boolean(false))
        }
    }

    const handleClick = e => {
        //e.preventDefault()
        console.log("Handle Click Called")
        if (password !== confirmPassword) {
            setFlag1(true)
        }
        else if (fName !== "" && lName !== "" && phoneNo !== "" && gender !== "" && email !== "" && password !== "" && confirmPassword !== "") {
            setFlag(false)
            const currUser = {
                fName: fName,
                lName: lName,
                phoneNo: phoneNo,
                gender: gender,
                email: email,
                password: password
            }
            //postUser(currUser)
            // dispatch(addUser({
            //     firstName: fName,
            //     lastName: lName,
            //     phoneNo: phoneNo,
            //     gender: gender,
            //     email: email,
            // }))

            localStorage.setItem('user', JSON.stringify(currUser))

            navigate('/login')
        } else {
            setFlag(true)
        } 
    }

    const handleFNameChange = e => {
        e.preventDefault()
        setFName(e.target.value)
    }
    const handleLNameChange = e => {
        e.preventDefault()
        setLName(e.target.value)
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
        setEmail(e.target.value)
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
            setPassError(true)
        } else if (validator.isStrongPassword(e.target.value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setPassHelperText("Strong Password")
            setPassError(false)
        } else {
            setPassError(false)
            setPassHelperText("Password should be at least 8 characters and should cotains atleast one each of uppercase, lowercase, digit and special character") 
        }
    }

    const handlePhoneNoChange = value => {
        setPhoneNo(value)
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
                        //onSubmit={(e) => handleClick(e)}
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
                        {<SensorOccupiedIcon />}
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
                                    value={fName}
                                    fullWidth
                                    id="firstName"
                                    //error={fNameError}
                                    helperText="* Required"
                                    label="First Name"
                                    onChange={handleFNameChange}/>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    value={lName}
                                    name="lastName"
                                    helperText="* Required"
                                    autoComplete="family-name"
                                    onChange={handleLNameChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                    <MuiTelInput
                                    sx={{display:'flex'}}
                                    value={phoneNo}
                                    placeholder="Contact Number"
                                    helperText="* Required"
                                    forceCallingCode
                                    onChange={handlePhoneNoChange}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="select-gender-label"
                                    helperText="* Required">Gender</InputLabel>
                                        <Select
                                            labelId="select-gender-label"
                                            id="gender"
                                        value={gender}
                                        
                                        label="Gender"
                                        required
                                            onChange={handleGenderChange}
                                        >
                                            <MenuItem value={"Male"}>Male</MenuItem>
                                            <MenuItem value={"Female"}>Female</MenuItem>
                                            <MenuItem value={"Non-Binary"}>Non-Binary</MenuItem>
                                            <MenuItem value={"Prefer not to say"}>Prefer not to say</MenuItem>
                                    </Select>
                                    <FormHelperText>* Required</FormHelperText>
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
                                    value={email}
                                    error={emailError}
                                    helperText={emailError ? "Please enter a valid email address" : '* Required'}
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
                            error={passError}
                            helperText={!passError && passHelperText==="" ? "* Required" :passHelperText}
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
                                    helperText={confPassHelperText}
                                    autoComplete="confirm-password"
                            />
                        </Grid>
                        </Grid>
                        
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            onClick={handleClick}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                        <Grid container justifyContent="flex-end" sx={{marginBottom:'3.5%'}}>
                            <Grid item >
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign In
                                </Link>
                            </Grid>
                            {flag && <Alert variant="filled" sx={{ margin: 'auto', marginTop: '5%', width: '100%' }} severity="error">One or more fields are missing!</Alert>}
                            {flag1 && <Alert variant="filled" sx={{ margin: 'auto', marginTop: '5%', width: '100%' }} severity="error">Passwords do not match!</Alert>}
                        </Grid>
                    </Box>
            </Box>
        </Container>
    </ThemeProvider>
)

}

export default SignupForm