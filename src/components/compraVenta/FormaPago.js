import React from 'react'
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
const FormaPago = ({formik}) => {
  
    return (<form onSubmit={formik.handleSubmit}>
        <Box className="contract__content-box">
        <TextField name="prestacoes" 
                   className="contract__box-input"
                   id="prestacoes" 
                   label="Nº DE PRESTAÇÕES" 
                   variant="outlined"  
                   value={formik.values.prestacoes}
                   onChange={formik.handleChange}
                   error={formik.touched.prestacoes && Boolean(formik.errors.prestacoes)}
                   helperText={!formik.touched.prestacoes||formik.errors.prestacoes?"Ex: -":formik.touched.prestacoes && formik.errors.prestacoes}/>
        <TextField name="datapagamento" 
                   className="contract__box-input"
                   id="datapagamento" 
                   label="DATA DE PAGAMENTO PRESTAÇÃO" 
                   variant="outlined"  
                   value={formik.values.datapagamento}
                   onChange={formik.handleChange}
                   error={formik.touched.datapagamento && Boolean(formik.errors.datapagamento)}
                   helperText={!formik.touched.prestacoes||formik.errors.prestacoes?"Ex: -":formik.touched.datapagamento && formik.errors.datapagamento}/>
        <TextField name="formapagamento" 
                   className="contract__box-input"
                   id="formapagamento" 
                   label="FORMA DE PAGAMENTO" 
                   variant="outlined"  
                   value={formik.values.formapagamento}
                   onChange={formik.handleChange}
                   error={formik.touched.formapagamento && Boolean(formik.errors.formapagamento)}
                   helperText={!formik.touched.prestacoes||formik.errors.prestacoes?"Ex: -":formik.touched.formapagamento && formik.errors.formapagamento}/>
    </Box><Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Proxima etapa </button>
                                </Box></form>               
    )
}

export default FormaPago
