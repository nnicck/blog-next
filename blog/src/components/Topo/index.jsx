import Link from "next/link";
import "./topo.css";

export default function Topo(){
        return(
            <>
                <header>
                        <ul className="listaHead">
                                <li> <Link href={"/"} className="text-white"> Home </Link></li> 
                                <li><Link href={"/produto"} className="text-white"> Produto </Link></li>

                                <li> <Link href={"/produto/precos"} className="text-white"> Preços</Link></li>
                                <li><Link href={"/blog"} className="text-white"> Blog </Link></li>
                                <li><Link href={"/sobre"} className="text-white"> Sobre nós </Link></li>
                        </ul>
                </header>
            </>
        )
    }