import React from 'react'
import Box from '@mui/material/Box';
import './../App.css';
import paper from './../assets/paper.png';
import {Link} from "react-router-dom";
const Popular = ({popular}) => {   
    return (
        <Box className="container__popular-box">
            <h3>{popular.title}</h3>
            <img src={paper} alt="Logo" />
            <div className="container__popular-footer">
                <div className="box">
                    <h5>Ultima Revisao:</h5>
                    <span>{popular.ultimaRevisao}</span>
                </div>
                <div className="box">
                    <h5>Tamanho:</h5>
                    <span>{popular.tamanho}</span>
                </div>
                <div className="box">
                    <h5>Formatos:</h5>
                    <div><i class='bx bxs-file-doc blue'></i>
                    <i class='bx bxs-file-pdf red' ></i></div>
                </div>
                <div className="box">
                    <h5>Avalicao:</h5>
                    <nav>
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                        <span>{popular.avaliacao}</span>
                    </nav>
                    <span>{popular.votos} votos</span>

                </div>
            </div>
            <Link className="container__popular-mainbtn"  to="/contract">Prenencher o modelo</Link>
        </Box>
    )
}

export default Popular
