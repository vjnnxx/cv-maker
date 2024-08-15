import { useState } from "react"

export default function ProfessionalForm({onClick}){

    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [responsabilities, setResponsabilities] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    return (
        <div>
          <form className="form" onSubmit={(e)=>{ e.preventDefault() }}>
                <label htmlFor="company-name">Nome da empresa</label>
                <input type="text" name='company-name' onChange={e => setCompanyName(e.target.value)}/> 

                <label htmlFor="position-title"> Cargo </label>
                <input type="text" name='position-title' onChange={e => setPosition(e.target.value)}/>

                <label htmlFor="responsabilities">Responsabilidades</label>
                <textarea name="responsabilities" onChange={e => setResponsabilities(e.target.value)}/>

                <label htmlFor="start-date">Data de inicio</label>
                <input type="date" name='start-date' onChange={e => setStartDate(e.target.value)}/>

                <label htmlFor="end-date">Data de termino</label>
                <input type="date" name='end-date' onChange={e => setEndDate(e.target.value)}/>

                <button onClick={() => onClick({companyName, position, responsabilities, startDate, endDate})}>Adicionar</button>
            </form>
        </div>
    )
}


