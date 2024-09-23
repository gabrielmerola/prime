import { Routes, Route } from 'react-router-dom';
import { Login } from '../screens/Register/Login';
import { Cadastro } from '../screens/Register/Cadastro';

export function RegisterRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
    )
}