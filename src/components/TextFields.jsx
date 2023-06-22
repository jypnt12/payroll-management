import { FormControl, TextField } from '@mui/material'
import React from 'react'
import { Controller} from 'react-hook-form';
import { addErrorIntoField } from '../utils';
import ErrorMessage from './ErrorMessage';

const TextFields = ({label, inputProps, control, name, errors}) => {
  return (
    <FormControl fullWidth sx={{mb: '1rem'}}>
        <Controller
            control={control}
            name={name}

            render={({field})=>(
                <TextField 
                    {...field}
                    required 
                    label={label} 
                    {...addErrorIntoField(errors[name])}
                    variant='outlined' 
                    InputProps={inputProps}
                    size="small"
                />
            )}
        />
        {errors[name]? <ErrorMessage message={errors[name].message}/>: null}
    </FormControl>
  )
}

export default TextFields