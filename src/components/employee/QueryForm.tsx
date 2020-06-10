import React, { Component, useState, useEffect } from "react"
import { Form, Input, Select, Button } from "antd"
// import { FormComponentProps } from 'antd/lib/form';

// import { get } from '../../utils/request';
// import { GET_EMPLOYEE_URL } from '../../constants/urls';
// import { EmployeeRequest, EmployeeResponse } from '../../interface/employee';

const { Option } = Select

class QueryForm extends Component {
  render() {
    return (
      <Form layout="inline">
        <Form.Item>
          <Input placeholder="姓名" style={{ width: 120 }} allowClear />
        </Form.Item>
        <Form.Item>
          <Select placeholder="部门" style={{ width: 120 }} allowClear>
            <Option value={1}>技术部</Option>
            <Option value={2}>产品部</Option>
            <Option value={3}>市场部</Option>
            <Option value={4}>运营部</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary">查询</Button>
        </Form.Item>
      </Form>
    )
  }
}

// const WrapQueryForm = Form.create<Props>({
//   name: "employee_query",
// })(QueryForm)

export default QueryForm