import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import FormHelperText from '@mui/material/FormHelperText';
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
import { useSelector } from "react-redux";
import { getUserSelector } from "../redux/slices/applySilce";


const Scorecore = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9']

const Apply = () => {

    const user = useSelector(getUserSelector)
    console.log(user)

    const [submit, setSubmit] = useState(false);
    const [flag, setFlag] = useState(false)
    const [fName, setFName] = useState(user[0].fName)
    const [lName, setLName] = useState(user[0].lName)
    const [gender, setGender] = useState(user[0].gender)
    const [email, setEmail] = useState(user[0].email)
    const [yesNo, setYesNo] = useState("")
    const [lrsw, setLrsw] = useState({
        l: "",
        r: "",
        s: "",
        w: ""
    })
    const [ielts, setIelts] = useState("")
    const [eduItems, setEduItems] = useState([{
        degree: "",
        specializiation: "",
        startDate: "",
        endDate:"",
    }])

    const addEduItem = () => {
        setEduItems([...eduItems, {
            degree: "",
            specializiation: "",
            startDate: "",
            endDate: "",
        }])
    }

    const handleFNameChange = e => {
        e.preventDefault()
        setFName(e.target.value)
    }
    const handleLNameChange = e => {
        e.preventDefault()
        setLName(e.target.value)
    }
    const handleEmailChange = e => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleIeltsChange = e => {
        e.preventDefault()
        setIelts(e.target.value)
    }

    const handleLrswChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        setLrsw(prevLrsw => {
            return {
                ...prevLrsw,
                [name]: value
            }
        })
    }

    const handleChange = (ind, e) => {
        const { name, value } = e.target
        const list = [...eduItems]
        list[ind][name] = value
        setEduItems(list)
    }

    const handleYesNoChange = e => {
        e.preventDefault()
        setYesNo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (fName === "" || lName === "" || email === "" || gender === "" || yesNo === "") {
            setSubmit(false)
            setFlag(true)
        } else if (yesNo === "yes" && (lrsw.l === "" || lrsw.r === "" || lrsw.s === "" || lrsw.w === "" || ielts === "")) {
            setSubmit(false)
            setFlag(true)
        } else {
            setSubmit(true)
            setFlag(false)
        }
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
                                        value={fName}
                                    id="firstName"
                                    label="First Name"
                                        onChange={handleFNameChange}
                                        
                                    />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                        id="lastName"
                                        value={lName}
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={handleLNameChange}
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
                                            <MenuItem value={"Male"}>Male</MenuItem>
                                            <MenuItem value={"Female"}>Female</MenuItem>
                                            <MenuItem value={"Non-Binary"}>Non-Binary</MenuItem>
                                            <MenuItem value={"Prefer Not To Say"}>Prefer not to say</MenuItem>
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
                                        value={email}
                                        onChange={handleEmailChange}
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
                                    <FormHelperText>* Reqiured</FormHelperText>
                                    </FormControl>
                            </Grid>


                                {
                                    yesNo === "yes"
                                        &&
                                    <React.Fragment>
                                        <Grid item xs={12} sm={3}>
                                            <FormControl fullWidth>
                                                <InputLabel id="select-l-label">L</InputLabel>
                                                <Select
                                                    labelId="select-l-label"
                                                    id="lrsw"
                                                    value={lrsw.l}
                                                    label="L"
                                                    name="l"
                                                    onChange={handleLrswChange}
                                                    required
                                                    >
                                                        {Scorecore.map(score => {
                                                            return (
                                                                <MenuItem value={score}>{score}</MenuItem>
                                                                )
                                                            })}
                                                    </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <FormControl fullWidth>
                                                <InputLabel id="select-r-label">R</InputLabel>
                                                <Select
                                                    labelId="select-r-label"
                                                    id="lrsw"
                                                    value={lrsw.r}
                                                    label="R"
                                                    name="r"
                                                    onChange={handleLrswChange}
                                                    required
                                                >
                                                    {Scorecore.map(score => {
                                                        return (
                                                            <MenuItem value={score}>{score}</MenuItem>
                                                            )
                                                        })}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <FormControl fullWidth>
                                                <InputLabel id="select-s-label">S</InputLabel>
                                                <Select
                                                    labelId="select-s-label"
                                                    id="lrsw"
                                                    value={lrsw.s}
                                                    label="S"
                                                    name="s"
                                                    onChange={handleLrswChange}
                                                    required
                                                    >
                                                        {Scorecore.map(score => {
                                                            return (
                                                                <MenuItem value={score}>{score}</MenuItem>
                                                                )
                                                            })}
                                                    </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <FormControl fullWidth>
                                                <InputLabel id="select-w-label">W</InputLabel>
                                                <Select
                                                    labelId="select-w-label"
                                                    id="lrsw"
                                                    value={lrsw.w}
                                                    label="W"
                                                    name="w"
                                                    onChange={handleLrswChange}
                                                    required
                                                >
                                                    {Scorecore.map(score => {
                                                        return (
                                                            <MenuItem value={score}>{score}</MenuItem>
                                                            )
                                                        })}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                                <InputLabel id="select-ielts-label">Overall</InputLabel>
                                                <Select
                                                    labelId="select-ielts-label"
                                                    id="ielts"
                                                    value={ielts}
                                                    label="IELTS"
                                                    onChange={handleIeltsChange}
                                                    required
                                                >
                                                    {Scorecore.map(score => {
                                                        return (
                                                            <MenuItem value={score}>{score}</MenuItem>
                                                            )
                                                        })}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </React.Fragment>
                                }
                            
                            {
                                yesNo === "no" &&
                                <Grid item xs={12} >
                                            <Date label="Date planned for IELTS" />
                                            <FormHelperText>* Reqiured</FormHelperText>
                                </Grid>
                            }
                            

                                {
                                    eduItems.map((data, ind) => {
                                        const { deg, spec, sd, ed } = data
                                        return (
                                            <React.Fragment key={ind}>
            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="degree"
                                    required
                                                        fullWidth
                                                        helperText="* Required"
                                    id="degree"
                    label="Degree"
                    value={deg}
                                    onChange={(e)=>handleChange(ind, e)}/>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="specialization"
                                    required
                                                        fullWidth
                                                        helperText="*Required"
                                    id="specialization"
                    label="Specialization"
                    value={spec}
                                    onChange={(e)=>handleChange(ind, e)}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                                    <Date d={sd} label="Start Date" />
                                                    <FormHelperText>* Reqiured</FormHelperText>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                                    <Date d={ed} label="End Date" />
                                                    <FormHelperText>* Reqiured</FormHelperText>
                            </Grid>
        </React.Fragment>
                                        )
                                    })
                            }
                        </Grid>
                            <Button
                                sx={{ mt: 3, mb: 2 }} variant="contained"
                                fullWidth
                                onClick={addEduItem} endIcon={<AddIcon />}>
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
                            {
                                flag && <Alert variant="filled" sx={{ margin: 'auto', marginBottom: '2%', width: '100%' }} severity="error">One or more fields are missing!</Alert>
                            }
                    </Box>
                </Box>
            </Container>
            </ThemeProvider>
            </React.Fragment>
    )
}

export default Apply