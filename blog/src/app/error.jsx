"use client";
import Error from "@/components/erro";
export default function Erro() {
    return (
        <>
        <main>
        <div className="box-NF">
            <div className="flex">
                <h1>Deu alguma coisa de errado</h1>
                <h1>Recarregue a página</h1>
                <Error className="face"/>
            </div>
        </div> 
        </main>
        </>   
    )
  }