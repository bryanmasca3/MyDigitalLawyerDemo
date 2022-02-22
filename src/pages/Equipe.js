import React from 'react'
import Box from '@mui/material/Box';
import Header from "./../components/Header.js"
import Footer from "./../components/Footer.js"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import equipe1 from './../assets/equipe1.png';
import equipe2 from './../assets/equipe2.png';
import equipe3 from './../assets/equipe3.png';
import equipe4 from './../assets/equipe4.png';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
const Equipe = () => {
    return (
        <>
            <Box>
                <Header></Header>
            </Box>
            <Box >
                <Container maxWidth="lg">                 
                    <Box className="equipe__content-main"> 
                    <h1 className="heading">EQUIPE</h1>
                    <Grid
                        container           
                        spacing={2}        
                        >
                            <Grid item xs={6} md={3}>
                               
                                <Card className="equipe__content-card">
                                    <CardContent className="equipe__container-card">
                                     <Box className="equipe__content"> 
                                        <img src={equipe4} alt="Logo" />
                                        <div>
                                            <h4>Bruna Curci Felix</h4>
                                            <nav>
                                                <ul> 
                                                    <li><p>Advogado<br></br>
                                                    Faculdade de Tecnologia e Ciências</p></li>
                                                    <li><p>Especialização:<br></br>
                                                    Direito Tributário e Direito Processual Civil</p></li>
                                                    <li><p>Experiência em liderança de equipes e condução de demandas estratégicas</p></li>
                                                </ul>
                                              
                                                
                                                
                                            </nav>
                                            <p className="email-span">Correo electronico:</p>
                                            <p className="email">brunacurci@gmail.com</p>
                                        </div>
                                    </Box>   
                                    </CardContent>
                                    <CardActions>
                                    <a>ver más</a>
                                    </CardActions>
                                    </Card>                                                      
                            </Grid>  
                            <Grid item xs={6} md={3}>
                                <Card className="equipe__content-card">
                                    <CardContent>
                                     <Box className="equipe__content"> 
                                    <img src={equipe3} alt="Logo" />
                                    <div>
                                        <h4>Carlos Maximiano</h4>
                                        <nav>
                                            <ul>
                                                <li><p>Comunicação Social<br></br>
                                                Universidade Federal de São Joao del Rei - IF JS</p></li>
                                                <li> <p>Especialização:<br></br>
                                                Produtor de Marketing e Conteúdo</p></li>
                                                <li> <p> Experiência como Analista de Conteúdo
Coordenador de Comunicação e Cultura</p></li>
                                            </ul>
                                           
                                           
                                           
                                        </nav>
                                        <p className="email-span">Correo electronico:</p>
                                        <p className="email">carlosmaximianojr@gmail.com</p>
                                    </div>
                                    </Box>   
                                    </CardContent>
                                    <CardActions>
                                    <a>ver más</a>
                                    </CardActions>
                                    </Card>  
                            </Grid>   
                            <Grid item xs={6} md={3}>
                            <Card className="equipe__content-card">
                                    <CardContent>
                                     <Box className="equipe__content"> 
                                    <img src={equipe2} alt="Logo" />
                                    <div>
                                        <h4>Diana Mendes</h4>
                                    <nav>
                                        <ul>
                                            <li><p>Psicologia<br></br>

                                            Universidade Presbiteriana Mackenzie</p></li>
                                            <li><p>Especialização:  <br></br>
                                            Recrutamento e Seleção
                                        </p></li>
                                            <li>   <p>Experiência como Coordenador de Projetos e Talento Acquisition </p></li>
                                        </ul>
                                        
                                        
                                     
                                    </nav>
                                    <p className="email-span">Correo electronico:</p>
                                        <p className="email">dianamendes@gmail.com</p>
                                    </div>
                                    </Box>   
                                    </CardContent>
                                    <CardActions>
                                    <a>ver más</a>
                                    </CardActions>
                                    </Card>
                            </Grid>  
                            <Grid item xs={6} md={3}>
                            <Card className="equipe__content-card">
                                    <CardContent>
                                     <Box className="equipe__content"> 
                                    <img src={equipe1} alt="Logo" />
                                    <div>
                                        <h4>Nathalie Núñez</h4>
                                            <nav>
                                                <ul>
                                                    <li> <p>Ciência da Computação
<br></br>
Universidade Católica de São Paulo</p></li>
                                                <li> <p>Especialização:<br></br>
Profissional de Gerenciamento de Projetos, Scrum Master
                                             </p></li>
                                                <li><p>Experiência como Team Leader e Engenharia de Software</p></li>
                                                </ul>
                                               
                                              
                                                
                                            </nav>
                                        <p className="email-span">Correo electronico:</p>
                                        <p className="email">milagros.nunez@ucsp.edu.pe</p>
                                    </div>
                                   </Box>   
                                    </CardContent>
                                    <CardActions>
                                    <a>ver más</a>
                                    </CardActions>
                                    </Card>
                            </Grid>  
                        </Grid>     
                    </Box>
                </Container> 
            </Box>  
            <Box>
                <Footer></Footer>
            </Box>              
       </>
    )
}

export default Equipe
