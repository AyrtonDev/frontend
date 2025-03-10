import axios from "axios"

export const getCategories = async (token: string) => {
    const response = await axios.get('http://18.116.20.56:5050/api/categories', { headers: { Authorization: `Bearer ${token}` } })

    return response.data
}