import {z} from "zod";

export const chargingWindowFormSchema = z.object({
    hours: z
        .number()
        .int()
        .min(1)
        .max(6),
});