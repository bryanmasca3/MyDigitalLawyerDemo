import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const ObjectContrato = ({formik}) => {
    
    return (<form onSubmit={formik.handleSubmit}>
        <Box className="contract__content-box">
                                        <TextField name="objeto"
                                                className="contract__box-input" 
                                                id="objeto" 
                                                label="OBJETO" 
                                                variant="outlined"  
                                                multiline
                                                rows={6}
                                                value={formik.values.objeto}
                                                onChange={formik.handleChange}
                                                error={formik.touched.objeto && Boolean(formik.errors.objeto)}
                                                helperText={!formik.touched.objeto||!formik.errors.objeto?"-":formik.touched.objeto && formik.errors.objeto}/>
                                    </Box><Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Proxima etapa </button>
                                </Box> </form>
    )
}

export default ObjectContrato
