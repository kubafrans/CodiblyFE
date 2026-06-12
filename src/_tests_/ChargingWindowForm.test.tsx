import {fireEvent, render, screen} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ChargingWindowForm} from "../components/ChargingWindow/ChargingWindowForm/ChargingWindowForm";
import '@testing-library/jest-dom';

const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            mutations: {
                retry: false,
            },
            queries: {
                retry: false,
            },
        },
    });

    return ({children}: any) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

it('validates hours input', async () => {
    render(<ChargingWindowForm/>, {
        wrapper: createWrapper(),
    });

    const input = screen.getByLabelText('Hours');

    fireEvent.change(input, {
        target: {value: '7'},
    });

    fireEvent.click(screen.getByText('Calculate'));

    expect(
        await screen.findByText("Invalid, value must be less than 6"),
    ).toBeInTheDocument();
});