import {useEnergyMix} from "../hooks/useEnergyMix.tsx";
import {Box, Container, Grid} from "@mui/material";
import {EnergyMixCard} from "./EnergyMix/EnergyMixCard.tsx";
import {ChargingWindowForm} from "./ChargingWindow/ChargingWindowForm/ChargingWindowForm.tsx";
import {ChargingWindowResult} from "./ChargingWindow/ChargingWindowResult.tsx";
import {useState} from "react";
import type {ChargingWindowResponse} from "../types/chargingTypes.ts";

export const Dashboard = () => {

    const {
        data,
        isLoading,
    } = useEnergyMix();

    const [chargingResult, setChargingResult] = useState<ChargingWindowResponse | null>(null);

    if (isLoading)
        return <>Loading...</>;

    if (!data)
        return <>Loading...</>;

    return (
        <Container>
            <Grid container spacing={2}>
                {data.map(day => (
                    <Box key={day.date}>
                        <EnergyMixCard day={day}/>
                    </Box>
                ))}
            </Grid>
            <Box sx={{mt: 4}}>
                <ChargingWindowForm onResultReceived={setChargingResult}/>
                <Box sx={{mt: 2}}>
                    <ChargingWindowResult result={chargingResult}/>
                </Box>
            </Box>
        </Container>
    );
};