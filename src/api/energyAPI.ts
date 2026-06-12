import axios from 'axios';
import type {EnergyMixDay} from "../types/energyTypes.ts";

export const api = axios.create({
    baseURL:
        'https://codiblybe.onrender.com',
});

export const getEnergyMix =
    async (): Promise<EnergyMixDay | null> => {
        const response =
            await api.get('/energy/mix');

        if (!response.data)
            return null;

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