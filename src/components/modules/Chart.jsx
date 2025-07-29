import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Line,
  YAxis,
  XAxis,
  Legend,
  Tooltip,
} from "recharts";

import { convertData } from "../../helpers/convertData";

const Chart = ({ chart, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={convertData(chart, type)}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
          dot={false}
        />
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
