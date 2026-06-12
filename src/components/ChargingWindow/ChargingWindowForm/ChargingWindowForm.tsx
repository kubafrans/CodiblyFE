import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {chargingWindowFormSchema} from "./ChargingWindowForm.schema.ts";
import {Button, TextField} from "@mui/material";
import {z} from "zod";
import {useChargingWindow} from "../../../hooks/useChargingWindow.tsx";

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
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <TextField
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
        </form>
    )
}