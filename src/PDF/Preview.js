import React from 'react'
import { View, Text, Document, Page, PDFViewer,Canvas, PDFDownloadLink } from '@react-pdf/renderer'
import styles from '../styles'

const Preview = ({ data }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer
        showToolbar={false}
        style={{
          width: '100%',
          height: '90vh',
        }}
      >
        <Template data={data}/>
      </PDFViewer>
      <PDFDownloadLink
        document={<Template data={data}/>}
        fileName='somename.pdf'
        style={{
            backgroundColor: '#ffc442',
            borderRadius:"5px",
            marginTop:"10px",        
            paddingTop:"1rem",
            paddingBottom:"1rem",
            display:"block",
            textAlign:"center",
            paddingLeft:"2rem",
            paddingRight:"2rem",
            textDecoration:"none",
            color:"#1a1a1a"
        }}
      >
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )
}

const Template = ({ data }) => {    
  return (
    <Document>
      <Page size='A4' style={styles.page}>

        <View style={styles.container}>
         <View style={styles.subcontainer}>
            <Text style={styles.title} >CONTRATO DE COMPRA E VENDA</Text>                
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CONTRATADO: </Text> 
            <Text style={styles.text}><Text style={styles.span}>NOME </Text>{data&&data.donome}, inscrita no CNPJ sob o nº <Text style={styles.span}>CNPJ</Text> {data&&data.docpnj}, localizada na <Text style={styles.span}>ENDEREÇO</Text> {data&&data.doendereco}, <Text style={styles.span}>EMAIL</Text> {data&&data.doemail} e <Text style={styles.span}>TELEFONE</Text> {data&&data.dotelefone}.  </Text>          
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CONTRATANTE: </Text> 
            <Text style={styles.text}><Text style={styles.span}>NOME</Text> {data&&data.tenome}, <Text style={styles.span}>RG</Text> {data&&data.terg}, <Text style={styles.span}>CPF</Text> {data&&data.tecpf}, residente na <Text style={styles.span}>ENDEREÇO</Text> {data&&data.teendereco}, <Text style={styles.span}>EMAIL</Text> {data&&data.teemail} e <Text style={styles.span}>TELEFONE</Text> {data&&data.tetelefone}. </Text> 
            <Text style={styles.text}>As partes acima identificadas têm entre si combinado o presente contrato para a compra e venda do produto abaixo indicado, obrigando-se mutuamente a observar e cumprir as cláusulas e condições seguintes. </Text>          
          </View>     
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CLÁUSULA PRIMEIRA - DO OBJETO DO CONTRATO: </Text> 
            <Text style={styles.text}>O presente contrato tem por objeto a venda pela <Text style={styles.span}>CONTRATADA</Text> para a <Text style={styles.span}>CONTRATANTE</Text> de {data&&data.objeto}. </Text>          
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CLÁUSULA SEGUNDA - CONDIÇÕES DA ENTREGA:  </Text> 
            <Text style={styles.text}>A <Text style={styles.span}>CONTRATADA</Text> entregará o produto objeto deste contrato no dia {data&&data.dia} <Text style={styles.span}>HORÁRIO</Text> {data&&data.horario}, <Text style={styles.span}>LOCAL</Text> {data&&data.local}.</Text>          
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CLÁUSULA TERCEIRA – DO PREÇO: </Text> 
            <Text style={styles.text}>A <Text style={styles.span}>CONTRATANTE</Text> pagará à <Text style={styles.span}>CONTRATADA R$ </Text>  {data&&data.preco}, equivalente ao  preço do produto.</Text>          
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CLÁUSULA QUARTA -  DA FORMA DE PAGAMENTO</Text> 
            <Text style={styles.text}>A <Text style={styles.span}>CONTRATANTE</Text> pagará à <Text style={styles.span}>CONTRATADA</Text> o preço indicado na cláusula terceira deste contrato, em <Text style={styles.span}>Nº DE PRESTAÇÕES </Text> {data&&data.prestacoes}, em <Text style={styles.span}>DATA DE PAGAMENTO PRESTAÇÃO</Text> {data&&data.datapagamento}.O pagamento deverá ser feito mediante <Text style={styles.span}>FORMA DE PAGAMENTO</Text> {data&&data.formapagamento}, cujos dados seguem abaixo:</Text>          
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>DADOS BANCÁRIOS</Text> 
              <View style={styles.content}>
                  <View style={styles.box}>
                    <Text style={styles.text}><Text style={styles.span}>BANCO:</Text> {data&&data.banco}</Text>
                    <Text style={styles.text}><Text style={styles.span}>AGÊNCIA:</Text> {data&&data.agencia}</Text>
                    <Text style={styles.text}><Text style={styles.span}>CONTA/CORRENTE:</Text> {data&&data.conta}</Text>
                  </View>
                  <View style={styles.box}>
                    <Text style={styles.text}><Text style={styles.span}>BENEFICIÁRIO:</Text> {data&&data.beneficiario}</Text>
                    <Text style={styles.text}><Text style={styles.span}>CPF/CNPJ:</Text> {data&&data.cpf}</Text>
                  </View>                
                </View>
              <Text style={styles.text}><Text style={styles.span}>Parágrafo único: </Text> Em caso de atraso no pagamento de qualquer das parcelas, a <Text style={styles.span}>CONTRATANTE</Text> deverá pagar à <Text style={styles.span}>CONTRATADA</Text> multa pela demora equivalente 10% (dez por cento), mais encargos financeiros de 0,0333% (zero vírgula, zero trezentos e trinta e três por cento) ao dia.</Text>            
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CLÁUSULA QUINTA: VIGÊNCIA</Text> 
            <Text style={styles.text}>As partes passam a obedecer o presente contrato a partir do momento da sua assinatura e dele se desobrigam com o fim da vigência, que corresponde a data da entrega do produto e o pagamento do preço.</Text>                
          </View>            
      </View>
      </Page>
      <Page size='A4' style={styles.page}>
        <View style={styles.container}>
        <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>CLÁUSULA SEXTA: FORO</Text> 
            <Text style={styles.text}>As partes elegem o foro da cidade de {data&&data.foro} como competente para dirimir as eventuais controvérsias oriundas do presente contrato. </Text>                
          </View>  
        <View style={styles.subcontainer}>  
             <View style={styles.content}>
               <View style={styles.box}>
                  <View style={styles.divider}></View>         
                  <Text style={styles.firma}>NOME CONTRATANTE</Text> 
                </View>      
                <View style={styles.box}>
                  <View style={styles.divider}></View>         
                  <Text style={styles.firma}>NOME CONTRATADA </Text> 
                </View>          
              </View> 
              <View style={styles.content}>
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