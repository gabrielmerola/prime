import { Routes, Route } from 'react-router-dom'
import { Login } from '../screens/Register/Login/login'

export function RegisterRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}