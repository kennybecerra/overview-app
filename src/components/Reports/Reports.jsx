import React, { Component } from 'react';
import { Table, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios'
import * as keys from '../../constants/API.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class Reports extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AuthenticKey: 'aca4d856f83ecea3d8d840ec6103c062',
      QandlAPI: '5e7Mn_KeNYkXqBnfdEk8'
    };
  }

  componentDidMount() {

    // axios.get(`https://overview-app-8a94d.firebaseio.com/users.json`).then(res => {
    //   console.log('This is users')
    //   console.log(res.data)

    // }).catch(err => {
    //   console.log('there was an error')
    //   console.log(err)
    // })

    console.log(keys.QUANDL)
    // axios({
    //   url: `https://cors-anywhere.herokuapp.com/https://www.quandl.com/api/v3/databases/WIKI/metadata.json?api_key=${keys.QUANDL}`,
    //   method: 'get',
    //   headers: {
    //     accepts: 'application/json'
    //   }
    // }).then(res => {
    //   console.log('These are all the databases')
    //   console.log(res)

    // }).catch(err => {
    //   console.log('there was an error')
    //   console.log(err)
    // })


    axios({
      url: `https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/stable/tops?token=pk_57d0970b5d394d1c8c4fe06bd1b2fb94&symbols=aapl`,
      method: 'get',
    }).then(res => {
      console.log('These are all the databases')
      console.log(res)

    }).catch(err => {
      console.log('there was an error')
      console.log(err)
    })

    axios({
      url: `https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_57d0970b5d394d1c8c4fe06bd1b2fb94`,
      method: 'get',
    }).then(res => {
      console.log('These are all the databases')
      console.log(res)

    }).catch(err => {
      console.log('there was an error')
      console.log(err)
    })

    // axios.get(`https://cors-anywhere.herokuapp.com/https://www.quandl.com/api/v3/databases/WIKI/metadata/data.json?api_key=${keys.QUANDL}`).then(res => {
    //   console.log('These are all tikers')
    //   console.log(res)

    // }).catch(err => {
    //   console.log('there was an error')
    //   console.log(err)
    // })




  }

  render() {

    const data = [{
      name: 'Kenny Becerra',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23
      }
    }]
    const columns = [{
      Header: 'Name',
      accessor: 'name',
    }, {
      Header: 'age',
      accessor: 'age'
    }, {
      id: 'friendName',
      Header: 'Friend Name',
      accessor: d => d.friend.name
    }]

    return (
      <>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} sm={8} md={8} lg={8}>
            <ReactTable data={data}
              columns={columns} />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} sm={8} md={8} lg={8} >
            <Card>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Reports;