import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {chargingWindowFormSchema} from "./ChargingWindowForm.schema.ts";
import {Button} from "@mui/material";
import {z} from "zod";
import {useChargingWindow} from "../../../hooks/useChargingWindow.tsx";
import {StyledForm, StyledTextField} from "../../../styles/styles.ts";

type FormData = z.infer<typeof chargingWindowFormSchema>;

interface ChargingWindowFormProps {
    onResultReceived?: (result: any) => void;
}

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
            onSuccess: (result) => {
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