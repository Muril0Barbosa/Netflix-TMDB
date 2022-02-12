import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OThiNzJjOTY1MGM0ODdhYzMyZTI2M2I5MmViZTgwYiIsInN1YiI6IjYyMDVlM2Y5OTQwOGVjMDA2ODE0YTZkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AyOzYhTzkD5dF7u2G0LTxU6jnIwrjZYn9WZcZwL0UQc";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})
