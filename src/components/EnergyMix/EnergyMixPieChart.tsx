import {Pie, PieChart, Tooltip,} from 'recharts';
import {COLORS} from "../../consts/colors.ts";

interface Props {
    data: {
        name: string;
        value: number;
    }[];
}

export const EnergyMixPieChart = ({data}: Props) => {
    const coloredData = data.map((item, index) => ({
        ...item,
        fill: COLORS[index % COLORS.length],
    }));

    return (
        <PieChart width={300} height={250}>
            <Pie
                data={coloredData}
                dataKey="value"
                outerRadius={95}
                innerRadius={45}
            />

            <Tooltip/>
        </PieChart>
    );
};