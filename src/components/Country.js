import React from "react";

const Country = props => {
  console.log(props);
  return (
    <div>
      <div className="row"></div>
      Country:{props.stat.Country} -- Total Confirmed:
      {props.stat.TotalConfirmed} Total Deaths: {props.stat.TotalDeaths}
    </div>
  );
};

export default Country;
