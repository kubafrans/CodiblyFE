import {Card, CardContent, Typography} from "@mui/material";
import type {ChargingWindowResponse} from "../../types/chargingTypes.ts";

interface ChargingWindowResultProps {
    result?: ChargingWindowResponse | null;
}

export const ChargingWindowResult = ({result}: ChargingWindowResultProps) => {
    if (!result)
        return null;

    return (
        <Card>
            <CardContent>
                <Typography>
                    Start: {result.start}
                </Typography>
                <Typography>
                    End: {result.end}
                </Typography>
                <Typography>
                    Average: {result.averageCleanEnergyPercentage}%
                </Typography>
            </CardContent>
        </Card>
    );
};