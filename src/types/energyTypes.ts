export interface EnergyMixDay {
    date: string;
    cleanEnergyPercentage: number;
    sources: Record<string, number>;
}