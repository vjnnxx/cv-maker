import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Section from './Section';
import EduForm from './EduForm';
import ProfessionalForm from './ProfessionalForm';

export default function App() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('sample@mail.com');
  const [phone, setPhone] = useState('123456789');
  

  return (
    <div className='main'>

      <div className='input-section'>
        <Section>
          <h2>Informação geral</h2>
          <form className='form' onSubmit={(e)=>{ e.preventDefault() }}>
            <label htmlFor="name">Nome</label>
            <input type="text" name='name' onChange={e => setName(e.target.value)}></input>

            <label htmlFor="email">Email</label>
            <input type="text" name='email' onChange={e => setEmail(e.target.value)}></input>

            <label htmlFor="phone-number">Telefone</label>
            <input type="tel" name='phone-number' onChange={e => setPhone(e.target.value)}></input>

            <input type="submit" value="Adiiconar" />
          </form>
          

        </Section>

        <Section>
          <h2>Formação acadêmica</h2>
          <EduForm></EduForm>
          
        </Section>

        <Section>
          <h2>Experiência profisisonal</h2>
          <ProfessionalForm></ProfessionalForm>
        </Section>
      </div>
      

      <div className='curriculum'>
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone}</p>
      </div>
    </div>
  )
}

