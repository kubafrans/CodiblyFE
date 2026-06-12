import {Card, CardContent, Typography,} from '@mui/material';

import {EnergyMixPieChart} from './EnergyMixPieChart';
import type {EnergyMixCardProps} from "../../types/inerfaces.ts";


export const EnergyMixCard = ({day}: EnergyMixCardProps) => {
    if (!day) {
        return null;
    }

    const chartData =
        Object.entries(day.energySources)
            .map(([name, value]) => ({name, value,}));

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">
                    {day.date}
                </Typography>
                <Typography variant="body1">
                    Clean Energy: {' '} {
                    day.cleanEnergyPercentage
                }%
                </Typography>
                <EnergyMixPieChart data={chartData}/>
            </CardContent>
        </Card>
    );
};