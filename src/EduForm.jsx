import { useState } from "react";

export default function EduForm({onClick}){

    const [instituition, setInstituition] = useState('');
    const [formation, setFormation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');



    return (
        <div>
            <form className="form" onSubmit={(e)=>{ e.preventDefault() }}> 
                <label htmlFor="instituition">Instituição</label>
                <input type="text" name='institution' onChange={e => setInstituition(e.target.value)}/> 

                <label htmlFor="formation-title"> Titulo </label>
                <input type="text" name='formation-title' onChange={e => setFormation(e.target.value)}/>

                <label htmlFor="start-date">Data de inicio</label>
                <input type="date" name='start-date'onChange={e => setStartDate(e.target.value)}/>

                <label htmlFor="end-date">Data de termino</label>
                <input type="date" name='end-date' onChange={e => setEndDate(e.target.value)}/>

                <button onClick={() => onClick({instituition, formation, startDate, endDate})}>Adicionar</button>
            </form>
        </div>
    )
}


