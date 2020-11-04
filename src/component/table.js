import React from "react";
import { Table } from "react-bootstrap";

function TableCom({ firstname, lastname, age }) {
  return (
    <div>
      <Table striped borderless hover>
        <thead>
          <tr>
            <th>age</th>
            <th>firstname</th>
            <th>lastname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{age}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableCom;
