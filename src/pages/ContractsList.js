import React from 'react'
import Header from "./../components/Header.js"
import Footer from "./../components/Footer.js"
import Search from "./../components/Search.js"
import Othermodel from "./../components/Othermodel"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Lastest from "./../components/Lastest.js"
import Grid from '@mui/material/Grid';
import Popular from "./../components/Popular.js"
const PopularArray=[
    {"title":"Contrato de compra e venda",
    "thumb":"img/1.png",
    "ultimaRevisao":"12/03/2021",
    "tamanho":"1 pagina",
    "avaliacao":"4.9",
    "votos":"230"},

    {"title":"Contrato de prestação de serviços",
    "thumb":"img/1.png",
    "ultimaRevisao":"12/03/2021",
    "tamanho":"1 pagina",
    "avaliacao":"4.9",
    "votos":"230"},

    {"title":"Contrato de parceria",
    "thumb":"img/1.png",
    "ultimaRevisao":"12/03/2021",
    "tamanho":"1 pagina",
    "avaliacao":"4.9",
    "votos":"230"},

    {"title":"Contrato de trabalho",
    "thumb":"img/1.png",
    "ultimaRevisao":"12/03/2021",
    "tamanho":"1 pagina",
    "avaliacao":"4.9",
    "votos":"230"}
];
const LastestArray=[
    {"title":"Revogacao de Procuracao",
    "thumb":"img/1.png",
    "ultimaRevisao":"12/03/2021",
    "tamanho":"1 pagina",
    "avaliacao":"4.9",
    "votos":"230"},

    {"title":"Contrato de Empreitada",
    "thumb":"img/1.png",
    "ultimaRevisao":"12/03/2021",
    "tamanho":"1 pagina",
    "avaliacao":"4.9",
    "votos":"230"},

    {"title":"Contrato Social",
    "thumb":"img/1.png",
    "ultimaRevisao":"12/03/2021",
    "tamanho":"1 pagina",
    "avaliacao":"4.9",
    "votos":"230"},

    {"title":"Procuracao Particular",
    "thumb":"img/1.png",
    "ultimaRevisao":"12/03/2021",
    "tamanho":"1 pagina",
    "avaliacao":"4.9",
    "votos":"230"}
];
const ContractsList = () => {
    return (
        <>
        <Box>
            <Header></Header>
        </Box>
        <Box >
        <Container maxWidth="lg" className="content-contract">
            <Box>
                <Search></Search>
            </Box>
            <h1 className="heading">Disponíveis</h1>
            <Box> 
                <Grid
                    container           
                    spacing={4}        
                    >
                    {PopularArray.map((value,index)=>
                        <Grid item xs={6} md={3}>
                            <Popular popular={value} key={index}></Popular>
                        </Grid>                                                        
                    )}
                </Grid>
            </Box>

            <h1 className="heading">Ulitmos Acessados</h1>
            <Box> 
                <Grid
                    container     
                    spacing={4}                
                    >
                    {LastestArray.map((value,index)=>
                        <Grid item xs={6} md={3}>
                            <Lastest lastest={value} key={index}></Lastest>
                        </Grid>                                                        
                    )}
                </Grid>
            </Box>
            
        </Container>
        </Box>
        <Box> 
                <Othermodel></Othermodel>
            </Box>
        <Box>
            <Footer></Footer>
        </Box>
        </>
    )
  
}

export default ContractsList
