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
import Swal from "sweetalert2";
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
    const [tabformpago, settabformpago] = useState(true)
    const [buttonactivate, setbuttonactivate] = useState(false);

    const handleChangeTab = (event, newValue) => {
      setValue(newValue);
    };     

    const formikForo= useFormik({
        initialValues: {                        
            foro: ''
        },
        validationSchema: Yup.object({//Indique a cidade e o Estado de prefer??ncia das partes, para o caso do contrato ser questionado na justi??a.            
                                        //Ex: Cidade/ES
            foro: Yup.string()
            .max(20, 'N??o deve ter um m??ximo de 20 caracteres')
            .required('Required')                                
        }),
        onSubmit: values => {                   
            Swal.fire({
                title: "Deseja concluir a edi????o do contrato?",
                confirmButtonText: "Sim",
                cancelButtonText: "N??o",
                showCancelButton: true,
                }).then((result) => {
                if (result.isConfirmed) {
                    setbuttonactivate(true) 
                    setdataForo(values)                
                }else{
                    //console.log("invalid")
                }
                });
        
                
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
            //BANCO BRADESCO S/A 
            //AG??NCIA: 1708
            //CONTA CORRENTE: 3197-6
            //BENEFICI??RIA: BRUNA CURCI FELIX MARTINS E FREITAS (CPF: 030.407.865-47)
            banco: Yup.string()
            .max(80, 'N??o deve ter um m??ximo de 80 caracteres')
            .required('Required'),
            agencia: Yup.string()
            .matches(/^[0-9]+$/, "Formato inv??lido")
            .required('Required'),
            conta: Yup.string()
            .matches(/^[0-9-\s]+$/, "Formato inv??lido")
            .max(25, 'N??o deve ter um m??ximo de 25 caracteres')
            .required('Required'),
            beneficiario: Yup.string()
            .matches(/^([a-zA-Z\u00f1\u00d1]+\s[a-zA-Z\u00f1\u00d1]+)+$/, "Formato inv??lido")
            .required('Required'),
            cpf: Yup.string()
            .matches(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/, "Formato inv??lido")
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
            datapagamento:  new Date(),
            formapagamento: '',
        },
        validationSchema: Yup.object({          
            prestacoes: Yup.string()
            .matches(/^[0-9]+$/, "Formato inv??lido")   //Ex: 2         
            .required('Required'),
            datapagamento: Yup.date()
            .default(() => new Date())                     
            .required('Required'),
            formapagamento: Yup.string()          
            .ensure()
            .required("Required"),                        
        }),
        onSubmit: values => {           
            console.log(values)
            setdataFormaPago(values)
            //values.formapagamento?settabformpago(false)
            if(values.formapagamento==="Transfer??ncia"){
                setValue("7")  
                settabformpago(true)
            }else{
                settabformpago(false)
                setValue("8") 
            }
               
        }
    }) 

    const formikPrecio = useFormik({
        initialValues: {
            preco: '',  
        },
        validationSchema: Yup.object({          
            preco: Yup.string()
            .matches(/^[0-9]+\,[0-9]+$/, "Formato inv??lido")//Qual o pre??o do produto?
            .required('Required'),  
            
        }),
        onSubmit: values => {           
            setdataPrecio(values)
            setValue("6")           
        }
    }) 
    const formikCondicionEntrega = useFormik({ //FILTRO DE no poder asignar fecha anterior
        initialValues: {
            dia: new Date(),
            horario: new Date(),
            local: '', 
        },
        validationSchema: Yup.object({
          
            dia: Yup.date()//Em que data o produto ser?? entregue?
            .default(() => new Date())                     
            .required('Required'),
            horario: Yup.string()//Qual hor??rio o produto ser?? entregue?
            .default(() => new Date())
            .required('Required'),                   
            local: Yup.string()
            .max(100, 'N??o deve ter um m??ximo de 100 caracteres')// Em que local o produto ser?? entregue?
                                                    //Endere??o
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
            .max(300, 'N??o deve ter um m??ximo de 300 caracteres') //O que est?? sendo comercializado (qual o objeto da compra e venda?)? 
                                                        //Por favor, descreva com o m??ximo de informa????es e detalhes poss??veis.
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
            .matches(/^([a-zA-Z\u00f1\u00d1]+\s[a-zA-Z\u00f1\u00d1]+)+$/, "Formato inv??lido")//Para quem o produto ser?? entregue?
            .max(30, 'N??o deve ter um m??ximo de 30 caracteres')
            .required('Required'),
            terg: Yup.string()
            .matches(/^[0-9]{6}\-[a-zA-Z\u00f1\u00d1]{2}$/, "Formato inv??lido")
            .required('Required'),
            tecpf: Yup.string()            
            .matches(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/, "Formato inv??lido")
            .required('Required'),
            teendereco: Yup.string()
            .max(100, 'N??o deve ter um m??ximo de 100 caracteres')
            .required('Required'),
            teemail: Yup.string()
            .email("Formato inv??lido")
            .required('Required'),
            tetelefone: Yup.string()
            .matches(/^[0-9-()\s]+$/, "Formato inv??lido")
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
            .matches(/^([a-zA-Z\u00f1\u00d1]+\s[a-zA-Z\u00f1\u00d1]+)+$/, "Formato inv??lido")
            .max(80, 'N??o deve ter um m??ximo de 80 caracteres')
            .required('Required'),
            docpnj: Yup.string()
            .matches(/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/(0001)\-[0-9]{2}$/, "Formato inv??lido")
            .required('Required'),
            doendereco: Yup.string()
            .max(100, 'N??o deve ter um m??ximo de 100 caracteres')
            .required('Required'),
            doemail: Yup.string()
            .email('Formato inv??lido')
            .required('Required'),
            dotelefone: Yup.string()
            .matches(/^[0-9-()\s]+$/, "Formato inv??lido")
            .max(16, 'N??o deve ter um m??ximo de 16 caracteres')
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
                                    <Tab label="CONDI????ES DA ENTREGA" value="4"  disabled={dataObjecto?false:true}/>
                                    <Tab label="DO PRE??O" value="5"  disabled={dataCondicionEntrega?false:true}/>
                                    <Tab label="DA FORMA DE PAGAMENTO" value="6"  disabled={dataPrecio?false:true}/>
                                    <Tab label="DADOS BANC??RIOS" value="7"  disabled={tabformpago&&dataFormaPago?false:true}/>
                                    <Tab label="FORO" value="8"  disabled={dataDatosBanco||(dataFormaPago&&!tabformpago)?false:true}/>
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
