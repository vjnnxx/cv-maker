export default function ProfessionalForm(){
    return (
        <div>
          <form className="form" onSubmit={(e)=>{ e.preventDefault() }}>
                <label htmlFor="company-name">Nome da empresa</label>
                <input type="text" name='company-name'/> 

                <label htmlFor="position-title"> Cargo </label>
                <input type="text" name='position-title'/>

                <label htmlFor="responsabilities">Responsabilidades</label>
                <textarea name="responsabilities"/>

                <label htmlFor="start-date">Data de inicio</label>
                <input type="date" name='start-date'/>

                <label htmlFor="end-date">Data de termino</label>
                <input type="date" name='end-date'/>

                <input type="submit" value="Adicionar" />
            </form>
        </div>
    )
}


