import {useMutation} from '@tanstack/react-query';

import {getChargingWindow} from '../api/energyAPI';

export const useChargingWindow =
    () =>
        useMutation({
            mutationFn:
            getChargingWindow,
        });