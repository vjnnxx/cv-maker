export default function EduForm(){
    return (
        <div>
            <form className="form" onSubmit={(e)=>{ e.preventDefault() }}>
                <label htmlFor="instituition">Instituição</label>
                <input type="text" name='institution'/> 

                <label htmlFor="formation-title"> Titulo </label>
                <input type="text" name='formation-title'/>

                <label htmlFor="start-date">Data de inicio</label>
                <input type="date" name='start-date'/>

                <label htmlFor="end-date">Data de termino</label>
                <input type="date" name='end-date'/>

                <input type="submit" value="Adicionar" />
            </form>
        </div>
    )
}


