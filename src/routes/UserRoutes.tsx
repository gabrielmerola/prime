import { Routes, Route } from 'react-router-dom'

import { Home } from '../screens/Users/Home'
import { ParaEmpresas } from '../screens/Users/paraEmpresas'
import { Prime } from '../screens/Users/prime'
import { Dicas } from '../screens/Users/dicas'
import { Lei } from '../screens/Users/lei-11-788'
import { Orientacoes } from '../screens/Users/orientacoes'
import { Estudantes } from '../screens/Users/estudantes'
import { Ie } from '../screens/Users/ie'
import { Contato } from '../screens/Users/contato'

export function UserRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/prime' element={<Prime />} />
            <Route path='/dicas' element={<Dicas />} />
            <Route path='/para-empresas' element={<ParaEmpresas />} />
            <Route path='/lei-11-788' element={<Lei />} />
            <Route path='/orientacoes' element={<Orientacoes />} />
            <Route path='/estudantes' element={<Estudantes />} />
            <Route path='/ie' element={<Ie />} />
            <Route path='/contato' element={<Contato />} />
        </Routes>
    )
}