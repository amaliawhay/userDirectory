import React, { Component } from "react";
import { Table } from "react-bootstrap";
import AgeButton from "../component/button";

class TableMake extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      students: [
        { id: 1, name: "Sponge", age: 12, lastName: "Bob" },
        {
          id: 2,
          name: "Plankton",
          age: 100,
          lastName: "Evil",
        },
        {
          id: 3,
          name: "Mr",
          age: 50,
          lastName: "Krabs",
        },
        {
          id: 4,
          name: "Pearl",
          age: 25,
          lastName: "Krabs",
        },
      ],
      show: true,
    };
  }

  testFunction = () => {
    this.state.students.sort(
      (a, b) => parseFloat(a.age) - parseFloat(b.age)
    );
    // console.log(this.state.students)
    this.setState({
      ...this.state,
      students: this.state.students.sort(
        (a, b) => parseFloat(a.age) - parseFloat(b.age)
      ),
    });
    // console.log(this.state.students)
  };

  render() {
    return (
      <div>
        <br />

        <AgeButton
          onClick={(event) => this.handleAgeButton(event)}
        />
        {this.state.show ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </Table>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </Table>
        )}
      </div>
    );
  }
}
export default TableMake;
