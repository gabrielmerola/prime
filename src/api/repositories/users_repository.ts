import { http_v1 } from '../http';

export class UsersRepository {
    async getAllUsers(page:any, name?: string) {
        try{
            const response = await http_v1.get(`/users?page=${page}${name == null ? "" : `&name=${name}`}`, {
                headers: {
                    Authorization: localStorage.getItem('auth')
                }
            })
            return response.data
        } catch(error: any){
            console.log(error)
        }
    }

    async getCurriculum(id: number) {
        try{
            const response = await http_v1.post(`/users/curriculum/${id}`, {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'application/pdf',
                    Authorization: localStorage.getItem('auth')
                }
            })
            return response.data
        } catch(error: any){
            console.log(error)
        }
    }
}