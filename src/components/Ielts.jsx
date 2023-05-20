import React, {useState} from 'react'
import Grid from "@mui/material/Grid"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from '@mui/material/MenuItem';

const Scorecore = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9']

const Ielts = () => {

    const [ielts, setIelts] = useState("")
    const [lrsw, setLrsw] = useState({
        l: "",
        r: "",
        s: "",
        w: ""
    })

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

    return (
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
    )
}

export default Ielts