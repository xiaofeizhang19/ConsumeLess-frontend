import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default class ItemsTable extends Component {
  render() {
    const { tableData } = this.props;

    return (
      <div className="container">
        <Table striped bordered hover>
          <TableHeader />
          <TableBody tableData={tableData} />
        </Table>
      </div>
    )
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Item</th>
        <th>Description</th>
        <th>Category</th>
        <th>Overdue Charge</th>
        <th>Deposit</th>
        <th>Action</th>
      </tr>
    </thead>
  )
}
  
const TableBody = props => {
  if (!props.tableData.length) {
    return null;
  } else {
    const rows = props.tableData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.description}</td>
          <td>{row.category}</td>
          <td>{row.overdue_charge}</td>
          <td>{row.deposit}</td>
          <div class="col text-center">
            <Button variant="outline-secondary" size="sm">Update</Button>
          </div>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }
  
}