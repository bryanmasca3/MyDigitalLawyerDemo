import React from 'react'
import { View, Text, Document, Page, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import styles from '../styles'

const Preview = ({ dataContratado,dataContratante,dataObjecto,dataCondicionEntrega,dataPrecio,dataFormaPago,dataDatosBanco,dataForo,activate}) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer
        showToolbar={false}
        style={{
          width: '100%',
          height: '90vh',
        }}
      >
        <Template           dataContratado={dataContratado}
                            dataContratante={dataContratante}
                            dataObjecto={dataObjecto}
                            dataCondicionEntrega={dataCondicionEntrega}
                            dataPrecio={dataPrecio}
                            dataFormaPago={dataFormaPago}
                            dataDatosBanco={dataDatosBanco}
                            dataForo={dataForo}/>
      </PDFViewer>
      <PDFDownloadLink
        document={<Template dataContratado={dataContratado}
                            dataContratante={dataContratante}
                            dataObjecto={dataObjecto}
                            dataCondicionEntrega={dataCondicionEntrega}
                            dataPrecio={dataPrecio}
                            dataFormaPago={dataFormaPago}
                            dataDatosBanco={dataDatosBanco}
                            dataForo={dataForo}
                            printh={true}/>}
        fileName='somename.pdf'     
        style={{display: activate ? 'block' : 'none', 
                  backgroundColor: '#ffc442',
                  borderRadius:"5px",
                  marginTop:"10px",        
                  paddingTop:"1rem",
                  paddingBottom:"1rem",
                
                  textAlign:"center",
                  paddingLeft:"2rem",
                  paddingRight:"2rem",
                  textDecoration:"none",
                  color:"#1a1a1a"  }}
       
      >
        {({ loading }) => (loading ? 'Loading document...' : 'Gerar PDF')}
      </PDFDownloadLink>
    </div>
  )
}

