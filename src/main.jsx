import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Componentes: seções pra adicionar inputs / inputs / Vizualização do CV

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
