import CardPostBlog from "@/components/CardPostBlog";
import styles from "./blog.css";

export default function Blog(){
    const listaNoticias = [
        {
            id: 1,
            imagem: "noticia_1.png",
            categoria: "Tecnologia",
            titulo: "Inteligência artificial transforma o mercado de trabalho"
        },
        {
            id: 2,
            imagem: "noticia_2.png",
            categoria: "Ciência",
            titulo: "Nova tecnologia promete acelerar pesquisas científicas"
        },
        {
            id: 3,
            imagem: "noticia_3.png",
            categoria: "Games",
            titulo: "Estúdio independente anuncia novo jogo de aventura"
        },
        {
            id: 4,
            imagem: "noticia_4.png",
            categoria: "Educação",
            titulo: "Plataformas digitais ganham espaço no ensino"
        },
        {
            id: 5,
            imagem: "noticia_5.png",
            categoria: "Tecnologia",
            titulo: "Nova geração de computadores chega com maior desempenho"
        },
        {
            id: 6,
            imagem: "noticia_6.png",
            categoria: "Inovação",
            titulo: "Startups brasileiras desenvolvem soluções para cidades inteligentes"
        },
        {
            id: 7,
            imagem: "noticia_7.png",
            categoria: "Games",
            titulo: "Evento reúne desenvolvedores independentes de todo o país"
        },
        {
            id: 8,
            imagem: "noticia_8.png",
            categoria: "Ciência",
            titulo: "Pesquisadores apresentam descoberta que pode mudar a indústria"
        },
        {
            id: 9,
            imagem: "noticia_9.png",
            categoria: "Internet",
            titulo: "Novas ferramentas prometem tornar a navegação mais segura"
        },
        {
            id: 10,
            imagem: "noticia_10.png",
            categoria: "Tecnologia",
            titulo: "Empresas investem em soluções sustentáveis e tecnologia verde"
        }
    ];

    return(
        <>
            <div className="blog">
                <h1>Notícias</h1>
                <div className="card_container">
                    {listaNoticias.map(noticia => {
                        return <CardPostBlog key={noticia.id} imagem={noticia.imagem} categoria={noticia.categoria} titulo={noticia.titulo}></CardPostBlog>
                    })}
                </div>
            </div>
        </>
    )
}