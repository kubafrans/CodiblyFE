import {Pie, PieChart, Tooltip,} from 'recharts';
import {COLORS} from "../../consts/colors.ts";
import type {EnergyMixPieChartProps} from "../../types/inerfaces.ts";

export const EnergyMixPieChart = ({data}: EnergyMixPieChartProps) => {
    const coloredData = data.map((item, index) => ({
        ...item,
        fill: COLORS[index],
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