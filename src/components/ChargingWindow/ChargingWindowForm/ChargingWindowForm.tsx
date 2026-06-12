import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {chargingWindowFormSchema} from "./ChargingWindowForm.schema.ts";
import {Button} from "@mui/material";
import {useChargingWindow} from "../../../hooks/useChargingWindow.tsx";
import {StyledForm, StyledTextField} from "../../../styles/styles.ts";
import type {ChargingWindowResponse, FormData} from "../../../types/chargingTypes.ts";
import type {ChargingWindowFormProps} from "../../../types/inerfaces.ts";

export const ChargingWindowForm = ({onResultReceived}: ChargingWindowFormProps) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        resolver:
            zodResolver(chargingWindowFormSchema),
    });

    const {mutate} = useChargingWindow();

    const onFormSubmit = (data: FormData) => {
        mutate(data.hours, {
            onSuccess: (result: ChargingWindowResponse) => {
                onResultReceived?.(result);
            }
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
            >
                Calculate
            </Button>
        </StyledForm>
    )
}