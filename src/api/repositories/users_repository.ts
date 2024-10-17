import { http_v1 } from '../http';

export class UsersRepository {
    async getAllUsers(page:any) {
        try{
            const response = await http_v1.get(`/users?page=${page}`, {
                headers: {
                    Authorization: localStorage.getItem('auth')
                }
            })
            return response.data
        } catch(error: any){
            console.log(error)
        }
    }
}