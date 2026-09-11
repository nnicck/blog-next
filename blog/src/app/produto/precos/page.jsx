import "./preco.css";
export default function precos (){
    return (
        <>
        <main>
        <h1 className="preco">Preços</h1>
        <div className="Big-box">
            <div className="plano">
                <h2 className="PlanoNome">Plano Básico</h2>
                <h3>R$ 1.255,00/mês</h3>
                <p>Para quem está começando.</p>
                <ul className="list">
                    <li>1 landing page</li>
                    <li>Editor sem código</li>
                    <li>Templates básicos</li>
                    <li>Formulário de contato</li>
                </ul>
            </div>
            <div className="plano">
                <h2 className="PlanoNome">Plano Profissional</h2>
                <h3>R$ 2.400,00/mês</h3>
                <p>Para negócios que querem mais conversões.</p>
                <ul className="list">
                    <li>Landing pages ilimitadas</li>
                    <li>Templates profissionais</li>
                    <li>Domínio personalizado</li>
                    <li>Captura de leads</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div className="plano">
                <h2 className="PlanoNome">Plano Empresarial</h2>
                <h3>R$ 5.000,00/mês</h3>
                <p>Para empresas e equipes.</p>
                <ul className="list">
                    <li>Tudo do plano Profissional</li>
                    <li>Mais usuários</li>
                    <li>Recursos avançados</li>
                    <li>Suporte prioritário</li>
                    <li>Integrações</li>
                </ul>
            </div>
        </div>
        </main>
        </>
    )
}