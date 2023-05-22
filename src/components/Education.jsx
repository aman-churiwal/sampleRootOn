import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Date from "./Date"

const Education = (props) => {

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
                    value={props.degree}
                                    onChange={handleChange}/>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="specialization"
                                    required
                                    fullWidth
                                    id="specialization"
                    label="Specialization"
                    value={props.specialization}
                                    onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                    <Date d={props.startDate} label="Start Date"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                <Date d={props.endDate } label="End Date"/>
                            </Grid>
        </React.Fragment>
    )
}

export default Education