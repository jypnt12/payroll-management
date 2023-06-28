import React from 'react'
import RegisterForm from './RegisterForm'
import EmployeeTable from '../components/Table'
import { Button, Container, Grid, Typography } from '@mui/material'
import Nav from '../components/Nav'

const Employees = () => {
  return (
    <div>
      {/* <RegisterForm/> */}
      <Nav/>
      <Container sx={{  mt:'2rem' }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={14}>
          <Typography component='h1' variant='h3'>Employees</Typography>
          </Grid>
          <Grid item xs={2}>
          <Button variant='contained'>Add</Button>
          </Grid>
        </Grid>
        
        
        <EmployeeTable/>
      </Container>
    </div>

  )
}

export default Employees