import React, { Component } from 'react';
import { Table, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios'

class Reports extends Component {
  constructor(props) {
    super(props);
    this.username = 'K3BI'
    this.password = 'Actuarial23237723180000000'

    this.state = {
      AuthenticKey: 'aca4d856f83ecea3d8d840ec6103c062'
    };
  }

  componentDidMount() {

    axios.get(`https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key=aca4d856f83ecea3d8d840ec6103c062&method=aj.jobs.search&format=json&location=sanfrancisco&keywords=javascript,css,html,react,development,web,frontend&perpage=100&`).then(res => {

      console.log(res)


    }).catch(err => {
      console.log('there was an error')
      console.log(err)
    })

    axios.get(`https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key=aca4d856f83ecea3d8d840ec6103c062&method=aj.jobs.getlocations&format=json`).then(res => {

      console.log(res)


    }).catch(err => {
      console.log('there was an error')
      console.log(err)
    })

    console.log(this.username);

  }

  render() {
    return (
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
    );
  }
}

export default Reports;