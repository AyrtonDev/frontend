import axios from "axios"

export const getAccount = async (token: string) => {
    const response = await axios.get('http://18.116.20.56:5050/api/account', { headers: { Authorization: `Bearer ${token}` } })

    return response.data
}