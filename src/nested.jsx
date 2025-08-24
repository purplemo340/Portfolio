import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import Project from './Project.jsx'

import Header from './Header.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Header />
    <Project />
  </StrictMode>,
)
