import axios from 'axios';

export const baseAxios = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000'
});

export const setupAxios = () => {
    baseAxios.interceptors.response.use(
        function (response) {
            return response;
        },
        async function (error) {
            return Promise.reject(error);
        }
    );
};
