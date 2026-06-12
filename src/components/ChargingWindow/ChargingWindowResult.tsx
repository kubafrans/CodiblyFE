import {Typography} from "@mui/material";
import type {ChargingWindowResponse} from "../../types/chargingTypes.ts";
import {StyledBox} from "../../styles/styles.ts";
import {formatDate} from "../../helpers/formatDate.ts";

interface ChargingWindowResultProps {
    result?: ChargingWindowResponse | null;
}

export const ChargingWindowResult = ({result}: ChargingWindowResultProps) => {
    if (!result)
        return null;

    return (
        <StyledBox>
            Best time for charging:
            <Typography>
                Start: {formatDate(result.start)}
            </Typography>
            <Typography>
                End: {formatDate(result.end)}
            </Typography>
            <Typography>
                Average: {result.averageCleanEnergyPercentage}%
            </Typography>
        </StyledBox>
    );
};