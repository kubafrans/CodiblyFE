export const formatDate = (iso: string): string => {
    const date = new Date(iso);

    const pad = (n: number) => String(n).padStart(2, '0');

    return `${pad(date.getUTCDate())}/${pad(date.getUTCMonth() + 1)}/${date.getUTCFullYear()} ` +
        `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}`;
};