import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import Navigation from './Navigation'

function AllData() {
  const [allData] = useState(localStorage.getItem('allAccounts') ? JSON.parse(localStorage.getItem('allAccounts')) : [])


  return (
    <>
      <Navigation />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            allData && allData.map((e, index) => {
              return <tr>
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
              </tr>
            })
          }

        </tbody>
      </Table>
    </>
  )
}

export default AllData