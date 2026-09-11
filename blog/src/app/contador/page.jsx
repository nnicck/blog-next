"use client";


import { useState } from "react";



export default function Contador() {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState("");

  function addUmContador() {

    if(contador < 5){
      setContador(contador + 1);
      setMensagem("");

    }

    else{
      setMensagem("Voce chegou no limite do contador");
    }
  
  }

  function subUmContador() {
    if(contador > -5){

      setContador(contador - 1);

    }
  }

  return (
    <>
    <main>

   
      <h1 style={{ textAlign: "center", marginTop: "50px"}}>Desenvolvendo um Contador</h1>
      <div style={{ display: "flex", alignItems:"center", justifyContent:"center", flexDirection:"column", marginTop:"200px"}}>

     
        
        <div style={{ display: "flex", gap: "20px",  alignItems:"center", justifyContent:"center" }}>
            <button type="button" onClick={addUmContador} style={{ width:"25px", height:"25px"}} > + </button>
            <p style={{ fontSize:"25px"}}> {contador} </p>
            <button type="button" onClick={subUmContador} style={{ width:"25px", height:"25px"}}> - </button>
        </div>
        <p  style={{ color:"red", display:"block", marginTop:"10px"}}>{mensagem}</p>
       </div>
     </main>
    </>
  );
}

