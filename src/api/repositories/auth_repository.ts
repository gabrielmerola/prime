import { http_v1 } from "../http"

export class AuthRepository {
    async login(email: string, password: string) {
        try {
            const response = await http_v1.post("/auth/login", {
                'email': email,
                'password': password
            })
            return response.data;
        } catch (error){
            throw new Error("ERRRROOOO")
        }
    }
}