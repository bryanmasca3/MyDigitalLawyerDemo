import React from 'react'
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
const DatosBancarios = ({formik}) => {
   
    return (<form onSubmit={formik.handleSubmit}>
        <Box className="contract__content-box">
        <TextField name="banco" 
                   className="contract__box-input"
                   id="banco" 
                   label="BANCO" 
                   variant="outlined"  
                   value={formik.values.banco}
                   onChange={formik.handleChange}
                   error={formik.touched.banco && Boolean(formik.errors.banco)}
                   helperText={!formik.touched.banco||!formik.errors.banco?"Ex: -":formik.touched.banco && formik.errors.banco}/>
        <TextField name="agencia" 
                   className="contract__box-input"
                   id="agencia" 
                   label="AGÊNCIA" 
                   variant="outlined"  
                   value={formik.values.agencia}
                   onChange={formik.handleChange}
                   error={formik.touched.agencia && Boolean(formik.errors.agencia)}
                   helperText={!formik.touched.banco||!formik.errors.banco?"Ex: -":formik.touched.agencia && formik.errors.agencia}/>
        <TextField name="conta" 
                   className="contract__box-input"
                   id="conta" 
                   label="CONTA/CORRENTE" 
                   variant="outlined"  
                   value={formik.values.conta}
                   onChange={formik.handleChange}
                   error={formik.touched.conta && Boolean(formik.errors.conta)}
                   helperText={!formik.touched.banco||!formik.errors.banco?"Ex: -":formik.touched.conta && formik.errors.conta}/>
        <TextField name="beneficiario" 
                   className="contract__box-input"
                   id="beneficiario" 
                   label="BENEFICIÁRIO" 
                   variant="outlined"  
                   value={formik.values.beneficiario}
                   onChange={formik.handleChange}
                   error={formik.touched.beneficiario && Boolean(formik.errors.beneficiario)}
                   helperText={!formik.touched.banco||!formik.errors.banco?"Ex: -":formik.touched.beneficiario && formik.errors.beneficiario}/>
        <TextField name="cpf" 
                   className="contract__box-input"
                   id="cpf" 
                   label="CPF/CNPJ" 
                   variant="outlined"  
                   value={formik.values.cpf}
                   onChange={formik.handleChange}
                   error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                   helperText={!formik.touched.banco||!formik.errors.banco?"Ex: -":formik.touched.cpf && formik.errors.cpf}/>
    </Box> <Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Proxima etapa </button>
                                </Box></form>      
    )
}

export default DatosBancarios
