import React from 'react'
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
const Precio = ({formik}) => {
   
    return (<form onSubmit={formik.handleSubmit}>
        <Box className="contract__content-box">
            <div> <TextField name="preco"
                   className="contract__box-input" 
                   id="preco" 
                   label="Preço" 
                   variant="outlined"  
                   value={formik.values.preco}                 
                   onChange={formik.handleChange}
                   error={formik.touched.preco && Boolean(formik.errors.preco)}
                   helperText={formik.touched.preco && formik.errors.preco}/> 
                   <p className="helperExample">Ex: XX,XX</p>  </div>
                      
    </Box>  <Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Proxima etapa </button>
                                </Box></form>
    )
}

export default Precio
