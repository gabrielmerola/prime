import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../screens/admin/Dashboard';

export function AdminRoutes() {
    return (
        <Routes>
            <Route path='/admin/dashboard' element={<Dashboard />} />
        </Routes>
    )
}