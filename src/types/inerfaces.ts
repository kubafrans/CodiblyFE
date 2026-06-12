import type {ChargingWindowResponse} from "./chargingTypes.ts";
import type {EnergyMixDay} from "./energyTypes.ts";

export interface ChargingWindowResultProps {
    result?: ChargingWindowResponse | null;
}

export interface ChargingWindowFormProps {
    onResultReceived?: (result: ChargingWindowResponse) => void;
}

export interface EnergyMixCardProps {
    day: EnergyMixDay;
}

export interface EnergyMixPieChartProps {
    data: {
        name: string;
        value: number;
    }[];
}
