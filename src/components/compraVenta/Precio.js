import React from 'react'
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
const Precio = ({formik}) => {
   
    return (<form onSubmit={formik.handleSubmit}>
        <Box className="contract__content-box">
        <TextField name="preco"
                   className="contract__box-input" 
                   id="preco" 
                   label="PREÇO" 
                   variant="outlined"  
                   value={formik.values.preco}
                   InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                   onChange={formik.handleChange}
                   error={formik.touched.preco && Boolean(formik.errors.preco)}
                   helperText={!formik.touched.preco||!formik.errors.preco?"Ex: 50,20.00":formik.touched.preco && formik.errors.preco}/> 
    </Box>  <Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Proxima etapa </button>
                                </Box></form>
    )
}

export default Precio
