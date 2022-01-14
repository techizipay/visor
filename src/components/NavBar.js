import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import { Link } from 'react-router-dom';

 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container'; 
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles'; 
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';    

import './css/NavBar.css'; 

const pages = ['Formulario Incrustado','IPN'];
const settings = ['Credenciales'];



export const NavBar = () => {

    const useStyles = makeStyles((theme) => ({
      typography: {
        padding: theme.spacing(2),
      },
    }));

    const StyledMenu = withStyles({
      paper: {
        border: '1px solid #d3d4d5',
      },
    })((props) => (
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        {...props}
      />
    ));
    
    const StyledMenuItem = withStyles((theme) => ({
      root: {
        '&:focus': {
          backgroundColor: 'rgb(2, 117, 216)',
          '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.white,
          },
        },
      },
    }))(MenuItem);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => { 
        
        setAnchorElNav(event.currentTarget);
    }; 

    const handleCloseNavMenu = (event) => {
        console.log(event);
        setAnchorElNav(null);
    }; 

    const [anchorConf, setAnchorConf] = useState(null);
    const handleClickConf = (event) => {
        event.preventDefault();
        setAnchorConf(event.currentTarget);
      };

    const handleCloseConf = () => {
    setAnchorConf(null);
    };

    const [anchorPay, setAnchorPay] = useState(null);
    const handleClickPay = (event) => {
      event.preventDefault();
      setAnchorPay(event.currentTarget);
    };
    const handleClosePay = () => {
      setAnchorPay(null);
      };
 

    return ( 
        <> 
        <Navbar expand="lg" fixed="top" style={{ background: '#ff1e16'}}> 
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                <img src='https://www.izipay.pe/_nuxt/dist/img/logo.8e6aa05.png' width='100px' height='50px' /> 
              </Typography>

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
                    <Link to="/showpay">
                      <MenuItem key={1} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Formulario Incrustado</Typography>
                      </MenuItem> 
                    </Link>

                    <Link to="/showipn">
                      <MenuItem key={1} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">IPN API</Typography>
                      </MenuItem> 
                    </Link>
 
                </Menu>
              </Box>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                <img src='https://www.izipay.pe/_nuxt/dist/img/logo.8e6aa05.png' width='100px' height='50px' /> 
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end' }}  style={{marginRight: '6rem'}}> 
                  <Link to="" onClick={(e) => handleClickPay(e)} className='d-flex flex-column mr-4' style={{textDecoration: 'none'}}> 
                          <i className="far fa-credit-card fa-2x icon"/>
                          <span className="icon">PAGO</span>    
                  </Link>   
       
                  <Link to="" onClick={(e) => handleClickConf(e)} className='d-flex flex-column' style={{textDecoration: 'none'}}> 
                          <i className="fas fa-cog fa-2x icon"/>
                          <span className="icon">IPN</span>    
                  </Link>    
              </Box>
    
            </Toolbar>
          </Container>
        </Navbar>


    
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorConf}
            keepMounted
            open={Boolean(anchorConf)}
            onClose={handleCloseConf}
        >
            <Link to="/showipn" style={{textDecoration: 'none'}}>
              <StyledMenuItem onClick={handleCloseConf}>
                  <ListItemIcon>
                      <i className="fas fa-cog fa-2x" />
                  </ListItemIcon>
                  <ListItemText className="listitem" primary="IPN API" />
              </StyledMenuItem> 
            </Link> 
        </StyledMenu>

        <StyledMenu
            id="customized-menu"
            anchorEl={anchorPay}
            keepMounted
            open={Boolean(anchorPay)}
            onClose={handleClosePay}
        >
            <Link to="/showpay" style={{textDecoration: 'none'}}>
              <StyledMenuItem onClick={handleClosePay}>
                  <ListItemIcon>
                      <i className="far fa-credit-card fa-2x" />
                  </ListItemIcon>
                  <ListItemText className="listitem" primary="Formulario Incrustado" />
              </StyledMenuItem> 
            </Link> 
        </StyledMenu>


</>
    )
}
