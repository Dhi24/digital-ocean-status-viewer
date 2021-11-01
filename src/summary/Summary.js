import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import tableSkeletonLoading from "../utility/jsFunctions";
import ListViewer from "./../components/formComponents/listViewer/ListViewer";
import "./../summary/Summary.css";
import getSummaryById from "../api/apiService/Summary.apiService";

function Summary(props) {
  const [isLoading, setLoading] = useState(true);
  const [dataSummary, setSummary] = useState(null);

  const lstData = dataSummary && dataSummary.components;

  const getSummaryData = () => {
    setLoading(true);
    getSummaryById().then((res) => {
      setSummary(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    getSummaryData();
    setInterval(() => {
      getSummaryData();
    }, 30000);
    return () => {};
  }, []);

  return (
    <div>
      <div class="d-flex justify-content-end">
        <Button variant="link" onClick={() => getSummaryData()}>
          Refresh
        </Button>
      </div>
      <div>
        {isLoading ? tableSkeletonLoading() : <ListViewer lstData={lstData} />}
      </div>
    </div>
  );
}

export default Summary;
