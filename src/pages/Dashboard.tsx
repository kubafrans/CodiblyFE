import {useEnergyMix} from "../hooks/useEnergyMix.tsx";
import {Box, CircularProgress, Grid, Typography} from "@mui/material";
import {EnergyMixCard} from "../components/EnergyMix/EnergyMixCard.tsx";
import {ChargingWindowForm} from "../components/ChargingWindow/ChargingWindowForm/ChargingWindowForm.tsx";
import {ChargingWindowResult} from "../components/ChargingWindow/ChargingWindowResult.tsx";
import {useState} from "react";
import type {ChargingWindowResponse} from "../types/chargingTypes.ts";
import {CenteredContainer, StyledContainer, StyledStack} from "../styles/styles.ts";
import {NoDataView} from "../components/ErrorComponents/NoDataView.tsx";

export const Dashboard = () => {

    const {
        data,
        isLoading,
    } = useEnergyMix();

    const [chargingResult, setChargingResult] = useState<ChargingWindowResponse | null>(null);

    if (isLoading)
        return <CenteredContainer>
            <CircularProgress color="secondary"/>
        </CenteredContainer>

    if (!data)
        return <NoDataView/>;

    return (
        <StyledContainer>
            <Typography variant="body1" component="div">Energy charts:</Typography>
            <Grid container spacing={2}>
                {data.map(day => (
                    <Box key={day.date}>
                        <EnergyMixCard day={day}/>
                    </Box>
                ))}
            </Grid>
            <Typography variant="body1" component="div">Charging window (provide number 1-6):</Typography>
            <StyledStack>
                <ChargingWindowForm onResultReceived={setChargingResult}/>
            </StyledStack>
            <ChargingWindowResult result={chargingResult}/>
        </StyledContainer>
    );
};