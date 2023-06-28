import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link as RouterLink, MemoryRouter,  useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { useSelector,useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice'



const pages = [
  'Home',
  'Employees',
  'Approvals', 
  'Holidays', 
  'Payments', 
  'Payslip', 
  'Schedule', 
  'TimeIn', 
  'Report', 
  'DTR'
];

const settings = ['Profile', 'Account', 'Dashboard'];

function Nav() {
  const [anchorElNav, setAnchorElNav] =useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const [logoutApiCall ] = useLogoutMutation();

  const logoutHandler = async ()=> {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/')
    } catch (err){

    }
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" >

      <Container >

        <Toolbar disableGutters>

          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          {/* <Link component={RouterLink} to="/"> */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PAYROLL
          </Typography>
          {/* </Link> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>


            {/* menu on mobile */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}  >
                  <Typography textAlign="center"  component={RouterLink} to={`${page}`} sx={{
              color: 'inherit',
              textDecoration: 'none',
            }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Typography
            variant="h5"
            noWrap
            component={RouterLink} 
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PAYROLL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                component={RouterLink} 
                to={`/${page}`}
                // href={`/${page}`}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              
              {userInfo && <Typography textAlign="center">{userInfo.name}</Typography> }
            </Grid>
            <Grid item xs={8}>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            </Grid>
            </Grid>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} component={RouterLink}  to={`/${setting}`}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem key={'logout'} onClick={logoutHandler} >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;