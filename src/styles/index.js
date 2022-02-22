import { StyleSheet,Font } from '@react-pdf/renderer'
import Roboto from "./../assets/fonts/Roboto-Bold.ttf"

Font.register({ family: 'Roboto', src: Roboto });
export default StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop:"70px",
    paddingBottom:"70px",
  },
  container:{
    paddingLeft:"50px",
    paddingRight:"50px",
  },
  subcontainer:{
    marginTop:"5px",
    marginBottom:"15px",
    display:"flex",
    flexDirection:"column"
  },
  title:{
    fontFamily:"Roboto",
    textTransform:"uppercase",
    fontSize:"16px",
    fontWeight:"700",
    textAlign:"center",
    textDecoration:"underline",
    marginBottom:"10px",
    width:"100%"
  },
  content:{
    display:"flex",  
    alignItems:"center",
    flexDirection:"row",    
    marginBottom:"30px"
  },
  contentfooter:{
    display:"flex",  
    alignItems:"center",
    flexDirection:"row",    
    marginTop:"100",
  },
  span:{
    fontFamily:"Roboto", 
    fontWeight:"700"
  },
  subtitle:{
    textTransform:"uppercase",
    fontSize:"14px",
    fontFamily:"Roboto",    
    fontWeight:"700"
  },
  text:{ 
    fontSize:"12px",
    textAlign:"justify"
  },
  firma:{
    textTransform:"uppercase",
    fontSize:"12px"
  },
  box:{
    flexGrow:1,
  },
  divider:{
    width:"90%",
    height:"2px",
    backgroundColor:"#000",
    marginBottom:"5px"
  },
  highlighted:{
    backgroundColor:"#fff",
  },
  highlightedBefore:{
    backgroundColor:"#fad15a",
  },
  highlightedAfter:{
    backgroundColor:"#77d4da"
  },
  trick:{
    height:"200px",
   
  }
})