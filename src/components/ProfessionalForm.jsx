import { useState } from "react"

export default function ProfessionalForm({onClick, cancel, obj=null}){
    obj = obj === null ? null : obj[0];

    const [companyName, setCompanyName] = useState(obj === null ? '' : obj.companyName);
    const [position, setPosition] = useState(obj === null ? '' : obj.position);
    const [responsabilities, setResponsabilities] = useState(obj === null ? '' : obj.responsabilities);
    const [startDate, setStartDate] = useState(obj === null ? '' : obj.startDate);
    const [endDate, setEndDate] = useState(obj === null ? '' : obj.endDate);


    return (
        <div>
          <form className="form" onSubmit={(e)=>{ e.preventDefault() }}>
                <label htmlFor="company-name">Nome da empresa</label>
                <input type="text" name='company-name' id="company-name" onChange={e => setCompanyName(e.target.value)}/> 

                <label htmlFor="position-title"> Cargo </label>
                <input type="text" name='position-title' id="position-title" onChange={e => setPosition(e.target.value)}/>

                <label htmlFor="responsabilities">Responsabilidades</label>
                <textarea name="responsabilities" id="responsabilities" onChange={e => setResponsabilities(e.target.value)}/>

                <label htmlFor="start-date">Data de inicio</label>
                <input type="date" name='start-date' id="start-date" onChange={e => setStartDate(e.target.value)}/>

                <label htmlFor="end-date">Data de termino</label>
                <input type="date" name='end-date' id="end-date" onChange={e => setEndDate(e.target.value)}/>

                <div className="form-buttons">
                    {obj === null ? (
                        <button onClick={() => onClick({companyName, position, responsabilities, startDate, endDate})} id="edu-button" className="add">Adicionar</button>
                    ) : (
                        <button onClick={() => onClick({companyName, position, responsabilities, startDate, endDate, id: obj.id })} id="edu-button" className="add">Editar</button>
                    )}

                    <button onClick={cancel} className="cancel">Cancelar</button>
                </div>

                
            </form>
        </div>
    )
}


