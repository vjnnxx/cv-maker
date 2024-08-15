import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Section from './Section';
import EduForm from './EduForm';
import ProfessionalForm from './ProfessionalForm';

export default function App() {
  const [name, setName] = useState('Fulano da Silva');
  const [email, setEmail] = useState('sample@mail.com');
  const [phone, setPhone] = useState('123456789');

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);


  //State com lista de formações / experiências

  const addEducation = (values) =>{
    values.id = uuidv4();
    setEducation([...education, values]);
  }

  const addExperience = (values) => {
    values.id = uuidv4();
    setExperience([...experience, values]);
    console.log(values)
  }
  

  return (
    <div className='main'>

      <div className='input-section'>
        <Section>
          <h2>Informação geral</h2>
          <form className='form' onSubmit={(e)=>{ e.preventDefault() }}>
            <label htmlFor="name">Nome</label>
            <input type="text" name='name' onChange={e => setName(e.target.value)} placeholder='Fulano da Silva' />

            <label htmlFor="email">Email</label>
            <input type="text" name='email' onChange={e => setEmail(e.target.value)} placeholder='sample@mail.com'/>

            <label htmlFor="phone-number">Telefone</label>
            <input type="tel" name='phone-number' onChange={e => setPhone(e.target.value)} placeholder='123456789'/>
          </form>
        </Section>

        <Section>
          <h2>Formação acadêmica</h2>
          <EduForm onClick={addEducation}></EduForm>
          
        </Section>

        <Section>
          <h2>Experiência profisisonal</h2>
          <ProfessionalForm onClick={addExperience}></ProfessionalForm>
        </Section>
      </div>
      

      <div className='curriculum'>
          <h1>{name}</h1>
          
          <p>{email}</p>
          <p>{phone}</p>

          <hr />

          <div className='academic'>
            <h2>Formação Acadêmica</h2>         
              {education.map((element)=> 
                <div key={element.id}>
                  <strong>{element.startDate.split('-')[0]} - {element.endDate.split('-')[0]} | {element.instituition}</strong>
                  <p>{element.formation}</p>
                </div>    
              )}
           {/* Transformar div de form em lista de formações clicáveis para edição */}
          

          </div>

          <div className='profesisonal'>
            <h2>Experiência profisisonal</h2>
            {experience.map((element)=> 
                <div key={element.id}>
                  <strong>{element.startDate.split('-')[0]} - {element.endDate.split('-')[0]} | {element.companyName}</strong>
                  <p>{element.position}</p>
                  <p>{element.responsabilities}</p>
                </div>    
              )}
          </div>
      </div>
    </div>
  )
}

