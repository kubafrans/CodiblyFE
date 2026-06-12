import { useQuery } from '@tanstack/react-query';

import { getEnergyMix } from '../api/energyAPI';

export const useEnergyMix = () =>
    useQuery({
        queryKey: ['energy-mix'],
        queryFn: getEnergyMix,
    });