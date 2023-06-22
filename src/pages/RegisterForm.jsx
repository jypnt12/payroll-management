
import { Avatar, Box, Button, Container, InputAdornment, Typography } from '@mui/material'
import React from 'react'
import TextFields from '../components/TextFields'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SelectFields from '../components/SelectFields';
import CheckBox from '../components/CheckBox';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { pawdRegExp, phoneRegExp } from '../utils';
import Nav from '../components/Nav';


//create a schema validation
const schema = yup.object({
    fullName: yup.string().required('Full Name is required'),
    email: yup.string().required('Email is required').email(),
    mobile: yup.string().required('Mobile is required').matches(phoneRegExp,'Phone number is not valid.' ),
    gender: yup.string().required('Gender is required'),
    password: yup.string().required('Password is required').matches(pawdRegExp,'Must contain 8 Characters, one uppercase, one lowecase, one number and a special character',),
    
})

const RegisterForm = () => {

    const {handleSubmit,reset, formState:{errors}, control} = useForm({
        defaultValues: {
            fullName: '',
            email:'',
            gender:'male',
            mobile:'',
            password:'',
            remember: false
        },
        resolver: yupResolver(schema)
    });

    // console.log(errors)

    const onSubmit = (data) => {
        console.log(data );
        reset();
    };


  return (
    <>
    <Nav/>
    <Container maxWidth='xs' >
    <Box  sx={{
        display: 'flex',
        flexDirection: 'column',
        mt:'4rem',
        alignItems: 'center'
    }}>
        <Avatar sx={{ m:1, bgcolor: 'secondary.main' }}>
            <HowToRegIcon/>
        </Avatar>

        <Typography component='h1'>Register</Typography>

        <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{width: '100%', mt:'2rem'}}>

            <TextFields 
                label='Full Name' 
                control={control}
                name='fullName' 
                errors={errors}
                />

            <TextFields 
                label='Email' 
                control={control}
                name='email'
                errors={errors}
                />

            <TextFields 
                label='Mobile Phone'
                control={control}
                name='mobile'
                errors={errors}
                inputProps = {{
                    type:'number',
                    startAdornment: 
                    <InputAdornment position="start">
                        +63
                    </InputAdornment>
                }}
            />

            <SelectFields 
                label='Gender'
                control={control}
                name='gender'
                errors={errors}
            />

            <TextFields 
                label='Password' 
                inputProps={{type: 'password'}} 
                control={control}
                name='password'
                errors={errors}
            />

            <CheckBox control={control}
                name='remember'
                errors={errors}/>

            <Button 
                type='submit'
                fullWidth
                variant='contained'
                sx={{mt:3, mb:2}}>
                    Register
            </Button>
        </Box>
    </Box>
    </Container>
    </>
  )
}

export default RegisterForm