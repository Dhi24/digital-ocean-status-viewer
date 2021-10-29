import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import ListViewer from "./../components/formComponents/listViewer/ListViewer";
import "./../summary/Summary.css";
import getSummaryById from "../api/apiService/Summary.apiService";

function Summary(props) {
  const [dataSummary, setSummary] = useState(null);

  const lstData = dataSummary && dataSummary.components;

  const getSummaryData = () => {
    getSummaryById().then((res) => {
      setSummary(res);
    });
  };

  setTimeout(function () {
    getSummaryData();
  }, 300000);

  useEffect(() => {
    getSummaryData();
    return () => {};
  }, []);

  return (
    <div>
      <div class="d-flex justify-content-end">
        <Button variant="primary" onClick={() => getSummaryData()}>
          Refresh
        </Button>
      </div>
      <div>
        <ListViewer lstData={lstData} />
      </div>
    </div>
  );
}

export default Summary;
