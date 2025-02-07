import axios from "axios"

const apiurl="http://localhost:3000"

export const api=axios.create({
    baseURL:apiurl
})