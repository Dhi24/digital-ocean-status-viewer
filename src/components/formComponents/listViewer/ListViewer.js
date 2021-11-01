import React from "react";
import { Table } from "react-bootstrap";

function ListViewer(props) {
  const { lstData } = props;

  const listElement =
    lstData &&
    lstData.map((options) => {
      const { name, status } = options;
      return (
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{status}</td>
            {/* <td>{created_at}</td>
          <td>{updated_at}</td> */}
          </tr>
        </tbody>
      );
    });

  return (
    <div>
      <Table responsive hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            {/* <th>Created On</th>
          <th>Updated On</th> */}
          </tr>
        </thead>
        {listElement}
      </Table>
    </div>
  );
}

export default ListViewer;
