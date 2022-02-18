import React from 'react'
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import './../App.css';
import logo from './../assets/logo.png';
const Header = () => {
    return (
        <> <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="header__content"
        >
        <Grid item xs={6} md={1} className="header__content-social">
            <i class='bx bxl-facebook-square'></i>
            <i class='bx bxl-instagram' ></i>
            <i class='bx bxl-twitter' ></i>
            <i class='bx bxl-youtube' ></i>
        </Grid>
        <Grid item xs={6} md={8}/>
        
        <Grid item xs={6} md={2} className="header__content-language">
           <nav>               
               <a>Contato</a>
               <a><i class='bx bx-search' ></i></a>
               <a>POR</a>
               <a>ENG</a>
           </nav>
        </Grid>
       
    </Grid>
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="header__content-nav"
        >
        <Grid item xs={6} md={6}  className="header__content-logo">
            <img src={logo} alt="Logo" />
        </Grid>
        <Grid item xs={6} md={6}  className="header__content-menu">
        <nav>
            <a className="activate menu-item">Sobre Nos</a>
            <a className="menu-item" >Planos</a>
            <Link  className="menu-item" to="/contractList">Contratos</Link>
            <Link  className="menu-item" to="/advogados">Advogados</Link>
            <a className="menu-item" >Equipe</a>
            <i class='bx bxs-user-rectangle' ></i>
        </nav>
        </Grid>
    
    </Grid></>
    )
}

export default Header
