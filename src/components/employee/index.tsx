import React, { Component, useState } from "react"
import { Table } from "antd"

import "./index.css"

import QueryForm from "./QueryForm"

import { employeeColumns } from "./colums"

class Employee extends Component {
  render() {
    return (
      <>
        <QueryForm />
        {/* {this.getTotal()} */}
        <Table columns={employeeColumns} dataSource={[]} className="table" />
      </>
    )
  }
}

export default Employee
