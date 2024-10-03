import { jwtDecode } from "jwt-decode"

type TokenDTO = {
    user: User
}

type User = {
    id: string;
    name: string;
    role: string;
}

export function decodeToken(token: string): User {
    const user: TokenDTO = jwtDecode(token)
    
    return user.user;
}