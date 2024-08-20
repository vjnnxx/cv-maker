import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './styles/App.css'
import Section from './components/Section';
import EduForm from './components/EduForm';
import ProfessionalForm from './components/ProfessionalForm';
import Icon from '@mdi/react';
import { mdilPencil } from '@mdi/light-js';

export default function App() {
  const [name, setName] = useState('Fulano da Silva');
  const [email, setEmail] = useState('sample@mail.com');
  const [phone, setPhone] = useState('123456789');

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const [eduActive, setEduActive] = useState(false);
  const [professionalActive, setProfessionalActive] = useState(false);

  const [eduEdit, setEduEdit] = useState(0);
  const [eduID, setEduID] = useState('');

  const [professionalEdit, setProfessionalEdit] = useState(0);
  const [profesisonalID, setProfessionalID] = useState('');


  const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  const addEducation = (values) =>{
    values.id = uuidv4();
    setEducation([...education, values]);
    toggleEdu();
  }

  const addExperience = (values) => {
    values.id = uuidv4();
    setExperience([...experience, values]);
    toggleProfessional();
  }

  const toggleEdu = () => {
    setEduActive(!eduActive);
  }

  const toggleProfessional = () => {
    setProfessionalActive(!professionalActive);
  }

  const educationEditView =  (value) => {

    setEduEdit(1);
    setEduID(value);

    const eduArray = education.filter((item) => item.id === value);
    
    toggleEdu();
    
    setTimeout(() => { 
      const instituition = document.querySelector('#institution');
      instituition.value = eduArray[0].instituition;

      const formationTitle = document.querySelector('#formation-title');
      formationTitle.value = eduArray[0].formation;

      const startDate = document.querySelector('#start-date');
      startDate.value = eduArray[0].startDate;

      const endDate = document.querySelector('#end-date');
      endDate.value = eduArray[0].endDate;
    }, 500);
  }

  const professionalEditView = (value) => {

    setProfessionalEdit(1);
    setProfessionalID(value);

    const professionalArray = experience.filter((item) => item.id === value);
    
    toggleProfessional();
    
    setTimeout(() => { 
      const companyName = document.querySelector('#company-name');
      companyName.value = professionalArray[0].companyName;

      const position = document.querySelector('#position-title');
      position.value = professionalArray[0].position;

      const responsabilities = document.querySelector('#responsabilities');
      responsabilities.value = professionalArray[0].responsabilities;

      const startDate = document.querySelector('#start-date');
      startDate.value = professionalArray[0].startDate;

      const endDate = document.querySelector('#end-date');
      endDate.value = professionalArray[0].endDate;
    }, 500);
  }

  const editEducation = (editedObj) =>{
  
    const newArray = education.map((item) => {
      if (item.id === editedObj.id){
        return editedObj
      } else {
        return item
      }
    });

    setEducation(newArray);
    toggleEdu();
    setEduEdit(0);
  }

  const editExperience = (editedObj) =>{
  
    const newArray = experience.map((item) => {
      if (item.id === editedObj.id){
        return editedObj
      } else {
        return item
      }
    });

    setExperience(newArray);
    toggleProfessional();
    setProfessionalEdit(0);
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
            <input type="tel" name='phone-number' onChange={e => setPhone(e.target.value)} placeholder='(12)3456789' maxLength={15} onKeyUp={(e) => handlePhone(e)}/>
          </form>
        </Section>

        <Section>
          <h2>Formação acadêmica</h2>
          {eduActive ? (
            eduEdit === 0 ? (
              <EduForm onClick={addEducation} cancel={toggleEdu}></EduForm>
            ) : (
              <EduForm onClick={editEducation} cancel={toggleEdu} obj={education.filter((item) => item.id === eduID)}></EduForm>
            )
            
          ) : (
            <div>
              {education.map(item => 
              <div key={item.id} className='edit-list'> 
                <h2 > {item.instituition} </h2>
                <button onClick={() => educationEditView(item.id)}>
                  <Icon path={mdilPencil} size={1} />
                </button>
              </div>
              )}
              
              
              <button onClick={toggleEdu} className='newEntry'>Adicionar</button>
            </div>       
          )}
        </Section>
        

        <Section>
          <h2>Experiência profisisonal</h2>
          {professionalActive ? (
            professionalEdit === 0 ? (
              <ProfessionalForm onClick={addExperience} cancel={toggleProfessional}></ProfessionalForm>
            ) : (
              <ProfessionalForm onClick={editExperience} cancel={toggleProfessional} obj={experience.filter((item) => item.id === profesisonalID)}></ProfessionalForm>
            )
            
          ) : (
            <div>
              {experience.map(item => 
              <div key={item.id} className='edit-list'>
                <h2 > {item.companyName} </h2>
                <button onClick={()=> professionalEditView(item.id)}><Icon path={mdilPencil} size={1} /></button>
              </div>
              
              )} 
              <button onClick={toggleProfessional} className='newEntry'>Adicionar</button>
            </div>       
          )}
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

