import React from 'react'
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
const Foro = ({formik}) => {
 
   
  
    return (<form onSubmit={formik.handleSubmit} id="formData">
        <Box className="contract__content-box">
            <div>
                                    <TextField name="foro" 
                                               className="contract__box-input"
                                               id="foro" 
                                               label="FORO" 
                                               variant="outlined"  
                                               multiline
                                               rows={1}
                                               value={formik.values.foro}
                                               onChange={formik.handleChange}
                                               error={formik.touched.foro && Boolean(formik.errors.foro)}
                                               helperText={formik.touched.foro && formik.errors.foro}/>
                                               <p className="helperExample bold">Indique a cidade e o Estado de preferência das partes, para o caso do contrato ser questionado na justiça.</p>
                                               <p className="helperExample">Ex: Cidade/ES</p> 
                                               </div>
                                </Box> <Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Terminar </button>
                                </Box> </form>
                                
    )
}

export default Foro
