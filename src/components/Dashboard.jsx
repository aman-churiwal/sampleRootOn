import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack"
import Autocomplete from '@mui/material/Autocomplete';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import universities from "../localDb/universities"
import Navbar from "./Navbar";
import Button from "@mui/material/Button"
import LinearProgress from '@mui/material/LinearProgress';
import {useNavigate} from "react-router-dom";

const Dashboard = () => {

    const [urlParam,
        setUrlParam] = useState("")
    const [uniUrl,
        setUniUrl] = useState("http://universities.hipolabs.com/search?name=" + urlParam + "&country=canada")
    // const uniUrl = "http://universities.hipolabs.com/search?name=" + urlParam +
    // "&country=canada"
    const [open,
        setOpen] = useState(false)
    const [value,
        setValue] = useState("")
    const [uniArr,
        setUniArr] = useState([{}])
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()

    const fetchCollege = async(url) => {
        try {
            setValue(value)
            const res = await fetch(url, {method: 'GET'})
            const data = await res.json()
            console.log(data)
            if (data.length > 0) {
                console.log("Line 35")
                console.log(data)
                // data.map(uni => {
                //     setUniArr(uniArr => {
                //         return [
                //             uni
                //         ]
                //     }
                //     )
                // })
                setUniArr(data)
                //return data
            }

            //console.log(uniArr)
        } catch (error) {
            console.error(error)
        }
    }

    // useEffect(() => {     fetchCollege(uniUrl) }, [])

    const handleUniChange = (e, newValue) => {
        //e.preventDefault();
        //console.log(uniArr)
        //setOpen(false)
        // navigate('/university', {
        //     replace: true,
        //     state: {
        //         uniName: newValue
        //     }
        // })
    }

    const handleClick = (e, newValue) => {
        console.log("Handle Click Called")
        console.log(newValue)
        setLoader(true)
        setTimeout(changeLoader, 2000)
        navigate('/university', {
            replace: true,
            state: {
                uniName: newValue.name
            }
        })
    }

    const textIpChange = async(e) => {
        e.preventDefault()
        setValue(e.target.value)
        setUrlParam(e.target.value)
        console.log(e.target.value)
        setUniUrl("http://universities.hipolabs.com/search?name=" + urlParam + "&country=canada")
        await fetchCollege(uniUrl)
        console.log(uniArr)
    }

    const changeLoader = () => setLoader(false)

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/login')
    }

    return (
        <React.Fragment>
            <Navbar />
            <Box sx={{ width: '100%' }}>
                {loader && <LinearProgress />}
            </Box>
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
                }}>
                    <Grid>
                        <Typography
                            sx={{
                            marginTop: 0,
                            marginBottom: 1
                        }}
                            component="h1"
                            variant="h5">
                            Select any university
                        </Typography>
                    </Grid>
                    <Stack
                        spacing={2}
                        sx={{
                        width: 300,
                        direction: "column"
                    }}>
                        <Autocomplete
                            freeSolo
                            open={open}
                            onOpen={()=>{setOpen(true)}}
                            id="free-solo-2-demo"
                            disableClearable
                            options={uniArr}
                            getOptionLabel={option => option.name || ""}
                            renderInput={(params) => 
                            <TextField
                                    {...params}
                                label="University"
                                value={value}
                                InputProps={{
                                ...params.InputProps,
                                type: 'search',
                                    }}
                                    onChange={textIpChange}
                                    //onClick={handleClick}
                                />
                            }
                            onChange={handleClick}
                            onSubmit={(e) => navigate('/university', {
                                        replace: true,
                                        state: {
                                            uniName: newValue.name
                                        }
                                    })}
                            onClose={()=> {setOpen(false)}}
                        />
                        {/* <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={uniArr}
                            sx={{
                            width: 300
                            }}
                            onChange={(e) =>textIpChange(e)}
                            renderInput={(params) => <TextField {...params} label="Search Universities"/>}/> */}
                    </Stack>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{
                        mt: 3,
                        mb: 2
                    }}>
                        Log Out
                    </Button>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Dashboard