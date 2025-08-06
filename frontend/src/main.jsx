import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesApp from './utils/router/RoutesApp.jsx'
import './index.css'
import './utils/setupColors.js';
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>
  </StrictMode>,
)
