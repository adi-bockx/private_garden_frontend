import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import Dropzone from 'react-dropzone-uploader'
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import DatePicker from "react-datepicker";
import { useForm } from 'react-hook-form'
import { addNewProject } from '../../redux/action'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { ProjectTitle, ClientName, ProjectRate, ProjectStatus, ProgressLevel, ProjectSize, Small, Medium, Big, StartingDate, EndingDate, EnterSomeDetails, UploadProjectFile, Add, Cancel, Done, Doing } from '../../constant'
import { classes } from '../../data/layouts';

const Newproject = (props) => {

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date());
  const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === 'compact-wrapper');
  const layout = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();

  const handleStartDate = date => {
    setstartDate(date);
  };

  const handleEndDate = date => {
    setendDate(date);
  };

  const getUploadParams = ({ meta }) => {
    return {
      url: 'https://httpbin.org/post'
    }
  }


  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { }

  const AddProject = data => {
    console.log("data", data);
    if (data !== '') {
      dispatch(addNewProject(data))
      props.history(`${process.env.PUBLIC_URL}/app/project/project-list/${layout}`)
    } else {
      errors.showMessages();
    }
  };
  return (
    <Fragment>
      <Breadcrumb parent="Plan" title="Create Plan" />
      <Container fluid={true} className="projectlist">
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form" onSubmit={handleSubmit(AddProject)}>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Plan Title"}</Label>
                        <input className="form-control" type="text" name="title" placeholder="Plan name *" {...register('title', { required: true })} />
                        <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="6">
                      <FormGroup>
                        <Label>{"Plan Price"}</Label>
                        <input className="form-control" type="number" name="client_name" defaultValue="0.01" step=".01" placeholder="Price" {...register('client_name', { required: true })} />
                        <span style={{ color: "red" }}>{errors.client_name && 'Client Name is required'}</span>
                      </FormGroup>
                    </Col>
                    <Col sm="6">
                      <FormGroup>
                        <Label>{"Daily Profit"}</Label>
                        <input className="form-control" type="number" name="rate" defaultValue="0.01" placeholder="Enter project Rate" {...register('rate', { required: true })} step=".01" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    
                    <Col sm="6">
                      <FormGroup>
                        <Label>{"Balance Locked Time"}</Label>
                        <Input type="text" name="progress_level" placeholder="Balance Locked Time" className="form-control digits" >
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col sm="6">
                      <FormGroup>
                        <Label>{"Monthly Profits %"}</Label>
                        <Input type="text" name="status" defaultValue="0.01" placeholder="Enter project Rate" {...register('Profit', { required: true })} step=".01" className="form-control digits" />
                          
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Button color="success" className="me-3">{Add}</Button>
                        <Link to={`${process.env.PUBLIC_URL}/app/project/project-list`}>
                          <Button color="danger">{Cancel}</Button>
                        </Link>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Newproject;