import { resolve } from "styled-jsx/css";
import "./page.css";
import BannerCTA from "@/components/bannerCTA";





const sleep = (ms) => new Promise((resolve) => setTimeout(resolve,ms));

export default async function Home() {

  await sleep(3500);

  // throw new Error("Erro simulado!!");

  return (
    <>
    
    
      <div className="caixaGrande">
        <main  className="caixaMedia">

          <div className="texto">
            <h1 className="HomeName">Converta mais leads</h1>
            <p>Crie landing pages personalizadas com alta conversão que transformam mais visitantes em clientes — sem precisar programar.</p>
            <button className="btnExp">Experimente o teste gratuito</button>
          </div>
          <div className="img">
              <img className="imgWoman" src="/mulher_prancheta.png" alt="Mulher segurando uma prancheta" />
          </div>

        </main>
      </div>

      <BannerCTA/>
      
      
      
      
    </>
  );
}
