import React, { Component } from 'react';
import { Table, Row, Col, Card } from 'react-bootstrap';

class Reports extends Component {
  constructor(props) {
    super(props);
    this.username = 'K3BI'
    this.password = 'Actuarial23237723180000000'

    this.state = {};
  }

  componentDidMount() {

    const credentials = {
      username: 'K3BI',
      password: 'Actuarial23237723180000000'
    }

    $SP().create(credentials).list("tblAssessments").get().then(function (data) {
      for (var i = 0; i < data.length; i++) console.log(data[i].getAttribute("Title"));
    }).catch(function (err) {
      console.log("Error => ", err)
    });

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