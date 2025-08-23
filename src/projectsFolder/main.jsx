import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Proj from './Proj.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Proj />
  </StrictMode>
)
