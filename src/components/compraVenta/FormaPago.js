import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
const FormaPago = ({formik}) => {
    const today = new Date();
  
    return (<form onSubmit={formik.handleSubmit}>
        <Box className="contract__content-box">
            <div>
        <TextField name="prestacoes" 
                   className="contract__box-input"
                   id="prestacoes" 
                   label="Nº de Prestaçôes" 
                   variant="outlined"  
                   value={formik.values.prestacoes}
                   onChange={formik.handleChange}
                   error={formik.touched.prestacoes && Boolean(formik.errors.prestacoes)}
                   helperText={formik.touched.prestacoes && formik.errors.prestacoes}/>                      
                    <p className="helperExample">Ex: 2</p> 
                    </div>
                    <div>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <DatePicker                                    
                                        value={formik.values.datapagamento}
                                        id="datapagamento" 
                                        name="datapagamento"                                         
                                        label="Data de Pagamento Prestaçâo"       
                                        minDate={today}   
                                        inputFormat="dd-MM-yyyy"                                   
                                        onChange={(val) => {                                        
                                            formik.setFieldValue('datapagamento', val);
                                        }}
                                        renderInput={(params) => (<>
                                           
                                        <TextField {...params} /></>
                                        )}
                                />
                                                                    
                                  <p className="helperExample">Ex: dd/mm/yyyy</p> 
                                  </LocalizationProvider>
                                  </div>
                                  <div >  
                                  <FormControl fullWidth>                         
    <InputLabel id="demo-simple-select-label">Forma de Pagamento</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="formapagamento"
          value={formik.values.formapagamento}
          name="formapagamento" 
          label="Forma de Pagamento"
          onChange={formik.handleChange}
          error={formik.touched.formapagamento && Boolean(formik.errors.formapagamento)}          
        >
          <MenuItem value={"Transferência"}>Transferência</MenuItem>
          <MenuItem value={"Pagamento em espécie"}>Pagamento em espécie</MenuItem>
          <MenuItem value={"Cartão de crédito"}>Cartão de crédito</MenuItem>
          <MenuItem value={"Cartão de débito"}>Cartão de débito</MenuItem>
          <MenuItem value={"Em espécie"}>Em espécie</MenuItem>
          <MenuItem value={"Pix"}>Pix</MenuItem>
          <MenuItem value={"Boleto bancário"}>Boleto bancário</MenuItem>
        </Select>
        {formik.touched.formapagamento && Boolean(formik.errors.formapagamento) ? (
     <p className='helperExample' style={{color:"#d32f2f"}}>{formik.errors.formapagamento}</p>
   ) : null}</FormControl>
                     </div>
    </Box><Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Proxima etapa </button>
                                </Box></form>               
    )
}

export default FormaPago
