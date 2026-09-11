"use client";
import { useState } from "react";

export default function Ordens(){
    const [ordens, setOrdens] = useState([]);

    const [cliente, setCliente] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [descricao, setDescricao] = useState("");

    const [erro, setErro] = useState("");

    function cadastrarOrdem(event){
        event.preventDefault(); //Isso previne que a página recarregue...Usar sempre
        //validações
        if(
            cliente.trim() === "" ||
            equipamento.trim() === "" ||
            descricao.trim() === ""
        ){
            setErro("Preencha todos os campos");
            return; // para não realizar o resto da função
        }

        if(descricao.trim().length < 15 || descricao.trim().length > 100){
            setErro("A descrição precisa ser entre 15 - 100 caracteres");
            return;
        }

        const novaOrdem = {
            id: Date.now(),
            cliente: cliente.trim(),
            equipamento: equipamento.trim(),
            descricao: descricao.trim(),
            status: "Aberta"
        }

        setOrdens([...ordens, novaOrdem]); //Isso adiciona um item a lista
        console.log(ordens);
        //Vamos zerar os campos e o erro

        setCliente("");
        setEquipamento("");
        setDescricao("");
        setErro("");
        
    }

    function fecharOrdem(id) {
    const ordensAtualizadas = ordens.map((ordem) => {
        if (ordem.id === id) {
            return {
                ...ordem,
                status: "Fechada"
            };
        }
        return ordem;
    });
    setOrdens(ordensAtualizadas);
    }

    return(
        <main style={{ display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", width:"70%", height:"80%", margin: "100px auto"}}>
            <h1>Ordem de Serviços</h1>
            <form onSubmit={cadastrarOrdem} style={{ display:"flex", flexDirection:"column", height:"500px", width:"700px", fontSize:"25px"}}>
                <label htmlFor="cliente" style={{ fontSize:"25px", margin:"10px"}}>Cliente:</label>
                <input type="text" style={{ fontSize:"25px"}} name="cliente" id="cliente" value={cliente} placeholder="Nome do cliente" onChange={(event) => setCliente(event.target.value)}/>

                <label htmlFor="equipamento" style={{ fontSize:"25px", margin:"10px"}}>Equipamento:</label>
                <input type="text" style={{ fontSize:"25px"}} name="equipamento" id="equipamento" placeholder="Ex.: Notebook" value={equipamento} onChange={(event) => setEquipamento(event.target.value)}/>

                <label htmlFor="descricao" style={{ fontSize:"25px", margin:"10px"}}>Descrição:</label>
                <input type="text" style={{ fontSize:"25px"}} name="descricao" id="descricao" placeholder="Descreva o problema" value={descricao} onChange={(event) => setDescricao(event.target.value)}/>

                {erro != "" && <p> {erro} </p>}

                <button type="submit" style={{ fontSize:"25px", margin:"50px 0px ", background:"black", padding:"20px", borderRadius:"10px", color:"white", border:"none"}}> Cadastrar Ordem</button>
            </form>

            <h1>Tabela</h1>
            <table style={{ width: "100%", maxWidth: "900px", borderCollapse: "collapse",
            marginTop: "40px", fontSize: "18px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "2px solid black", backgroundColor:"white" }}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>cliente</th>
                        <th>equipamento</th>
                        <th>descrição</th>
                        <th>status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {ordens.map((ordem)=> (
                        <tr  key={ordem.id}>
                            <td style={{padding: "20px", border: "1px solid #D1D5DB"}}>{ordem.id}</td>
                            <td style={{padding: "20px", border: "1px solid #D1D5DB"}}>{ordem.cliente}</td>
                            <td style={{padding: "20px", border: "1px solid #D1D5DB"}}>{ordem.equipamento}</td>
                            <td style={{padding: "20px", border: "1px solid #D1D5DB"}}>{ordem.descricao}</td>
                            <td style={{padding: "20px", border: "1px solid #D1D5DB"}}>{ordem.status}</td>
                            <td style={{padding: "20px", border: "1px solid #D1D5DB"}}><button onClick={()=>fecharOrdem(ordem.id)} style={{margin:"0 10px", height:"25px", width:"80px"}}>Fechar</button></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </main>
    )
}