import React from 'react';
import { Checkbox, Col, Row } from 'antd';

import MessageSquare from '../assets/message-square.png'


function ReportTable({ data }) {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div className="w-11/12 py-3 p-4 border ml-6">
    <Row>
      <Col span={12}>
        <div className="flex items-center justify-start mt-2">
          <Checkbox onChange={onChange}></Checkbox>
          <p className="ml-3 mb-0">{data.name}</p>
          <p className="ml-3 mb-0">{data.date}</p>
        </div>
      </Col>
      <Col span={12}>
        <div className="flex items-center justify-end">
        <button className="inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">View</button>
        <img src={MessageSquare} alt="icon" className="w-4 h-4 ml-3" />
        </div>
      </Col>
    </Row>
    </div>
  )
}

export default ReportTable
