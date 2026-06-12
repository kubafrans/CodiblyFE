import {render, screen} from '@testing-library/react';
import {EnergyMixCard} from '../components/EnergyMix/EnergyMixCard';
import '@testing-library/jest-dom';

it('renders energy data', () => {
    render(
        <EnergyMixCard
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