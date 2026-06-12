import axios from 'axios';

export const api = axios.create({
    baseURL:
        'http://localhost:3000',
});

export const getEnergyMix =
    async () => {
        const response =
            await api.get('/energy/mix');

        return response.data;
    };

export const getChargingWindow =
    async (hours: number) => {

        const response =
            await api.get(
                `/charging-window?hours=${hours}`,
            );

        return response.data;
    };