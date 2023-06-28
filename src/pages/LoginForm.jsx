
import { Avatar, Box, Button, Container, Typography } from '@mui/material'
import React,{useState, useEffect} from 'react'
import TextFields from '../components/TextFields'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { pawdRegExp} from '../utils';
import Nav from '../components/Nav';
import { Link as RouterLink, MemoryRouter, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, connect } from 'react-redux';
import  {useLoginMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

//create a schema validation
const schema = yup.object({
    
    email: yup.string().required('Email is required').email(),
    password: yup.string().required('Password is required').matches(pawdRegExp,'Must contain 8 Characters, one uppercase, one lowecase, one number and a special character',),
    
})

const LoginForm = () => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, {isLoading}] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);
    
    useEffect(()=>{
        if(userInfo){
            navigate('/dashboard');
        }
    },[navigate, userInfo])


    const {handleSubmit,reset, formState:{errors}, control} = useForm({
        defaultValues: {
            email:'',
            password:'',
        },
        resolver: yupResolver(schema)
    });

    // console.log(errors)

    const onSubmit = async (data, e) => {
        e.preventDefault()
        const {email, password} = data;
        // setEmail(data.email);
        // setPassword(data.password);
        console.log(email, password)
        
        
        try {
            console.log("first")
            const res = await login({email, password}).unwrap();
            dispatch(setCredentials({...res}));
             
            navigate('/dashboard')
            console.log("login successfully")
           toast.success("Successfully logged in");
           reset()
        } catch (err){
            toast.error(err?.data?.message || err.error)
        }
        
        // reset();

    }


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

        <Typography component='h1'>Login</Typography>

        <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{width: '100%', mt:'2rem'}}>

            

            <TextFields 
                inputProps={{  autoComplete: 'true'}}
                label='Email' 
                control={control}
                name='email'
                errors={errors}
                
                />


            <TextFields 
                label='Password' 
                inputProps={{type: 'password', autoComplete:"current-password"}} 
                control={control}
                name='password'
                errors={errors}
                
            />

            <Button 
                type='submit'
                fullWidth
                variant='contained'
                sx={{mt:3, mb:2}}>
                    Login
            </Button>
        </Box>
    </Box>
    </Container>
    </>
  )
  // Connect your component with redux

}


export default LoginForm;

