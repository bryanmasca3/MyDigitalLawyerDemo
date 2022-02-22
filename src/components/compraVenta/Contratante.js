import React from 'react'
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
const Contratante = ({formik}) => {
  console.log("sdsdsdsd")
    return (<form onSubmit={formik.handleSubmit}>
        <Box className="contract__content-box">

                <div>
                <TextField name="tenome" 
                                                className="contract__box-input" 
                                                id="tenome" 
                                                label="Nome" 
                                                variant="outlined"  
                                                value={formik.values.tenome}
                                                onChange={formik.handleChange}
                                                error={formik.touched.tenome && Boolean(formik.errors.tenome)}
                                                helperText={formik.touched.tenome && formik.errors.tenome}/>
                                                 <p className="helperExample bold">Para quem o produto será entregue?</p>  
                                                 <p className="helperExample">Ex: Nome Sobrenome</p>  
                                                 
                </div>
                <div>                    
                                        <TextField name="terg"
                                                className="contract__box-input"
                                                id="terg"
                                                label="RG"
                                                variant="outlined"
                                                value={formik.values.terg}
                                                onChange={formik.handleChange}
                                                error={formik.touched.terg && Boolean(formik.errors.terg)}
                                                helperText={formik.touched.terg && formik.errors.terg}/>
                                                 <p className="helperExample">Ex: XXXXXX-MG</p>   </div>
                                 <div>     <TextField name="tecpf"
                                                className="contract__box-input"
                                                id="tecpf"
                                                label="CPF" 
                                                variant="outlined"  
                                                value={formik.values.tecpf}
                                                onChange={formik.handleChange}
                                                error={formik.touched.tecpf && Boolean(formik.errors.tecpf)}
                                                helperText={formik.touched.tecpf && formik.errors.tecpf}/>
                                                 <p className="helperExample">Ex: XXX.XXX.XXX-XX</p>  </div>
                                                 <div>  <TextField name="teendereco" 
                                                className="contract__box-input" 
                                                id="teendereco" 
                                                label="Endereço" 
                                                variant="outlined"  
                                                value={formik.values.teendereco}
                                                onChange={formik.handleChange}
                                                error={formik.touched.teendereco && Boolean(formik.errors.teendereco)}
                                                helperText={formik.touched.teendereco && formik.errors.teendereco}/>
                                                <p className="helperExample">Ex: Rua Marques de Paranagua 190 Ap.25 Bloco B</p>  </div>
                                                <div><TextField name="teemail" 
                                                className="contract__box-input" 
                                                id="teemail" 
                                                label="Email" 
                                                variant="outlined"  
                                                value={formik.values.teemail}
                                                onChange={formik.handleChange}
                                                error={formik.touched.teemail && Boolean(formik.errors.teemail)}
                                                helperText={formik.touched.teemail && formik.errors.teemail}
                                                />
                                                {/*helperText={!formik.touched.teemail||!formik.errors.teemail?"Ex: nombre@formatos.com.br":formik.touched.teemail && formik.errors.teemail}*/}
                                                <p className="helperExample">Ex: exemplo@exemplo.com</p></div>
                                                <div> <TextField name="tetelefone"
                                                className="contract__box-input" 
                                                id="tetelefone" 
                                                label="Telefone" 
                                                variant="outlined"  
                                                value={formik.values.tetelefone}
                                                onChange={formik.handleChange}
                                                error={formik.touched.tetelefone && Boolean(formik.errors.tetelefone)}
                                                helperText={formik.touched.tetelefone && formik.errors.tetelefone}/>
                                                <p className="helperExample">Ex: (11)4184-8994</p></div>
                                    </Box><Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Proxima etapa </button>
                                </Box> </form>
    )
}

export default Contratante
