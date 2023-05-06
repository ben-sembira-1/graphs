import React, { useEffect, useState } from "react";

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function UpdatingLineChart() {
  const [start, setStart] = useState(0);
  const [data, setData] = useState<{ date: string; visitors: number }[]>([]);
  console.log(`start=${start}`);

  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setData((prev) =>
      [{ date: `${start}`, visitors: Math.random() * 20 }, ...prev].slice(
        0,
        100
      )
    );
  }, [start]);

  return (
    <LineChart
      data={data}
      width={600}
      height={400}
      margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
    >
      <XAxis dataKey="date" />
      <YAxis label="Visitantes" />
      <Line
        type="monotone"
        dataKey="visitors"
        stroke="#001529"
        activeDot={{ r: 5 }}
        isAnimationActive={false}
      />
      <Tooltip />
    </LineChart>
  );
}
