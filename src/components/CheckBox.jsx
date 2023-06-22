import { Checkbox,  FormControlLabel, TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'

const CheckBox = ({name, control, errors,}) => {
  return (
    <>
        <Controller name={name} control={control}
            render={({field})=>(
                <FormControlLabel control={<Checkbox {...field}/>}
                    label="Remember me."
                />
            )}
        />
       {errors[name]? <ErrorMessage message={errors[name].message}/>: null}
       
    </>
       
  
  )
}

export default CheckBox