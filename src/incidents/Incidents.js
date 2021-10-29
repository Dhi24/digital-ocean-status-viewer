import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import ListViewer from "./../components/formComponents/listViewer/ListViewer";
import "./../incidents/Incidents.css";
import getIncidentsById from "../api/apiService/Incidents.apiService";

function Incidents(props) {
  const [dataIncidents, setIncidents] = useState(null);

  const lstData = dataIncidents && dataIncidents.incidents;

  const getIncidentsData = () => {
    getIncidentsById().then((res) => {
      setIncidents(res);
    });
  };

  setTimeout(function () {
    getIncidentsData();
  }, 300000);

  useEffect(() => {
    getIncidentsData();
    return () => {};
  }, []);

  return (
    <div>
      <div class="d-flex justify-content-end">
        <Button variant="link" onClick={() => getIncidentsData()}>
          Refresh
        </Button>
      </div>
      <div>
        <ListViewer lstData={lstData} />
      </div>
    </div>
  );
}

export default Incidents;
