import React from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
const Othermodel = () => {
    return (
        <Grid   container
      
        alignItems="center"
        justifyContent="center" className="othermodel__content">
            <Grid item xs={4} className=""> 
                <h2><i className='bx bxs-book-add'> </i>Outros modelos</h2>
                <div className="othermodel__search"><TextField id="outlined-basic" label="Procurar modelo de contratos" variant="outlined" className="input-search"/></div>
                <div className="othermodel__second-buttons">
                    <a className="othermodel__second-buttons-1">professionais</a>
                    <a className="othermodel__second-buttons-2">particulares</a>
                </div>
                <a className="othermodel__main-buttons">Todos modelos</a>
            </Grid>                
        </Grid>
    )
}

export default Othermodel
