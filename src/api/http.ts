import axios from "axios";

export const http_v1 = axios.create({
    baseURL: "https://app.primeestagios.com.br/api/v1"
}) 