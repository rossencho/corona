import React, { useEffect, useState } from "react";
import { BarChart, YAxis, XAxis, CartesianGrid, Bar, Tooltip } from "recharts";
import { getNewConfirmed } from "../services/getStatistics";

const CountryInfo = (props) => {
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let stats = [];
  let newData = [];
  let countryName = props.match.params.country;
  countryName = countryName.toUpperCase();

  const loadConfirmed = async (country) => {
    let res = await getNewConfirmed(country);
    for (let k = 0; k < res.data.length; k++) {
      if (!res.data[k].hasOwnProperty("Province")) {
        newData.push(res.data[k]);
      }
    }
    for (let i = 0; i < newData.length - 1; i++) {
      let row = {};
      row.name = newData[i].Date.slice(0, 10);
      if (i) {
        if (newData[i].Cases) {
          row.value = newData[i].Cases - res.data[i - 1].Cases;
        } else {
          row.value = newData[i].Cases = 0;
        }
      } else {
        row.value = newData[i].Cases;
      }
      stats.push(row);
    }

    setChartData(stats);
    setIsLoading(false);
  };
  useEffect(() => {
    loadConfirmed(props.match.params.country);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>Loading ... </div>
      ) : (
        <div style={{ marginLeft: 220 }}>
          {countryName}
          <br />
          <BarChart
            width={1030}
            height={450}
            data={chartData}
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            title={props.match.params.country}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{
                value: "Date",
                angle: 0,
                position: "insideBottomRight",
                dy: 10,
              }}
            />
            <YAxis
              label={{
                value: "Confirmed cases",
                angle: -90,
                position: "insideLeft",
                dx: -15,
                dy: 10,
              }}
            />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8"></Bar>
          </BarChart>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
