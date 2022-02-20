import React from 'react'
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
const Contratante = ({formik}) => {
  console.log("sdsdsdsd")
    return (<form onSubmit={formik.handleSubmit}>
        <Box className="contract__content-box">
                                        <TextField name="tenome" 
                                                className="contract__box-input" 
                                                id="tenome" 
                                                label="NOME" 
                                                variant="outlined"  
                                                value={formik.values.tenome}
                                                onChange={formik.handleChange}
                                                error={formik.touched.tenome && Boolean(formik.errors.tenome)}
                                                helperText={!formik.touched.tenome||!formik.errors.tenome?"Ex. Carlos Maximiano":formik.touched.tenome && formik.errors.tenome}/>
                                        <TextField name="terg"
                                                className="contract__box-input"
                                                id="terg"
                                                label="RG"
                                                variant="outlined"
                                                value={formik.values.terg}
                                                onChange={formik.handleChange}
                                                error={formik.touched.terg && Boolean(formik.errors.terg)}
                                                helperText={!formik.touched.terg||!formik.errors.terg?"Ex: 187876-MG":formik.touched.terg && formik.errors.terg}/>
                                        <TextField name="tecpf"
                                                className="contract__box-input"
                                                id="tecpf"
                                                label="CPF" 
                                                variant="outlined"  
                                                value={formik.values.tecpf}
                                                onChange={formik.handleChange}
                                                error={formik.touched.tecpf && Boolean(formik.errors.tecpf)}
                                                helperText={!formik.touched.tecpf||!formik.errors.tecpf?"Ex: XXX.XXX.XXX-XX":formik.touched.tecpf && formik.errors.tecpf}/>
                                        <TextField name="teendereco" 
                                                className="contract__box-input" 
                                                id="teendereco" 
                                                label="ENDEREÇO" 
                                                variant="outlined"  
                                                value={formik.values.teendereco}
                                                onChange={formik.handleChange}
                                                error={formik.touched.teendereco && Boolean(formik.errors.teendereco)}
                                                helperText={!formik.touched.teendereco||!formik.errors.teendereco?"Ex: Rua Marques de Paranagua 190 Ap.25 Bloco B":formik.touched.teendereco && formik.errors.teendereco}/>
                                        <TextField name="teemail" 
                                                className="contract__box-input" 
                                                id="teemail" 
                                                label="EMAIL" 
                                                variant="outlined"  
                                                value={formik.values.teemail}
                                                onChange={formik.handleChange}
                                                error={formik.touched.teemail && Boolean(formik.errors.teemail)}
                                                helperText={!formik.touched.teemail||!formik.errors.teemail?"Ex: nombre@formatos.com.br":formik.touched.teemail && formik.errors.teemail}/>
                                        <TextField name="tetelefone"
                                                className="contract__box-input" 
                                                id="tetelefone" 
                                                label="TELEFONE" 
                                                variant="outlined"  
                                                value={formik.values.tetelefone}
                                                onChange={formik.handleChange}
                                                error={formik.touched.tetelefone && Boolean(formik.errors.tetelefone)}
                                                helperText={!formik.touched.tetelefone||!formik.errors.tetelefone?"Ex: (11)3151-5741":formik.touched.tetelefone && formik.errors.tetelefone}/>
                                    </Box><Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Proxima etapa </button>
                                </Box> </form>
    )
}

export default Contratante
