import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Date from "./Date"

const Education = () => {

    const handleChange = e => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Education