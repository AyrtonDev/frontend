import axios from "axios"

export const getMovies = async (token: string) => {
    const response = await axios.get('http://18.116.20.56:5050/api/movies', { headers: { Authorization: `Bearer ${token}` } })

    return response.data
}