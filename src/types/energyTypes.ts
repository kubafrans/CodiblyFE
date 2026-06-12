export interface EnergyMixDay {
    date: string;
    cleanEnergyPercentage: number;
    energySources: Record<string, number>;
}