import {z} from "zod";

export const chargingWindowFormSchema = z.object({
    hours: z
        .number('Invalid input type')
        .int("Invalid, value must be an integer")
        .min(1, "Invalid, value must be at least 1")
        .max(6, "Invalid, value must be less than 6"),
});