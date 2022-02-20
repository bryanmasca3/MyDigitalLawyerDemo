import React from 'react'
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import ruLocale from 'date-fns/locale/ru';
const CondicionesEntrega = ({formik}) => {

 
  
    return (<form onSubmit={formik.handleSubmit}>
        <Box className="contract__content-box">
                                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                                    <DatePicker                                    
                                        value={formik.values.dia}
                                        id="dia" 
                                        name="dia" 
                                        label="DIA"                                         
                                        onChange={(val) => {                                        
                                            formik.setFieldValue('dia', val);
                                        }}
                                        renderInput={(params) => (
                                        <TextField {...params} helperText={params?.inputProps?.placeholder} />
                                        )}
                                />
                              
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                    <TimePicker
                                        id="horario" 
                                        label="HORÁRIO"
                                        name="horario"                                                                      
                                        value={formik.values.horario}
                                        onChange={(val) => {                                        
                                            formik.setFieldValue('horario', val);
                                        }}                                    
                                        renderInput={(params) => <TextField {...params} helperText={params?.inputProps?.placeholder}/>}
                                        />
                                </LocalizationProvider>
                                   {/* <TextField name="dia" 
                                               className="contract__box-input" 
                                               id="dia" 
                                               label="DIA" 
                                               variant="filled"  
                                               value={formik.values.dia}
                                               onChange={formik.handleChange}
                                               error={formik.touched.dia && Boolean(formik.errors.dia)}
                                               helperText={formik.touched.dia && formik.errors.dia}/>
                                    <TextField name="horario" 
                                               className="contract__box-input" 
                                               id="horario" 
                                               label="HORÁRIO" 
                                               variant="filled"  
                                               value={formik.values.horario}
                                               onChange={formik.handleChange}
                                               error={formik.touched.horario && Boolean(formik.errors.horario)}
    helperText={formik.touched.horario && formik.errors.horario}/>*/}
                                    <TextField name="local" 
                                               className="contract__box-input" 
                                               id="local" 
                                               label="LOCAL" 
                                               variant="outlined"  
                                               value={formik.values.local}
                                               onChange={formik.handleChange}
                                               error={formik.touched.local && Boolean(formik.errors.local)}
                                               helperText={!formik.touched.local||!formik.errors.local?"Ex: -":formik.touched.local && formik.errors.local}/>
                               </Box><Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Proxima etapa </button>
                                </Box></form>
    )
}

export default CondicionesEntrega
