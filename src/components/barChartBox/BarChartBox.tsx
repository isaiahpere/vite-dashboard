import { FC } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

import "./BarChartBox.scss";

import * as T from "../../types";

const BarChartBox: FC<T.IBarChartBox> = ({
  title,
  color,
  dataKey,
  chartData,
}) => {
  return (
    <div className="barChartBox">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
