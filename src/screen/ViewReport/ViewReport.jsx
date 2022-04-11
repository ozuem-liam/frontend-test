import React from 'react'
import { Row, Col } from 'antd'

// Import Components
import ReportTable from '../../components/ReportTable'
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'


const data = [
    {
      key: '1',
      name: 'February Report',
      date: '4th, October 2021, 11.20am',
    },
    {
      key: '2',
      name: 'March 2021 Report',
      date: '4th, October 2021, 11.20am',
    },
  ]; // rowSelection object indicates the need for row selection
function ViewReport() {
  return (
    <>
      <NavBar />
      <Row> 
        <Col span={6}>
            <SideBar />    
        </Col>  
        <Col span={18}>
            <div className="w-11/12 py-3 p-4 ml-3 mt-3 mt-6">
                <h1 className="m-0 mt-3 text-lg font-bold">View Report</h1>
            </div>
            {data 
            ? data.map(item => <ReportTable key={item.key} data={item} />)
            : "No Data"
            }   
        </Col>
    </Row>
    </>
  )
}

export default ViewReport
