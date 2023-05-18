import React from 'react';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers';

const Date = (props) =>{
  return (
     <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem label={props.label}>
              <DesktopDatePicker label={'MM/YYYY'} views={['month', 'year']}  />
</DemoItem>
    </LocalizationProvider>
  );
}

export default Date