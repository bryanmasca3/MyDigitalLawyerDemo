import React from 'react'
import Box from '@mui/material/Box';
import './../App.css';
import paper from './../assets/paper.png';
const Lastest = ({lastest}) => {
    return (
        <Box className="container__popular-box">
            <h3>{lastest.title}</h3>
            <img src={paper} alt="Logo" />
            <div className="container__popular-footer">
                <div className="box">
                    <h5>Ultima Revisao:</h5>
                    <span>{lastest.ultimaRevisao}</span>
                </div>
                <div className="box">
                    <h5>Tamanho:</h5>
                    <span>{lastest.tamanho}</span>
                </div>
                <div className="box">
                    <h5>Formatos:</h5>
                    <div><i className='bx bxs-file-doc blue'></i>
                    <i className='bx bxs-file-pdf red' ></i></div>
                </div>
                <div className="box">
                    <h5>Avalicao:</h5>
                    <nav>
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                        <span>{lastest.avaliacao}</span>
                    </nav>
                    <span>{lastest.votos} votos</span>

                </div>
            </div>
            <a className="container__popular-mainbtn">Prenencher o modelo</a>
        </Box>
    )
}

export default Lastest
