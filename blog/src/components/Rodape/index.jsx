import "./rodape.css";
import Link from "next/link";

export default function Rodape(){
    return(
        <>
            <footer className="footer">
                <ul className="listaHead">
                    {/* <li> <Link href={"/produto/precos"} className="text-white"> Preços</Link></li>
                    <li><Link href={"/sobre"} className="text-white"> Sobre nós </Link></li> */}
                    {/* <p>© 2018 - 2026 Converta. Todos os direitos reservados.</p> */}
                     <li> <Link href={"/contador"} className="text-white"> Contador</Link></li>
                     <li> <Link href={"/ordens"} className="text-white"> Ordens</Link></li>
                </ul>
            </footer>
        </>
    )
}