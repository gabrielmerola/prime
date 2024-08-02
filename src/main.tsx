import './index.css'
import 'primeicons/primeicons.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { UserRoutes } from './routes/UserRoutes.tsx'
import { RegisterRoutes } from './routes/RegisterRoutes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/prime'>
      {/* Rotas Principais */}
      <UserRoutes />
      {/* Rotas de Registro */}
      <RegisterRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
