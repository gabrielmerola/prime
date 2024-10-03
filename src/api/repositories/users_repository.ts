import { http_v1 } from '../http';

export class UsersRepository {
    async getAllUsers() {
        try{
            const response = await http_v1.get('/users', {
                headers: {
                    Authorization: localStorage.getItem('auth')
                }
            })
            return response.data
        } catch(error: any){

        }
    }
}