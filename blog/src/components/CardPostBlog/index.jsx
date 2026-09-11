import "./cardPostBlog.css"

export default function CardPostBlog({imagem, categoria, titulo}){
    return(
        <>
        
        <div className="card_post_blog">
            <img src={imagem} alt="" />
            <div>
                <p className="categoria">{categoria}</p>
                <p>{titulo}</p>
            </div>
        </div>

        </>
    )
}