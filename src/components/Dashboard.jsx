import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import universities from "../localDb/universities"
import Navbar from "./Navbar";
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom";
import { passUni } from "../redux/actions/Uni";
import { connect } from "react-redux";
import University from "./University"

const Dashboard = ({ passUni }) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const navigate = useNavigate()
    const handleUniChange = (e, newValue) => {
        e.preventDefault();
        console.log(newValue);
        setValue(newValue)
        setOpen(false)
        navigate('/university', { replace: true, state:{uniName: newValue}})
    }

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/login')
    }

    return (
        <React.Fragment>
            <Navbar/>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 'auto',
                        py: 4,
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "##FEF8DD"
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
                            open={open}
                            onOpen={()=>{setOpen(true)}}
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
                            onChange={handleUniChange}
                            onClose={()=> {setOpen(false)}}
                        />
                    </Stack>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Log Out
                    </Button>
                </Box>
            </Container>
        </React.Fragment>   
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    passUni: (uniName)=>(dispatch(passUni(uniName)))
})

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard)