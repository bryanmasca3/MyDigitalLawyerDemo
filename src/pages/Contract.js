import React,{useState} from 'react'
import Header from "./../components/Header.js"
import Footer from "./../components/Footer.js"

import Search from "./../components/Search.js"
import Othermodel from "./../components/Othermodel"

import Container from '@mui/material/Container';


import './../App.css';

import Preview from '../PDF/Preview.js';

import Grid from '@mui/material/Grid';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CondicionesEntrega from '../components/compraVenta/CondicionesEntrega.js'
import Contratado from '../components/compraVenta/Contratado.js'
import Contratante from '../components/compraVenta/Contratante.js'
import DatosBancarios from '../components/compraVenta/DatosBancarios.js'
import FormaPago from '../components/compraVenta/FormaPago.js'
import Foro from '../components/compraVenta/Foro.js'
import ObjectContrato from '../components/compraVenta/ObjectContrato.js'
import Precio from '../components/compraVenta/Precio.js'

const Contract = () => {


    const [dataContratado, setdataContratado] = useState(null)
    const [dataContratante, setdataContratante] = useState(null)    
    const [dataCondicionEntrega, setdataCondicionEntrega] = useState(null)
    const [dataObjecto, setdataObjecto] = useState(null)
    const [dataPrecio, setdataPrecio] = useState(null)
    const [dataFormaPago, setdataFormaPago] = useState(null)
    const [dataDatosBanco, setdataDatosBanco] = useState(null)
    const [dataForo, setdataForo] = useState(null)

    const [value, setValue] = useState('1');

    const [buttonactivate, setbuttonactivate] = useState(false);

    const handleChangeTab = (event, newValue) => {
      setValue(newValue);
    };     

    const formikForo= useFormik({
        initialValues: {                        
            foro: ''
        },
        validationSchema: Yup.object({                                  
            foro: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required')                                
        }),
        onSubmit: values => {           
            setdataForo(values)
            setbuttonactivate(true)       
        }
    }) 
    const formikDatosBanco = useFormik({
        initialValues: {                        
            banco: '',
            agencia: '',
            conta: '',
            beneficiario: '',
            cpf: '',
        },
        validationSchema: Yup.object({
                    
            banco: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            agencia: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            conta: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            beneficiario: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            cpf: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            
            
        }),
        onSubmit: values => {           
            setdataDatosBanco(values)
            setValue("8")         
        }
    }) 
    const formikFormaPago = useFormik({
        initialValues: {
                
            prestacoes: '',
            datapagamento: '',
            formapagamento: '',

        },
        validationSchema: Yup.object({          
            prestacoes: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            datapagamento: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            formapagamento: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),                        
        }),
        onSubmit: values => {           
            setdataFormaPago(values)
            setValue("7")       
        }
    }) 

    const formikPrecio = useFormik({
        initialValues: {
            preco: '',  
        },
        validationSchema: Yup.object({          
            preco: Yup.string()
            .matches(/^[0-9]+\,[0-9]+\.[0-9]{2}$/, "Ex: 50,20.00")
            .required('Required'),  
            
        }),
        onSubmit: values => {           
            setdataPrecio(values)
            setValue("6")           
        }
    }) 
    const formikCondicionEntrega = useFormik({
        initialValues: {
            dia: new Date(),
            horario: new Date(),
            local: '', 
        },
        validationSchema: Yup.object({
          
            dia: Yup.date()
            .default(() => new Date())                     
            .required('Required'),
            horario: Yup.string()
            .default(() => new Date())
            .required('Required'),                   
            local: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Required'),  
            
        }),
        onSubmit: values => {           
            setdataCondicionEntrega(values)
            setValue("5")         
        }
    }) 
    const formikObjectoContrato = useFormik({
        initialValues: {
            objeto: '',   
        },
        validationSchema: Yup.object({
            objeto: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),  
        }),
        onSubmit: values => {           
            setdataObjecto(values)
            setValue("4")        
        }
    }) 
    const formikContratante = useFormik({
        initialValues: {
            tenome: '',
            terg: '',
            tecpf: '',   
            teendereco: '',
            teemail: '',
            tetelefone: '',

        },
        validationSchema: Yup.object({
            tenome: Yup.string()
            .matches(/^([a-z]+\s[a-z]+)+$/, "Ex: Carlos Maximiano")
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
            terg: Yup.string()
            .matches(/^[0-9]{6}\-[a-z]{2}$/, "Ex: 187876-MG")
            .required('Required'),
            tecpf: Yup.string()            
            .matches(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/, "Ex: XXX.XXX.XXX-XX")
            .required('Required'),
            teendereco: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
            teemail: Yup.string()
            .email('Ex: nombre@gmail.com')
            .required('Required'),
            tetelefone: Yup.string()
            .matches(/^\([0-9]{2}\)[0-9]{4}\-[0-9]{4}$/, "Ex: (11)4184-8994")
            .required('Required')
        }),
        onSubmit: values => {           
            setdataContratante(values)
            setValue("3")      
        }
    }) 
    const formikContratado = useFormik({
        initialValues: {
            donome: '',
            docpnj: '',
            doendereco: '',
            doemail:"",
            dotelefone:"",
        },
        validationSchema: Yup.object({
            donome: Yup.string()
            .matches(/^([a-z]+\s[a-z]+)+$/, "Ex: Bruna Curci")
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
            docpnj: Yup.string()
            .matches(/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/(0001)\-[0-9]{2}$/, "Ex: XX.XXX.XXX/0001-XX")
            .required('Required'),
            doendereco: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
            doemail: Yup.string()
            .email('Ex: nombre@gmail.com')
            .required('Required'),
            dotelefone: Yup.string()
            .matches(/^\([0-9]{2}\)[0-9]{4}\-[0-9]{4}$/, "Ex: (11)4184-8994")
            .required('Required')
        }),
        onSubmit: values => {           
            setdataContratado(values)
            setValue("2")       
        },
        enableReinitialize:true
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
                           <Box className="contract__content-data"  style={{border:"1px solid #e8e8e8"}}>
                          
                             <TabContext value={value}
                               
                              >
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChangeTab} aria-label="lab API tabs example" variant="scrollable"
                               scrollButtons>
                                    <Tab label="CONTRATADO" value="1" />
                                    <Tab label="CONTRATANTE" value="2" disabled={dataContratado?false:true}/>
                                    <Tab label="DO OBJETO DO CONTRATO" value="3"  disabled={dataContratante?false:true}/>
                                    <Tab label="CONDIÇÕES DA ENTREGA" value="4"  disabled={dataObjecto?false:true}/>
                                    <Tab label="DO PREÇO" value="5"  disabled={dataCondicionEntrega?false:true}/>
                                    <Tab label="DA FORMA DE PAGAMENTO" value="6"  disabled={dataPrecio?false:true}/>
                                    <Tab label="DADOS BANCÁRIOS" value="7"  disabled={dataFormaPago?false:true}/>
                                    <Tab label="FORO" value="8"  disabled={dataDatosBanco?false:true}/>
                                    </TabList>
                                </Box>
                                <TabPanel value="1"><Contratado formik={formikContratado}></Contratado></TabPanel>
                                <TabPanel value="2"><Contratante formik={formikContratante}></Contratante></TabPanel>
                                <TabPanel value="3"><ObjectContrato formik={formikObjectoContrato}></ObjectContrato></TabPanel>
                                <TabPanel value="4"><CondicionesEntrega formik={formikCondicionEntrega}></CondicionesEntrega></TabPanel>
                                <TabPanel value="5"><Precio formik={formikPrecio}></Precio></TabPanel>
                                <TabPanel value="6"><FormaPago formik={formikFormaPago}></FormaPago></TabPanel>
                                <TabPanel value="7"><DatosBancarios formik={formikDatosBanco}></DatosBancarios></TabPanel>
                                <TabPanel value="8"><Foro formik={formikForo} ></Foro></TabPanel>
                             </TabContext>                            
                           </Box>
                         

  
                        </Grid>                                                        
                        <Grid item xs={6} md={6}>
                            <Box className="contract-pdf">
                                {<Preview   dataContratado={dataContratado}
                                            dataContratante={dataContratante}
                                            dataObjecto={dataObjecto}
                                            dataCondicionEntrega={dataCondicionEntrega}
                                            dataPrecio={dataPrecio}
                                            dataFormaPago={dataFormaPago}
                                            dataDatosBanco={dataDatosBanco}
                                            dataForo={dataForo}
                                            activate={buttonactivate}></Preview>}
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
