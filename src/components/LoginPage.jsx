import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import validator from "validator"
import users from "../localDb/users";

const LoginForm = () => {

    const currUser = JSON.parse(localStorage.getItem('user'))

    const [flag, setFlag] = useState(false)
    const [wrongCredFlag, setWrongCredFlag] = useState(false)
    const [email, setEmail] = useState(currUser.email)
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState("")
    const [passError, setPassError] = useState(false)

    const navigate = useNavigate()
    const handleSignInClick = (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            setWrongCredFlag(false)
            setFlag(true)
        } else if (password !== currUser.password) {
            setFlag(false)
            setWrongCredFlag(true)
        } else {
            navigate('/dashboard')
        }

        // for (let i = 0; i < users.length; i++) {
        //     if (email === "" || password === "") {
        //         setFlag(true)
        //     } else if (users[i].email === email && users[i].password === password) {
        //         setFlag(false);
        //         navigate('/dashboard/')
        //     } else {
        //         setWrongCredFlag(true)
        //     }
        // }
    }
        const handleEmailChange = e => {
            e.preventDefault();
            setEmail(e.target.value)
            if (validator.isEmail(e.target.value)) {
                setEmailError(false)
            } else {
                setEmailError(true)
            }
        }

        const handlePasswordChange = e => {
            e.preventDefault();
            setPassword(e.target.value)
        }

        const handleSubmit = e => {
            e.preventDefault();
            const data = new FormData(eventcurrentTarget)
            console.log({
                email: data.get('email'),
                password: data.get('password'),
            })
        }

        return (
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
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} nonValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            value={email}
                            label="Email"
                            name="email"
                            error={emailError}
                            helperText={emailError ? "Please enter a valid email address" : "* Required"}
                            autoComplete="email"
                            onChange={(e) => handleEmailChange(e)}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            value={password}
                            error={passError}
                            helperText={passError ? "" : "* Required"}
                            type="password"
                            id="password"
                            onChange={handlePasswordChange}
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember Me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={handleSignInClick}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot Password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        {flag && <Alert sx={{ marginTop: "5%" }} variant="filled" severity="error">
                            One or more fields are empty
                        </Alert>}
                        {wrongCredFlag && <Alert sx={{ marginTop: "5%" }} variant="filled" severity="error">
                            Wrong Email or Password
                        </Alert>}
                    </Box>
                </Box>
            </Container>
        )
    }

export default LoginForm