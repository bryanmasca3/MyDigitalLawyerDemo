import React,{useState} from 'react'
import Header from "./../components/Header.js"
import Footer from "./../components/Footer.js"

import Search from "./../components/Search.js"
import Othermodel from "./../components/Othermodel"

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './../App.css';
import Grid from '@mui/material/Grid';
import Preview from '../PDF/Preview.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contract = () => {
    const [dataState, setdataState] = useState({})
      const formik = useFormik({
        initialValues: {
            donome: '',
            docpnj: '',
            doendereco: '',
            doemail:"",
            dotelefone:"",

            tenome: '',
            terg: '',
            tecpf: '',   
            teendereco: '',
            teemail: '',
            tetelefone: '',  

            objeto: '',   

            dia: '',
            horario: '',
            local: '',  
            preco: '',  

            prestacoes: '',
            datapagamento: '',
            formapagamento: '', 

            banco: '',
            agencia: '',
            conta: '',
            beneficiario: '',
            cpf: '',     
            foro: ''
        },
        validationSchema: Yup.object({
            donome: Yup.string()
            .max(10, 'Must be 15 characters or less')
            .required('Required'),
            docpnj: Yup.string()
            .max(5, 'Must be 20 characters or less')
            .required('Required'),
            doendereco: Yup.string()
            .max(10, 'Must be 20 characters or less')
            .required('Required'),
            doemail: Yup.string()
            .max(10, 'Must be 20 characters or less')
            .required('Required'),
            dotelefone: Yup.string()
            .max(22, 'Must be 20 characters or less')
            .required('Required'),
        
         
            tenome: Yup.string()
            .max(10, 'Must be 15 characters or less')
            .required('Required'),
            terg: Yup.string()
            .max(5, 'Must be 20 characters or less')
            .required('Required'),
            tecpf: Yup.string()
            .max(10, 'Must be 20 characters or less')
            .required('Required'),
            teendereco: Yup.string()
            .max(10, 'Must be 20 characters or less')
            .required('Required'),
            teemail: Yup.string()
            .max(22, 'Must be 20 characters or less')
            .required('Required'),
            tetelefone: Yup.string()
            .max(10, 'Must be 15 characters or less')
            .required('Required'),

            objeto: Yup.string()
            .max(5, 'Must be 20 characters or less')
            .required('Required'),
            dia: Yup.string()
            .max(10, 'Must be 20 characters or less')
            .required('Required'),
            horario: Yup.string()
            .max(10, 'Must be 20 characters or less')
            .required('Required'),
            local: Yup.string()
            .max(22, 'Must be 20 characters or less')
            .required('Required'),
            preco: Yup.string()
            .max(22, 'Must be 20 characters or less')
            .required('Required'),
            
            prestacoes: Yup.string()
            .max(10, 'Must be 15 characters or less')
            .required('Required'),
            datapagamento: Yup.string()
            .max(5, 'Must be 20 characters or less')
            .required('Required'),
            formapagamento: Yup.string()
            .max(10, 'Must be 20 characters or less')
            .required('Required'),

            banco: Yup.string()
            .max(10, 'Must be 20 characters or less')
            .required('Required'),
            agencia: Yup.string()
            .max(22, 'Must be 20 characters or less')
            .required('Required'),
            conta: Yup.string()
            .max(10, 'Must be 15 characters or less')
            .required('Required'),
            beneficiario: Yup.string()
            .max(5, 'Must be 20 characters or less')
            .required('Required'),
            cpf: Yup.string()
            .max(10, 'Must be 20 characters or less')
            .required('Required'),

            foro: Yup.string()
            .max(10, 'Must be 20 characters or less')
            .required('Required')

        }),
        onSubmit: values => {           
            setdataState(values)       
        },
      });
    return (
        <>
        <Box>
            <Header></Header>
        </Box>
        <Box>
            <Container maxWidth="lg">
                <Box>
                    <Search></Search>
                </Box>
                <Box className="contract__container"> 
                <Grid
                    container           
                    spacing={4}        
                    >                
                        <Grid item xs={6} md={6}>
                           <Box className="contract__content-data">
                           <form onSubmit={formik.handleSubmit}>
                                <h2>CONTRATADO</h2>
                                <Box className="contract__content-box">
                                    <TextField  name="donome"
                                                className="contract__box-input"
                                                label="NOME" 
                                                id="donome"
                                                variant="filled"
                                                value={formik.values.donome}
                                                onChange={formik.handleChange}
                                                error={formik.touched.donome && Boolean(formik.errors.donome)}
                                                helperText={formik.touched.donome && formik.errors.donome}/>
                                    <TextField name="docpnj"
                                                className="contract__box-input"
                                                label="CNPJ"
                                                variant="filled"
                                                id="docpnj"
                                                value={formik.values.docpnj}
                                                onChange={formik.handleChange}
                                                error={formik.touched.docpnj && Boolean(formik.errors.docpnj)}
                                                helperText={formik.touched.docpnj && formik.errors.docpnj}/>
                                    <TextField name="doendereco"
                                               className="contract__box-input"
                                               label="ENDEREÇO" 
                                               variant="filled"  
                                               id="doendereco"
                                               value={formik.values.doendereco}
                                               onChange={formik.handleChange}
                                               error={formik.touched.doendereco && Boolean(formik.errors.doendereco)}
                                               helperText={formik.touched.doendereco && formik.errors.doendereco}/>
                                    <TextField name="doemail"
                                               className="contract__box-input"
                                               label="EMAIL" 
                                               variant="filled"  
                                               id="doemail"
                                               value={formik.values.doemail}
                                               onChange={formik.handleChange}
                                               error={formik.touched.doemail && Boolean(formik.errors.doemail)}
                                               helperText={formik.touched.doemail && formik.errors.doemail}/>
                                    <TextField name="dotelefone" 
                                               className="contract__box-input"
                                               label="TELEFONE"
                                               variant="filled"
                                               id="dotelefone"
                                               value={formik.values.dotelefone}
                                               onChange={formik.handleChange}
                                               error={formik.touched.dotelefone && Boolean(formik.errors.dotelefone)}
                                               helperText={formik.touched.dotelefone && formik.errors.dotelefone}/>
                                </Box>
                               
                                <h2>CONTRATANTE</h2>
                                <Box className="contract__content-box">
                                    <TextField name="tenome" 
                                               className="contract__box-input" 
                                               id="tenome" 
                                               label="NOME" 
                                               variant="filled"  
                                               value={formik.values.tenome}
                                               onChange={formik.handleChange}
                                               error={formik.touched.tenome && Boolean(formik.errors.tenome)}
                                               helperText={formik.touched.tenome && formik.errors.tenome}/>
                                    <TextField name="terg"
                                               className="contract__box-input"
                                               id="terg"
                                               label="RG"
                                               variant="filled"
                                               value={formik.values.terg}
                                               onChange={formik.handleChange}
                                               error={formik.touched.terg && Boolean(formik.errors.terg)}
                                               helperText={formik.touched.terg && formik.errors.terg}/>
                                    <TextField name="tecpf"
                                               className="contract__box-input"
                                               id="tecpf"
                                               label="CPF" 
                                               variant="filled"  
                                               value={formik.values.tecpf}
                                               onChange={formik.handleChange}
                                               error={formik.touched.tecpf && Boolean(formik.errors.tecpf)}
                                               helperText={formik.touched.tecpf && formik.errors.tecpf}/>
                                    <TextField name="teendereco" 
                                               className="contract__box-input" 
                                               id="teendereco" 
                                               label="ENDEREÇO" 
                                               variant="filled"  
                                               value={formik.values.teendereco}
                                               onChange={formik.handleChange}
                                               error={formik.touched.teendereco && Boolean(formik.errors.teendereco)}
                                               helperText={formik.touched.teendereco && formik.errors.teendereco}/>
                                    <TextField name="teemail" 
                                               className="contract__box-input" 
                                               id="teemail" 
                                               label="EMAIL" 
                                               variant="filled"  
                                               value={formik.values.teemail}
                                               onChange={formik.handleChange}
                                               error={formik.touched.teemail && Boolean(formik.errors.teemail)}
                                               helperText={formik.touched.teemail && formik.errors.teemail}/>
                                    <TextField name="tetelefone"
                                               className="contract__box-input" 
                                               id="tetelefone" 
                                               label="TELEFONE" 
                                               variant="filled"  
                                               value={formik.values.tetelefone}
                                               onChange={formik.handleChange}
                                               error={formik.touched.tetelefone && Boolean(formik.errors.tetelefone)}
                                               helperText={formik.touched.tetelefone && formik.errors.tetelefone}/>
                                </Box>
                                <h2>DO OBJETO DO CONTRATO</h2>
                                <Box className="contract__content-box">
                                    <TextField name="objeto"
                                               className="contract__box-input" 
                                               id="objeto" 
                                               label="OBJETO" 
                                               variant="filled"  
                                               value={formik.values.objeto}
                                               onChange={formik.handleChange}
                                               error={formik.touched.objeto && Boolean(formik.errors.objeto)}
                                               helperText={formik.touched.objeto && formik.errors.objeto}/>
                                </Box>
                                <h2>CONDIÇÕES DA ENTREGA</h2>
                                <Box className="contract__content-box">
                                    <TextField name="dia" 
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
                                               helperText={formik.touched.horario && formik.errors.horario}/>
                                    <TextField name="local" 
                                               className="contract__box-input" 
                                               id="local" 
                                               label="LOCAL" 
                                               variant="filled"  
                                               value={formik.values.local}
                                               onChange={formik.handleChange}
                                               error={formik.touched.local && Boolean(formik.errors.local)}
                                               helperText={formik.touched.local && formik.errors.local}/>
                                </Box>
                                <h2> DOPREÇO</h2>
                                <Box className="contract__content-box">
                                    <TextField name="preco"
                                               className="contract__box-input" 
                                               id="preco" 
                                               label="PREÇO" 
                                               variant="filled"  
                                               value={formik.values.preco}
                                               onChange={formik.handleChange}
                                               error={formik.touched.preco && Boolean(formik.errors.preco)}
                                               helperText={formik.touched.preco && formik.errors.preco}/> 
                                </Box>                                                             
                                <h2>FORMA DE PAGAMENTO</h2>
                                <Box className="contract__content-box">
                                    <TextField name="prestacoes" 
                                               className="contract__box-input"
                                               id="prestacoes" 
                                               label="Nº DE PRESTAÇÕES" 
                                               variant="filled"  
                                               value={formik.values.prestacoes}
                                               onChange={formik.handleChange}
                                               error={formik.touched.prestacoes && Boolean(formik.errors.prestacoes)}
                                               helperText={formik.touched.prestacoes && formik.errors.prestacoes}/>
                                    <TextField name="datapagamento" 
                                               className="contract__box-input"
                                               id="datapagamento" 
                                               label="DATA DE PAGAMENTO PRESTAÇÃO" 
                                               variant="filled"  
                                               value={formik.values.datapagamento}
                                               onChange={formik.handleChange}
                                               error={formik.touched.datapagamento && Boolean(formik.errors.datapagamento)}
                                               helperText={formik.touched.datapagamento && formik.errors.datapagamento}/>
                                    <TextField name="formapagamento" 
                                               className="contract__box-input"
                                               id="formapagamento" 
                                               label="FORMA DE PAGAMENTO" 
                                               variant="filled"  
                                               value={formik.values.formapagamento}
                                               onChange={formik.handleChange}
                                               error={formik.touched.formapagamento && Boolean(formik.errors.formapagamento)}
                                               helperText={formik.touched.formapagamento && formik.errors.formapagamento}/>
                                </Box>                               
                                <h2>DADOS BANCÁRIOS</h2>
                                <Box className="contract__content-box">
                                    <TextField name="banco" 
                                               className="contract__box-input"
                                               id="banco" 
                                               label="BANCO" 
                                               variant="filled"  
                                               value={formik.values.banco}
                                               onChange={formik.handleChange}
                                               error={formik.touched.banco && Boolean(formik.errors.banco)}
                                               helperText={formik.touched.banco && formik.errors.banco}/>
                                    <TextField name="agencia" 
                                               className="contract__box-input"
                                               id="agencia" 
                                               label="AGÊNCIA" 
                                               variant="filled"  
                                               value={formik.values.agencia}
                                               onChange={formik.handleChange}
                                               error={formik.touched.agencia && Boolean(formik.errors.agencia)}
                                               helperText={formik.touched.agencia && formik.errors.agencia}/>
                                    <TextField name="conta" 
                                               className="contract__box-input"
                                               id="conta" 
                                               label="CONTA/CORRENTE" 
                                               variant="filled"  
                                               value={formik.values.conta}
                                               onChange={formik.handleChange}
                                               error={formik.touched.conta && Boolean(formik.errors.conta)}
                                               helperText={formik.touched.conta && formik.errors.conta}/>
                                    <TextField name="beneficiario" 
                                               className="contract__box-input"
                                               id="beneficiario" 
                                               label="BENEFICIÁRIO" 
                                               variant="filled"  
                                               value={formik.values.beneficiario}
                                               onChange={formik.handleChange}
                                               error={formik.touched.beneficiario && Boolean(formik.errors.beneficiario)}
                                               helperText={formik.touched.beneficiario && formik.errors.beneficiario}/>
                                    <TextField name="cpf" 
                                               className="contract__box-input"
                                               id="cpf" 
                                               label="CPF/CNPJ" 
                                               variant="filled"  
                                               value={formik.values.cpf}
                                               onChange={formik.handleChange}
                                               error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                                               helperText={formik.touched.cpf && formik.errors.cpf}/>
                                </Box>       
                                <h2>FORO</h2>
                                <Box className="contract__content-box">
                                    <TextField name="foro" 
                                               className="contract__box-input"
                                               id="foro" 
                                               label="FORO" 
                                               variant="filled"  
                                               value={formik.values.foro}
                                               onChange={formik.handleChange}
                                               error={formik.touched.foro && Boolean(formik.errors.foro)}
                                               helperText={formik.touched.foro && formik.errors.foro}/>
                                </Box>  
                                <Box className="contract__content-box">
                                    <button className="othermodel__main-buttons send" type="submit">Proxima etapa </button>
                                </Box>  
                                <Box className="contract__content-box">
                                    <a className="contract__box-save">Salvar e continuar depois</a>
                               </Box>                                    
                                </form>
                           </Box>
                           
                        </Grid>                                                        
                        <Grid item xs={6} md={6}>
                            <Box className="contract-pdf">
                                <Preview  data={dataState}></Preview>
                            </Box>                            
                        </Grid>                                                        
              
                </Grid>
            </Box>
              
            </Container>
        </Box>
        <Box> 
                    <Othermodel></Othermodel>
                </Box>
        <Box>
            <Footer></Footer>
        </Box>
        </>
    )
}

export default Contract
