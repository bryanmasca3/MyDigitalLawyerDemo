import React from 'react'
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import './../App.css';
import logo from './../assets/logo.png';
import { useLocation } from 'react-router-dom';
const Header = () => {
    const location = useLocation(); 
    return (
        <> <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="header__content"
        >
        <Grid item xs={6} md={1} className="header__content-social">
            <i className='bx bxl-facebook-square'></i>
            <i className='bx bxl-instagram' ></i>
            <i className='bx bxl-twitter' ></i>
            <i className='bx bxl-youtube' ></i>
        </Grid>
        <Grid item xs={6} md={8}/>
        
        <Grid item xs={6} md={2} className="header__content-language">
           <nav>               
               <a>Contato</a>
               <a><i className='bx bx-search' ></i></a>
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
            <Link className={`${location.pathname==="/"?"activate":""} menu-item`} to="/">Sobre Nos</Link>
            {/*<a className="menu-item" >Planos</a>*/}
            <Link  className={`${location.pathname==="/contractList"?"activate":""} menu-item`} to="/contractList">Contratos</Link>
            <Link  className={`${location.pathname==="/advogados"?"activate":""} menu-item`} to="/advogados">Advogados</Link>
            <Link className={`${location.pathname==="/equipe"?"activate":""} menu-item`} to="/equipe">Equipe</Link>
            <i className='bx bxs-user-rectangle' ></i>
        </nav>
        </Grid>
    
    </Grid></>
    )
}

export default Header
