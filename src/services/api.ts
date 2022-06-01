import axios from "axios";

export const api = axios.create({
    baseURL: "https://do-it-fake-api.herokuapp.com/"
})