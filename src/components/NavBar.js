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

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => { 
        
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => { 
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (event) => {
        console.log(event);
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (event) => {
        console.log(event);
        setAnchorElUser(null);
    };

    const [anchorConf, setAnchorConf] = useState(null);
    const handleClickConf = (event) => {
        event.preventDefault();
        setAnchorConf(event.currentTarget);
      };

    const handleCloseConf = () => {
    setAnchorConf(null);
    };

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
 

    return ( 
        // <Navbar bg="light" expand="lg" fixed="top" >
        // <Navbar.Brand href="/home">IziPay</Navbar.Brand>
        // <Navbar.Toggle aria-controls="basic-navbar-nav" />
        // <Navbar.Collapse id="basic-navbar-nav">
        //     <Nav className="mr-auto">
        //     <NavDropdown title="Mi Cuenta Web" id="basic-nav-dropdown">  
        //         {/* <NavDropdown.Item><Link to="/formpay">Formulario de Pago</Link></NavDropdown.Item> */}
        //         <NavDropdown.Item><Link to="/formembedded">Formulario Incrustado</Link></NavDropdown.Item>    
        //     </NavDropdown>
        //     {/* <NavDropdown title="Punto Web" id="basic-nav-dropdown">
        //         <NavDropdown.Item><Link to="/formpwmarcas">Multi Marca</Link></NavDropdown.Item>   
        //     </NavDropdown> */}
        //     </Nav> 
        // </Navbar.Collapse>
        // </Navbar> 
        <>
        <AppBar position="static" className="contenedor" style={{ background: '#ff1e16'}} > 
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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
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

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end' }}>
                
                    <Nav className="ml-auto pr-2">     
                            <Link to="" onClick={(e) => handleClickConf(e)} className='d-flex flex-column my-auto justify-content-center sinsombra' style={{textDecoration: 'none'}}> 
                                    <i className="fas fa-cog fa-2x icon"/>
                                    <span className="icon">IPN</span>    
                            </Link>   
                    </Nav> 
              </Box>
    
    
            </Toolbar>
          </Container>
        </AppBar>


    
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorConf}
                    keepMounted
                    open={Boolean(anchorConf)}
                    onClose={handleCloseConf}
                >
                    <Link to="/formipn" style={{textDecoration: 'none'}}>
                      <StyledMenuItem onClick={handleCloseConf}>
                          <ListItemIcon>
                              <i className="fas fa-cog fa-2x" />
                          </ListItemIcon>
                          <ListItemText className="listitem" primary="IPN API" />
                      </StyledMenuItem> 
                    </Link> 
 
                    
                </StyledMenu>


</>
    )
}
