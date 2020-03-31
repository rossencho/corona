import React, { useContext, useState, useEffect } from "react";
import { StatisticsContext } from "../contexts/StatisticsContext";
import { Segment, Table } from "semantic-ui-react";
import "./Table.scss";
import Country from "./Country";

const StatisticsTable = () => {
  const [state, dispatch] = useContext(StatisticsContext);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(state.statistics);
  }, [state]);

  if (state.statistics.length) {
    countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    const rows = countries.map(item => (
      <Table.Row>
        <Table.Cell>{item.Country}</Table.Cell>
        <Table.Cell>{item.TotalConfirmed}</Table.Cell>
        <Table.Cell>{item.TotalDeaths}</Table.Cell>
        <Table.Cell>{item.TotalRecovered}</Table.Cell>
        <Table.Cell>{item.NewConfirmed}</Table.Cell>
        <Table.Cell>{item.NewDeaths}</Table.Cell>
        <Table.Cell>{item.NewRecovered}</Table.Cell>
      </Table.Row>
    ));

    return (
      <div className="container">
        <Segment>
          <Table celled striped selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Country</Table.HeaderCell>
                <Table.HeaderCell>Total confirmed</Table.HeaderCell>
                <Table.HeaderCell>Total deaths</Table.HeaderCell>
                <Table.HeaderCell>Total recovered</Table.HeaderCell>
                <Table.HeaderCell>New confirmed</Table.HeaderCell>
                <Table.HeaderCell>New deaths</Table.HeaderCell>
                <Table.HeaderCell>New recovered</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{rows}</Table.Body>
          </Table>
        </Segment>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default StatisticsTable;