import { Link } from "react-router-dom";
import "./ChartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { FC } from "react";

import * as T from "../../types";

const ChartBox: FC<T.IChartBox> = ({
  color,
  icon,
  title,
  number,
  dataKey,
  percentage,
  chartData,
}) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={icon} alt="" />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link to={"/"} style={{ color: color }}>
          View All
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: -50, y: 50 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className={`percentage ${percentage > 0 ? "positive" : "negative"}`}
          >{`${percentage}%`}</span>
          <span className="duration">This Month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
