import {Cell, Pie, PieChart, Tooltip,} from 'recharts';

interface Props {
    data: {
        name: string;
        value: number;
    }[];
}

const COLORS = [
    '#1976d2',
    '#2e7d32',
    '#ed6c02',
    '#9c27b0',
    '#d32f2f',
    '#0288d1',
    '#689f38',
];

export const EnergyMixPieChart = ({data}: Props) => {
    return (
        <PieChart
            width={300}
            height={250}
        >
            <Pie
                data={data}
                dataKey="value"
                outerRadius={90}
            >
                {data.map(
                    (_, index) => (
                        <Cell
                            key={index}
                            fill={
                                COLORS[
                                index %
                                COLORS.length
                                    ]
                            }
                        />
                    ),
                )}
            </Pie>

            <Tooltip/>
        </PieChart>
    );
};