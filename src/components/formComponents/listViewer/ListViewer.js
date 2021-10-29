import React from "react";

function ListViewer(props) {
  const { lstData } = props;

  const listElement =
    lstData &&
    lstData.map((options) => {
      const { name, status, created_at } = options;
      return (
        <tr>
          <td>{name}</td>
          <td>{status}</td>
          <td>{created_at}</td>
          {/* <td>{updated_at}</td> */}
        </tr>
      );
    });

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Created On</th>
          {/* <th>Updated On</th> */}
        </tr>
        {listElement}
      </table>
    </div>
  );
}

export default ListViewer;