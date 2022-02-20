import React from 'react'
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
const Foro = ({formik}) => {

  
    return (<form onSubmit={formik.handleSubmit}>
        <Box className="contract__content-box">
                                    <TextField name="foro" 
                                               className="contract__box-input"
                                               id="foro" 
                                               label="FORO" 
                                               variant="outlined"  
                                               multiline
                                               rows={6}
                                               value={formik.values.foro}
                                               onChange={formik.handleChange}
                                               error={formik.touched.foro && Boolean(formik.errors.foro)}
                                               helperText={!formik.touched.foro||!formik.errors.foro?"-":formik.touched.foro && formik.errors.foro}/>
                                </Box> <Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit" >Terminar </button>
                                </Box> </form>
                                
    )
}

export default Foro
