import React from 'react';
import  Slider  from './../components/Slider.js';
import Box from '@mui/material/Box';
import Header from "./../components/Header.js"
import Footer from "./../components/Footer.js"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import contact from './../assets/img2.png';
import planos from './../assets/img1.png';
import Formmessage from './../components/Formmessage.js'

const Home = () => {
    return (
        <>
         <Box>
            <Header></Header>
        </Box>
        <Box>
            <Slider></Slider>
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
                            <i className='bx bxs-keyboard'></i>
                                <h4>Faca o seu contrato em poucos minutos</h4>
                                <p>Basta informar os dados basicos
                                    no nosso formulario
                                </p>
                            </Box>                           
                        </Grid>  
                        <Grid item xs={6} md={4}>
                            <Box className="features__content">
                                <i className='bx bx-desktop' ></i>
                                <h4>DE forma 100% digital</h4>
                                <p>O documeno e gerado em instantes</p>
                            </Box>
                        </Grid>   
                        <Grid item xs={6} md={4}>
                             <Box className="features__content">
                                <i className='bx bxs-user' ></i>
                                <h4>Averiguado por especialistas</h4>
                                <p>Con a seguranca da validacao return por
                                    professionais especializados
                                </p>
                            </Box>
                        </Grid>     
                </Grid>
            </Box>          
            <Box className="contact__content"> 
                <Grid
                    container     
                    spacing={4}                
                    >
                        <Grid item xs={6} md={6}>
                            <Box className="contact__container-img">
                            <img src={contact} alt="Logo" />
                            </Box>
                         </Grid>  
                         <Grid item xs={6} md={6}>
                             <Box className="contact__container-text">
                             <h4 className="sub-heading">Documentos avulsos,<br></br>
                            pacotes e consultas <br></br>
                            juridicas com respostas <br></br>
                            em poucas horas!
                            </h4>
                            <p>
                                Quem empreende nao pode esperar!
                                Estamos aqui para ajudar o seu dia-adia
                                com entregas eficientes e seguras
                            </p>
                            <a className="btn-home">Contate-nos</a>
                             </Box>
                           
                         </Grid>  
                </Grid>
            </Box>
            <Box className="plano__container"> 
                <Grid
                    container     
                    spacing={4}                
                    >

                        <Grid item xs={6} md={12}>
                            <Box className="plano__container-txt">
                                <div className="plano__container-content">
                                    <h3 className="sub-heading">Confira os nossos Planos</h3>
                                    <p>Cada plano ajudara voce e seu negocio a ter amparo e apoio juridico em
                                        todos os momentos que precisa. Seleccione a apcao desejada para saber mais!
                                    </p>
                                </div>
                                <Box className="plano__container-img">
                                    <img src={planos} alt="Logo" />
                                </Box>
                                
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

export default Home
