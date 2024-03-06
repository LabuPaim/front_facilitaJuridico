import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/client";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const api = {
    GET: async (link: string) => {
        try {
            const response = await axios.get(link);

            return response.data;
        } catch (err) {
            console.log(err);
        }
    },

    POST: async (link: string, dados: any) => {
        try {
            const response = await axios.post(link, dados);
            return response;
        } catch (err) {
            console.log(err);
        }
    },
};
