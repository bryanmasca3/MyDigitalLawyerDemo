import React from 'react';
import slider1 from './../assets/img3.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Slider = () => {
    return (
        <Box>
              <Grid
                container  
                className="Slider__container"  
                direction={'row'}  
                >
                <Grid item xs={6} md={6} >
                    <Box className="Slider__container-text">
                        <h3>Documentos juridicos com
                        qualidade e preco <br></br>
                        acessivel!
                        </h3>
                        <div>
                            <p>Somos a My Digital Lawyer: A consultoria
                                juridica do tamanho ideal para o momentodo
                                seu negocio. Conheca nossos pacotes de
                                protudos e servicos e tenha tempo para se
                                preocupar com o que realmente imprta ora
                                sua empresa!
                            </p>
                            <a className="btn-home">Quer saber mais?</a>
                        </div>
                       
                    </Box>                   
                </Grid>
                <Grid item xs={6} md={6} >
                    <Box className="Slider__container-img">
                    <img src={slider1} alt="Logo" />
                    </Box>
                  
                </Grid>              
            </Grid>
        </Box>
    )
}

export default Slider
