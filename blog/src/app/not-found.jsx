
import Link from "next/link";
import NotFoundBuddy from "@/components/not-found-buddy"

export default function Notfound(){
    return(
        <>
        <div className="box-NF">
            <div className="flex">
                <h2 className="Title-NF">Conteúdo não encontrado!</h2>
                <p className="Title-NF">Erro 404</p>
                <NotFoundBuddy className="face"/>
                <Link href={"/"} >Voltar</Link>
            </div>
        </div> 
        </>
    )
}