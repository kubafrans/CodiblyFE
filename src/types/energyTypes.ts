import type {JSX} from "react/jsx-runtime";

export interface EnergyMixDay {
    date: string;
    cleanEnergyPercentage: number;
    energySources: Record<string, number>;

    map(arg0: (day: any) => JSX.Element): import("react").ReactNode;
}