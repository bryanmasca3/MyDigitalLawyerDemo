import React from "react";
import { Route, Routes ,BrowserRouter} from "react-router-dom";
import Contract from "./pages/Contract";
import ContractsList from "./pages/ContractsList";
import Home from "./pages/Home";
import Advogados from "./pages/Advogados";
import Equipe from"./pages/Equipe";
const App=()=>{
  return(  
    <BrowserRouter>
      <Routes>
          <Route path="/contractList" element={<ContractsList />} />
          <Route path="/contract" element={<Contract />} />        
          <Route path="/advogados" element={<Advogados />} />        
          <Route path="/equipe" element={<Equipe />} />
          <Route exact path="/" element={<Home />} /> 
      </Routes>    
    </BrowserRouter>
  )
}

export default App