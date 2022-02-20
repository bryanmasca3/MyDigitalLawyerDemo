import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from "./../components/Header.js"
import Footer from "./../components/Footer.js"
import Grid from '@mui/material/Grid';
import Formmessage from './../components/Formmessage.js'
import Advogado from './../assets/img4.png';

const Advogados = () => {
    return (
        <>
         <Box>
            <Header></Header>
        </Box>
         <Box>
         <Grid
                container  
                className="Slider__container"  
                direction={'row'}  
                >
                <Grid item xs={6} md={6} >
                    <Box className="Slider__container-text">
                        <h3>Faca parte do time!
                        </h3>
                        <div>
                            <p>Em <span>My Digital Lawyer</span> voce tera a oportunidade
                                de mostrar seu perfil professional e podere ser 
                                encontrado por potencias cliente em diferentes 
                                regios. Alem disso, consegue acrescentar sua 
                                rede de contatos, advogados de tudo Brazil!
                            </p>
                            <a className="btn-home">Quer saber mais?</a>
                        </div>
                       
                    </Box>                   
                </Grid>
                <Grid item xs={6} md={6} >
                    <Box className="Slider__container-img">
                    <img src={Advogado} alt="Logo" />
                    </Box>
                  
                </Grid>              
            </Grid>
        </Box>
     
        <Box >
        <Container maxWidth="lg">                 
            <Box className="features__content-main"> 
                <Grid
                    container           
                    spacing={4}        
                    >
                        <Grid item xs={6} md={4}>
                            <Box className="features__content">
                                <i className='bx bx-edit'></i>
                                <h4>Faca o seu cadastro</h4>
                                <p>Criar o seu perfil profissional e sua especialidade
                                </p>
                            </Box>                           
                        </Grid>  
                        <Grid item xs={6} md={4}>
                            <Box className="features__content">
                                <i className='bx bx-user-voice'></i>                                
                                <h4>Rede de advogados</h4>
                                <p>Procure o profissional por cidade ou por area de especialacao</p>
                            </Box>
                        </Grid>   
                        <Grid item xs={6} md={4}>
                             <Box className="features__content">
                                <i className='bx bx-desktop' ></i>
                                <h4>Trabalho online e recomendacoes</h4>
                                <p>Filtro das opcoes segundo a sua experiencia profissional e areas de interesse
                                </p>
                            </Box>
                        </Grid>     
                </Grid>
            </Box>                   
          
            <Box className="mensagge__container"> 
               <Formmessage></Formmessage>
            </Box>
        </Container>
        </Box>
        <Box>
            <Footer></Footer>
        </Box>
        </>
    )
}

export default Advogados
