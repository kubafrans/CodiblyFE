import {render, screen} from '@testing-library/react';
import {EnergyMixCard} from '../components/EnergyMix/EnergyMixCard';
import '@testing-library/jest-dom';

it('renders energy data', () => {
    render(
        <EnergyMixCard
            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            day={{
                date: '2026-06-12',
                cleanEnergyPercentage: 50,
                energySources: {biomass: 30, solar: 20, coal: 50},
            }}
        />
    );

    expect(screen.getByText('2026-06-12')).toBeInTheDocument();
    expect(screen.getByText(/50\s*%/)).toBeInTheDocument();
});