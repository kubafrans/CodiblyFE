import {renderHook, waitFor} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useEnergyMix} from "../hooks/useEnergyMix";
import * as api from "../api/energyAPI";

const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {retry: false},
        },
    });

    return ({children}: any) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

jest.mock("../api/energyAPI");

beforeEach(() => {
    (api.getEnergyMix as jest.Mock).mockResolvedValue([
        {
            date: "2026-06-12",
            cleanEnergyPercentage: 50,
            sources: {solar: 50, gas: 50},
        },
    ]);
});

afterEach(() => {
    jest.resetAllMocks();
});

it("fetches energy mix", async () => {
    const {result} = renderHook(() => useEnergyMix(), {
        wrapper: createWrapper(),
    });

    await waitFor(() => {
        expect(result.current.data).toEqual([
            {
                date: "2026-06-12",
                cleanEnergyPercentage: 50,
                sources: {solar: 50, gas: 50},
            },
        ]);
    });
});