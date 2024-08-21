import { useState } from "react";

export default function EduForm({onClick, cancel, obj=null}){

    obj = obj != null ? obj[0] : obj;

    const [instituition, setInstituition] = useState(obj === null ? '' : obj.instituition);
    const [formation, setFormation] = useState(obj === null ? '' : obj.formation);
    const [startDate, setStartDate] = useState(obj === null ? '' : obj.startDate);
    const [endDate, setEndDate] = useState(obj === null ? '' : obj.endDate);



    return (
        <div>
            <form className="form" onSubmit={(e)=>{ e.preventDefault() }}> 
                <label htmlFor="instituition">Instituição</label>
                <input type="text" name='institution' id="institution" onChange={e => setInstituition(e.target.value)} required/> 

                <label htmlFor="formation-title"> Titulo </label>
                <input type="text" name='formation-title' id="formation-title" onChange={e => setFormation(e.target.value)} required/>

                <label htmlFor="start-date">Data de inicio</label>
                <input type="date" name='start-date' id="start-date" onChange={e => setStartDate(e.target.value)} required/>

                <label htmlFor="end-date">Data de termino</label>
                <input type="date" name='end-date' id="end-date" onChange={e => setEndDate(e.target.value)} required/>
                

                <div className="form-buttons">
                    {obj === null ? (
                        <button onClick={() => onClick({instituition, formation, startDate, endDate})} id="edu-button" className="add">Adicionar</button>
                    ) : (
                        <button onClick={() => onClick({instituition, formation, startDate, endDate, id: obj.id })} id="edu-button" className="add">Editar</button>
                    )}
                    
                    <button onClick={cancel} className="cancel">Cancelar</button>
                </div>
                
            </form>
        </div>
    )
}


