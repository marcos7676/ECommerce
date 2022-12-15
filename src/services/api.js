import Axios from "axios";

const api = Axios.create({
    baseURL: "https://63069afec0d0f2b8011f9944.mockapi.io",
});

export default api;