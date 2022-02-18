import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Formmessage = () => {
    return (
        <Grid
        container     
        spacing={4}                
        >
           <Grid item xs={6} md={6}>
               <Box className="mensagge__container-text">
                <h3>Nao achou o que<br></br> produca?</h3>
                    <p>As nossas solucoes foram pensadas
                        e desenvolvidas para empoderar voca! Nos
                        fornecemos documentos ajustaveis e ja 
                        revisados por profissionais especializados, alem 
                        de consultas com rapido retorno sobre os temas
                        que mais afligem o cotidiano dos empresarios.
                        Quer saber mais? Contrate-nos!
                    </p>
               </Box>
               
             </Grid>  
             <Grid item xs={6} md={6}>
                <Box className="mensagge__container-form">
                    <TextField id="outlined-basic" label="Nome Completo" variant="outlined" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Telefone" variant="outlined" />
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Sua mensagem"
                    multiline
                    Rows={4}       
                     className="mensagge__container-text-form"                                                   
                    />
                    <a className="btn-home send">Enviar</a>
                </Box>
                
             </Grid> 
    </Grid>
    )
}

export default Formmessage