const Template = ({ dataContratado,dataContratante,dataObjecto,dataCondicionEntrega,dataPrecio,dataFormaPago,dataDatosBanco,dataForo,printh=false}) => {    
 
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.container}>
         <View style={styles.subcontainer}>
            <Text style={styles.title} >CONTRATO DE COMPRA E VENDA</Text>                
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CONTRATADO: </Text> 
            <Text style={styles.text}>{!dataContratado?<Text style={styles.span}>Nome </Text>:""}<Text style={!dataContratado?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataContratado?"__________":dataContratado.donome}</Text>, inscrita no CNPJ sob o n?? {!dataContratado?<Text style={styles.span}>CNPJ</Text>:""}<Text style={!dataContratado?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataContratado?"__________":dataContratado.docpnj}</Text>, localizada na {!dataContratado?<Text style={styles.span}>Endere??o</Text>:""}<Text style={!dataContratado?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataContratado?"__________":dataContratado.doendereco}</Text>, {!dataContratado?<Text style={styles.span}>E-Mail</Text>:""}<Text style={!dataContratado?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataContratado?"__________":dataContratado.doemail}</Text> e {!dataContratado?<Text style={styles.span}>Telefone</Text>:""}<Text style={!dataContratado?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataContratado?"__________":dataContratado.dotelefone}</Text>.</Text>          
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CONTRATANTE: </Text> 
            <Text style={styles.text}>{!dataContratante?<Text style={styles.span}>Nome</Text>:""} <Text style={!dataContratante?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataContratante?"__________":dataContratante.tenome}</Text>, {!dataContratante?<Text style={styles.span}>RG</Text>:""} <Text style={!dataContratante?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataContratante?"__________":dataContratante.terg}</Text>, {!dataContratante?<Text style={styles.span}>CPF</Text>:""} <Text style={!dataContratante?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataContratante?"__________":dataContratante.tecpf}</Text>, residente na {!dataContratante?<Text style={styles.span}>Endere??o</Text>:""}<Text style={!dataContratante?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataContratante?"__________":dataContratante.teendereco}</Text>,{!dataContratante?<Text style={styles.span}>E-Mail</Text>:""}  <Text style={!dataContratante?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataContratante?"__________":dataContratante.teemail}</Text> e {!dataContratante?<Text style={styles.span}>Telefone</Text>:""}<Text style={!dataContratante?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataContratante?"__________":dataContratante.tetelefone}</Text>. </Text> 
            <Text style={styles.text}>As partes acima identificadas t??m entre si combinado o presente contrato para a compra e venda do produto abaixo indicado, obrigando-se mutuamente a observar e cumprir as cl??usulas e condi????es seguintes. </Text>          
          </View>     
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CL??USULA PRIMEIRA - DO OBJETO DO CONTRATO: </Text> 
            <Text style={styles.text}>O presente contrato tem por objeto a venda pela <Text style={styles.span}>CONTRATADA</Text> para a <Text style={styles.span}>CONTRATANTE</Text> de <Text style={!dataObjecto?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataObjecto?"__________":dataObjecto.objeto}</Text>. </Text>          
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CL??USULA SEGUNDA - CONDI????ES DA ENTREGA:  </Text> 
            <Text style={styles.text}>A <Text style={styles.span}>CONTRATADA</Text> entregar?? o produto objeto deste contrato no dia <Text style={!dataCondicionEntrega?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataCondicionEntrega?"__________":new Date(dataCondicionEntrega.dia).toLocaleDateString('en-GB')}</Text>{!dataCondicionEntrega?<Text style={styles.span}>HOR??RIO</Text>:""}, <Text style={!dataCondicionEntrega?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataCondicionEntrega?"__________":new Date(dataCondicionEntrega.horario).toLocaleTimeString('en-GB').slice(0, -3)}</Text> hrs. , {!dataCondicionEntrega?<Text style={styles.span}>LOCAL</Text>:""}<Text style={!dataCondicionEntrega?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataCondicionEntrega?"__________":dataCondicionEntrega.local}</Text>.</Text>          
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CL??USULA TERCEIRA ??? DO PRE??O: </Text> 
            <Text style={styles.text}>A <Text style={styles.span}>CONTRATANTE</Text> pagar?? ?? <Text style={styles.span}>CONTRATADA R$</Text><Text style={!dataPrecio?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataPrecio?"__________":dataPrecio.preco}</Text>, equivalente ao  pre??o do produto.</Text>          
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CL??USULA QUARTA -  DA FORMA DE PAGAMENTO</Text> 
            <Text style={styles.text}>A <Text style={styles.span}>CONTRATANTE</Text> pagar?? ?? <Text style={styles.span}>CONTRATADA</Text> o pre??o indicado na cl??usula terceira deste contrato, em N?? {!dataFormaPago?<Text style={styles.span}> DE PRESTA????ES</Text>:""}<Text style={!dataFormaPago?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataFormaPago?"__________":dataFormaPago.prestacoes}</Text>, em {!dataFormaPago?<Text style={styles.span}>DATA DE PAGAMENTO PRESTA????O</Text>:""}<Text style={!dataFormaPago?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataFormaPago?"__________":new Date(dataFormaPago.datapagamento).toLocaleDateString('en-GB')}</Text>.O pagamento dever?? ser feito mediante {!dataFormaPago?<Text style={styles.span}>FORMA DE PAGAMENTO</Text>:""}<Text style={!dataFormaPago?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataFormaPago?"__________":dataFormaPago.formapagamento}</Text>{dataFormaPago&&dataFormaPago?.formapagamento==="Transfer??ncia"?", cujos dados seguem abaixo:":"."}</Text>          
          </View>
          {dataFormaPago&&dataFormaPago?.formapagamento==="Transfer??ncia"?<View style={styles.subcontainer}>
            <Text style={styles.subtitle}>DADOS BANC??RIOS</Text> 
              <View style={styles.content}>
                  <View style={styles.box}>
                    <Text style={styles.text}><Text style={styles.span}>BANCO:</Text> <Text style={!dataDatosBanco?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataDatosBanco?"__________":dataDatosBanco.banco}</Text></Text>
                    <Text style={styles.text}><Text style={styles.span}>AG??NCIA:</Text> <Text style={!dataDatosBanco?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataDatosBanco?"__________":dataDatosBanco.agencia}</Text></Text>
                    <Text style={styles.text}><Text style={styles.span}>BENEFICI??RIO:</Text> <Text style={!dataDatosBanco?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataDatosBanco?"__________":dataDatosBanco.beneficiario}</Text></Text>
                    
                  </View>
                  <View style={styles.box}>
                  <Text style={styles.text}><Text style={styles.span}>CONTA/CORRENTE:</Text> <Text style={!dataDatosBanco?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataDatosBanco?"__________":dataDatosBanco.conta}</Text></Text>
                    <Text style={styles.text}><Text style={styles.span}>CPF/CNPJ:</Text> <Text style={!dataDatosBanco?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataDatosBanco?"__________":dataDatosBanco.cpf}</Text></Text>
                  </View>                
                </View>
              <Text style={styles.text}><Text style={styles.span}>Par??grafo ??nico: </Text> Em caso de atraso no pagamento de qualquer das parcelas, a <Text style={styles.span}>CONTRATANTE</Text> dever?? pagar ?? <Text style={styles.span}>CONTRATADA</Text> multa pela demora equivalente 10% (dez por cento), mais encargos financeiros de 0,0333% (zero v??rgula, zero trezentos e trinta e tr??s por cento) ao dia.</Text>            
          </View>:null}
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CL??USULA QUINTA: VIG??NCIA</Text> 
            <Text style={styles.text}>As partes passam a obedecer o presente contrato a partir do momento da sua assinatura e dele se desobrigam com o fim da vig??ncia, que corresponde a data da entrega do produto e o pagamento do pre??o.</Text>                
          </View>    
          {dataFormaPago&&dataFormaPago?.formapagamento!=="Transfer??ncia"?<View style={styles.trick}></View>:null}
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CL??USULA SEXTA: FORO</Text> 
            <Text style={styles.text}>As partes elegem o foro da cidade de <Text style={!dataForo?styles.highlightedBefore:!printh?styles.highlightedAfter:""}>{!dataForo?"__________":dataForo.foro}</Text> como competente para dirimir as eventuais controv??rsias oriundas do presente contrato. </Text>                
          </View>           
        <View style={styles.subcontainer}>  
             <View style={styles.contentfooter}>
               <View style={styles.box}>
                  <View style={styles.divider}></View>         
                  <Text style={styles.firma}>NOME CONTRATANTE</Text> 
                </View>      
                <View style={styles.box}>
                  <View style={styles.divider}></View>         
                  <Text style={styles.firma}>NOME CONTRATADA </Text> 
                </View>          
              </View> 
              <View style={styles.contentfooter}>
              <View style={styles.box}>
                  <View style={styles.divider}></View>         
                  <Text style={styles.firma}>TESTEMUNHA 1</Text>      
                  <Text style={styles.firma}>RG</Text> 
                  <Text style={styles.firma}>CPF</Text> 
                </View> 
                <View style={styles.box}>
                  <View style={styles.divider}></View>         
                  <Text style={styles.firma}>TESTEMUNHA 2</Text>      
                  <Text style={styles.firma}>RG</Text> 
                  <Text style={styles.firma}>CPF</Text>  
                </View> 
              </View>                 
          </View>
      </View>
     
    
        
      </Page>
   
    </Document>
  )
}

export default Preview