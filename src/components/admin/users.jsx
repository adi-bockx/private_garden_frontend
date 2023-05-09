import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,Table} from "reactstrap"
import { ExtraLargeTables,LargeTable,SmallTable,ExtraSmallTable,DefaultTable } from "../../constant";

const SizingTable = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Tables" title="Users List"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{"All Users Information"}</h5>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table size="xl">
                                    <thead>
                                        <tr>
                                            <th>{"#"}</th>
                                            <th>{"Name"}</th>
                                            <th>{"Email"}</th>
                                            <th>{"Wallet"}</th>
                                            <th>{"Join Date"}</th>
                                            <th>{"Status"}</th>
                                            <th>{"Action"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{"1"}</th>
                                            <td>{"Mark"}</td>
                                            <td>{"abc@mdo"}</td>
                                            <td>{"0x00000000000000000000"}</td>
                                            <td>{"12/08/2022"}</td>
                                            <td><div className='font-danger'>Inactive</div></td>
                                            <td><div><span><i className="fa fa-sign-in" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"2"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"abc@fat"}</td>
                                            <td>{"0x00000000000000000000"}</td>
                                            <td>{"12/08/2022"}</td>
                                            <td><div className='font-success'>Active</div></td>
                                            <td><div><span><i className="fa fa-sign-in" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div></td>

                                        </tr>
                                        <tr>
                                            <th scope="row">{"3"}</th>
                                            <td>{"Larry"}</td>
                                            <td>{"abc@twitter"}</td>
                                            <td>{"0x00000000000000000000"}</td>
                                            <td>{"12/08/2022"}</td>
                                            <td><div className='font-success'>Active</div></td>
                                            <td><div><span><i className="fa fa-sign-in" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
      <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
    </div></td>


                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default SizingTable;