import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './../App.css';
import logo from './../assets/logo_2.png';
const Footer = () => {
    return (
        <Box  className="footer__content">
       
            <Grid
                container  
                className="footer__main"    
                >
                <Grid item xs={6} md={4} className="footer__logo">
                    <div>
                        <img src={logo} alt="Logo" />
                        <a>Nos Contate</a>
                    </div>                   
                </Grid>
                <Grid item xs={6} md={4} className="footer__icons">
                    <div>
                        <nav>
                            <i className='bx bxl-facebook-square'></i>
                            <i className='bx bxl-instagram' ></i>
                            <i className='bx bxl-twitter' ></i>
                            <i className='bx bxl-youtube' ></i>
                        </nav>
                        <a>Sobre Nos</a>
                    </div> 
                </Grid>
                <Grid item xs={6} md={4} className="footer__terms">
                    <a>Termos &  Condicoes</a>
                </Grid>
            </Grid>
                 
            <p>My digital Lawyer - Copyright 2022</p>
          
        </Box>
    )
}

export default Footer
