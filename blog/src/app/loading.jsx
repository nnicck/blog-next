import LoadingSpinner from "@/components/loadingSpinner";

export default function loading(){
    return(
        <>
        <main>
         <div className="box-NF">
            <div className="flex">
                <h2>Carregando</h2>
                <LoadingSpinner className="face"/>
            </div>
        </div> 
        </main>
        </>
    )
}