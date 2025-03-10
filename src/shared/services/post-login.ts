import axios from "axios";

export const postLogin = async (email: string, password: string) => {
    const response = await axios.post('http://18.116.20.56:5050/api/login', { email, password });

    return response.data
}