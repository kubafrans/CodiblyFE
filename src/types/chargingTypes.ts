import {z} from "zod";
import {chargingWindowFormSchema} from "../components/ChargingWindow/ChargingWindowForm/ChargingWindowForm.schema.ts";

export interface ChargingWindowResponse {
    start: string;
    end: string;
    averageCleanEnergyPercentage: number;
}

export type FormData = z.infer<typeof chargingWindowFormSchema>;