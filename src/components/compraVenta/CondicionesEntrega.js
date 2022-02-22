import React from 'react'
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import ruLocale from 'date-fns/locale/ru';
const CondicionesEntrega = ({formik}) => {
    const today = new Date();
    
  
    return (<form onSubmit={formik.handleSubmit}>
        <Box className="contract__content-box">
            <div>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                                    <DatePicker                                    
                                        value={formik.values.dia}
                                        id="dia" 
                                        name="dia" 
                                        label="DIa"       
                                        minDate={today}                                  
                                        onChange={(val) => {                                        
                                            formik.setFieldValue('dia', val);
                                        }}
                                        renderInput={(params) => (<>
                                           
                                        <TextField {...params} /></>
                                        )}
                                />
                                  
                                  <p className="helperExample bold">Em que data o produto será entregue?</p>
                                  <p className="helperExample">mm/dd/yyyy</p> 
                                </LocalizationProvider>
                                </div>
                                <div>
                                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                    <TimePicker
                                        id="horario" 
                                        label="Horário"
                                        name="horario"                                                                                                              
                                        value={formik.values.horario}
                                        onChange={(val) => {                                        
                                            formik.setFieldValue('horario', val);
                                        }}                                    
                                        renderInput={(params) =><>
                                         
                                            <TextField {...params} /></>}
                                        />
                                          <p className="helperExample bold">Qual horário o produto será entregue?</p> 
                                          <p className="helperExample">hh:mm</p> 
                                </LocalizationProvider>
                                </div>
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
     <div>
                                    <TextField name="local" 
                                               className="contract__box-input" 
                                               id="local" 
                                               label="Local" 
                                               variant="outlined"  
                                               value={formik.values.local}
                                               onChange={formik.handleChange}
                                               error={formik.touched.local && Boolean(formik.errors.local)}
                                               helperText={formik.touched.local && formik.errors.local}/>
                                                <p className="helperExample bold">-Em que local o produto será entregue?<br></br>
                                                Endereço</p>
                                                </div>
                               </Box><Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Proxima etapa </button>
                                </Box></form>
    )
}

export default CondicionesEntrega
