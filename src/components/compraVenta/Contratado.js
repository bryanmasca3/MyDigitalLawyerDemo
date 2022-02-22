import React from 'react'

import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
const Contratado = ({formik}) => {
  
    return (<form onSubmit={formik.handleSubmit}>
        <Box className="contract__content-box">
                <div>
                      
                <TextField  name="donome"
                                                    className="contract__box-input"
                                                    label="Nome" 
                                                    id="donome"
                                                    variant="outlined"                                                 
                                                    value={formik.values.donome}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.donome && Boolean(formik.errors.donome)}
                                                    helperText={formik.touched.donome && formik.errors.donome}/>
                                                    <p className="helperExample">Ex: Nome Sobrenome</p>          
                </div> 
                <div>
                        <TextField name="docpnj"
                                                    className="contract__box-input"
                                                    label="CNPJ"
                                                    variant="outlined"
                                                    id="docpnj"
                                                    value={formik.values.docpnj}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.docpnj && Boolean(formik.errors.docpnj)}
                                                    helperText={formik.touched.docpnj && formik.errors.docpnj}/>
                                                    <p className="helperExample">Ex: XX.XXX.XXX/0001-XX</p>
                </div>
                <div>                      
                                        <TextField name="doendereco"
                                                className="contract__box-input"
                                                label="Endereço" 
                                                variant="outlined"  
                                                id="doendereco"
                                                value={formik.values.doendereco}
                                                onChange={formik.handleChange}
                                                error={formik.touched.doendereco && Boolean(formik.errors.doendereco)}
                                                helperText={formik.touched.doendereco && formik.errors.doendereco}/>
                                                 <p className="helperExample">Ex: Rua Alvarenga, 805.Butantã – São Paulo</p>
                                                 </div>
                                                 <div> 
                                        <TextField name="doemail"
                                                className="contract__box-input"
                                                label="E-mail" 
                                                variant="outlined"  
                                                id="doemail"
                                                value={formik.values.doemail}
                                                onChange={formik.handleChange}
                                                error={formik.touched.doemail && Boolean(formik.errors.doemail)}
                                                helperText={formik.touched.doemail && formik.errors.doemail}/>
                                                <p className="helperExample">Ex: exemplo@exemplo.com</p>
                                                </div>
                                        <div> 
                                        <TextField name="dotelefone" 
                                                className="contract__box-input"
                                                label="Telefone"
                                                variant="outlined"
                                                id="dotelefone"
                                                value={formik.values.dotelefone}
                                                onChange={formik.handleChange}
                                                error={formik.touched.dotelefone && Boolean(formik.errors.dotelefone)}
                                                helperText={formik.touched.dotelefone && formik.errors.dotelefone}/>
                                                <p className="helperExample">Ex: (11)4184-8994</p>
                                        </div>
                                    </Box>
                                    <Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Proxima etapa </button>
                                </Box>  </form>
    )
}

export default Contratado
