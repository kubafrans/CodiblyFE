import {Card, CardContent, Typography,} from '@mui/material';

import type {EnergyMixDay} from '../../types/energyTypes';

import {EnergyMixPieChart} from './EnergyMixPieChart';

interface Props {
    day: EnergyMixDay;
}

export const EnergyMixCard = ({day}: Props) => {
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