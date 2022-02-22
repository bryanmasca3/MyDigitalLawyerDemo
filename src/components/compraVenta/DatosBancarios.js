import React from 'react'
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
const DatosBancarios = ({formik}) => {
   
    return (<form onSubmit={formik.handleSubmit}>
        <Box className="contract__content-box">
            <div>
        <TextField name="banco" 
                   className="contract__box-input"
                   id="banco" 
                   label="Banco" 
                   variant="outlined"  
                   value={formik.values.banco}
                   onChange={formik.handleChange}
                   error={formik.touched.banco && Boolean(formik.errors.banco)}
                   helperText={formik.touched.banco && formik.errors.banco}/>                      
                   <p className="helperExample">Ex: Banco BRADESCO S/A</p>  
                   </div>
                   <div>
        <TextField name="agencia" 
                   className="contract__box-input"
                   id="agencia" 
                   label="AgÊncia" 
                   variant="outlined"  
                   value={formik.values.agencia}
                   onChange={formik.handleChange}
                   error={formik.touched.agencia && Boolean(formik.errors.agencia)}
                   helperText={formik.touched.agencia && formik.errors.agencia}/>
                   <p className="helperExample">Ex: XXXX</p> 
                   </div>
                   <div>
        <TextField name="conta" 
                   className="contract__box-input"
                   id="conta" 
                   label="Conta/Corrente" 
                   variant="outlined"  
                   value={formik.values.conta}
                   onChange={formik.handleChange}
                   error={formik.touched.conta && Boolean(formik.errors.conta)}
                   helperText={formik.touched.conta && formik.errors.conta}/>
                <p className="helperExample">Ex: XXXX-XXXX-XX-XXXXXXXXX</p> </div>
                <div>
        <TextField name="beneficiario" 
                   className="contract__box-input"
                   id="beneficiario" 
                   label="BeneficiÁrio" 
                   variant="outlined"  
                   value={formik.values.beneficiario}
                   onChange={formik.handleChange}
                   error={formik.touched.beneficiario && Boolean(formik.errors.beneficiario)}
                   helperText={formik.touched.beneficiario && formik.errors.beneficiario}/>
                   <p className="helperExample">Ex: Nome Sobrenome</p> 
                   </div>
                   <div>

                   
        <TextField name="cpf" 
                   className="contract__box-input"
                   id="cpf" 
                   label="CPF/CNPJ" 
                   variant="outlined"  
                   value={formik.values.cpf}
                   onChange={formik.handleChange}
                   error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                   helperText={formik.touched.cpf && formik.errors.cpf}/>
                    <p className="helperExample">Ex: XXX.XXX.XXX-XX</p>
                    </div>
    </Box> <Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Proxima etapa </button>
                                </Box></form>      
    )
}

export default DatosBancarios
