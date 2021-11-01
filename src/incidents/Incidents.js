import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import tableSkeletonLoading from "../utility/jsFunctions";
import ListViewer from "./../components/formComponents/listViewer/ListViewer";
import "./../incidents/Incidents.css";
import getIncidentsById from "../api/apiService/Incidents.apiService";

function Incidents(props) {
  const [isLoading, setLoading] = useState(true);
  const [dataIncidents, setIncidents] = useState(null);

  const lstData = dataIncidents && dataIncidents.incidents;

  const getIncidentsData = () => {
    setLoading(true);
    getIncidentsById().then((res) => {
      setIncidents(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    getIncidentsData();
    setInterval(() => {
      getIncidentsData();
    }, 30000);
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
        {isLoading ? tableSkeletonLoading() : <ListViewer lstData={lstData} />}
      </div>
    </div>
  );
}

export default Incidents;
