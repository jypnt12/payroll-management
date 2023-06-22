
import { FormControl, TextField, MenuItem, MenuList } from '@mui/material'
import React from 'react'
import { Controller} from 'react-hook-form';
import { addErrorIntoField } from '../utils';
import ErrorMessage from './ErrorMessage';

const SelectFields = ({label,control, name, errors, message}) => {
  return (
    <FormControl fullWidth sx={{mb: '1rem'}}>
         <Controller
            control={control}
            name={name}

            render={({field})=>(
            <TextField select  
            {...field} 
            required 
            size="small"
            label={label} 
            variant='outlined'
            {...addErrorIntoField(errors[name])}
             >
            
            <MenuItem value='male'> Male </MenuItem>
            <MenuItem value='female'> Female </MenuItem>
        </TextField>
            )}
        />
       
       {errors[name]? <ErrorMessage message={errors[name].message}/>: null}
    </FormControl>
  )
}

export default SelectFields