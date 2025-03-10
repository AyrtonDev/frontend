import axios from "axios";

export const getMovieById = async (id: string, token: string) => {
    const response = await axios.get('http://18.116.20.56:5050/api/movies/' + id, { headers: { Authorization: `Bearer ${token}` } });

    return response.data
}