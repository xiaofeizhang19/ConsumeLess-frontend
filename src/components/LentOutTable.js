import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AuthService from './AuthService';

export default class RequestTable extends Component {

  render() {
    const { tableData, confirmRequest } = this.props;

    return (
      <div className="container">
        <Table striped bordered hover>
          <TableHeader />
          <TableBody tableData={tableData} confirmRequest={confirmRequest}/>
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
        <th>Return By</th>
        <th>Lent To</th>
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
          <td>{row.return_by}</td>
          <td>{row.username}</td>
        </tr>
      )
    })

    return <tbody>{rows}</tbody>
  }

}
