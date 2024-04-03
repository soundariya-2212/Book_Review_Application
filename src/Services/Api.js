import axios from 'axios';

const URL='http://localhost:3000'

export const getUser = async () => {
    try {
        const response = await axios.get(`${URL}/api/v1/user`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addUser = async (userData) => {
    try {
        const response = await axios.post(`${URL}/api/v1/user/save`, userData);
        return response;
    } catch (error) {
        throw error;
    }
};

export const editUser = async (id, userData) => {
    try {
        const response = await axios.put(`${URL}/api/v1/user/${id}`, userData);
        return response;
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${URL}/api/v1/user/${id}`);
        return response;
    } catch (error) {
        throw error;
    }
};
