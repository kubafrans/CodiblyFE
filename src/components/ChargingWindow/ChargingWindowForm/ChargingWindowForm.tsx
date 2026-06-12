import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {chargingWindowFormSchema} from "./ChargingWindowForm.schema";
import {Button} from "@mui/material";
import {useChargingWindow} from "../../../hooks/useChargingWindow";
import {StyledForm, StyledTextField} from "../../../styles/styles";
import type {ChargingWindowResponse, FormData} from "../../../types/chargingTypes";
import type {ChargingWindowFormProps} from "../../../types/inerfaces";

export const ChargingWindowForm = ({onResultReceived}: ChargingWindowFormProps) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        resolver:
            zodResolver(chargingWindowFormSchema),
    });

    const {mutate, isPending} = useChargingWindow();

    const onFormSubmit = (data: FormData) => {
        mutate(data.hours, {
            onSuccess: (result: ChargingWindowResponse) => {
                onResultReceived?.(result);
            },
            onError: (error) => {
                console.error("Charging window error:", error);
            },
        });
    };

    return (
        <StyledForm onSubmit={handleSubmit(onFormSubmit)}>
            <StyledTextField
                type="number"
                label="Hours"
                error={!!errors.hours}
                helperText={errors.hours?.message}
                {...register('hours', {
                    valueAsNumber: true,
                })}
            />
            <Button
                type="submit"
                variant="contained"
                disabled={isPending}
            >
                Calculate
            </Button>
        </StyledForm>
    )
}