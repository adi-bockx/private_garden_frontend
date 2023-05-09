import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Codepen, FileText, Youtube, BookOpen, Aperture, Archive, ArrowRight, Search } from 'react-feather';
import two from '../../assets/images/faq/2.jpg';
import one from '../../assets/images/faq/1.jpg';
import three from '../../assets/images/faq/3.jpg';
import four from '../../assets/images/faq/4.jpg';
import errorImg from '../../assets/images/search-not-found.png';
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter, Media, Form, Input } from "reactstrap"
import axios from 'axios'
import { Articles, Knowledgebase, Support, BrowseArticles, FeaturedTutorials} from "../../constant";

const KnowledgebaseComponent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [search, setsearch] = useState([]);
    const [Data, setData] = useState([])
    const history = useNavigate();
    const clickApply = () => {
        history(`${process.env.PUBLIC_URL}/app/learning/learning-detail/Dubai`);
    }

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/knowledgebaseDB.json`).then(res => setsearch(res.data))
    }, [])

    const handleChange = event => {
        const searchByTitle = [];
        setSearchTerm(event.target.value);
        axios.get(`${process.env.PUBLIC_URL}/api/knowledgebaseDB.json`).then(res => setData(res.data))
        Data.filter(data => {
            if (data.title.toLowerCase().indexOf(event.target.value) > -1) {
                searchByTitle.push(data);

            }
            return data
        })
        setsearch(searchByTitle)

    };

    return (
        <Fragment>
            <Breadcrumb parent="Apps" title="Marketing" />
            <Container fluid={true}>
                <Row>
                    <Col xs="12">
                        <div className="knowledgebase-bg" style={{ backgroundImage: `url(${require("../../assets/images/knowledgebase/bg_1.jpg")})`, backgroundSize: "cover", backgroundPosition: "center", display: "block" }}>
                            <img className="bg-img-cover bg-center" src={require("../../assets/images/knowledgebase/bg_1.jpg")} alt="looginpage" style={{ display: "none" }} />
                        </div>
                        
                    </Col>
                    
                    <Col lg="12">
                        <div className="header-faq">
                            <h5 className="mb-0">{"Featured Campaigns"}</h5>
                        </div>
                        <Row>
                            <Col xl="3 xl-50 box-col-6" md="6">
                                <Card className="features-faq product-box">
                                    <div className="faq-image product-img">
                                        <img className="img-fluid" src={one} alt="" />
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-link" onClick={() => clickApply()}></i></li>
                                                <li><i className="icon-import"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <CardBody>
                                        <h6>{"Demo Title"}</h6>
                                        <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                    </CardBody>
                                    <CardFooter><span>{"Dec 15, 2022"}</span><span className="pull-right"></span></CardFooter>
                                </Card>
                            </Col>
                            <Col xl="3 xl-50 box-col-6" md="6">
                                <Card className="features-faq product-box">
                                    <div className="faq-image product-img">
                                        <img className="img-fluid" src={two} alt="" />
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-link" onClick={() => clickApply()}></i></li>
                                                <li><i className="icon-import"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <CardBody>
                                        <h6>{"Demo Title"}</h6>
                                        <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                    </CardBody>
                                    <CardFooter><span>{"Dec 15, 2022"}</span><span className="pull-right"></span></CardFooter>
                                </Card>
                            </Col>
                            <Col xl="3 xl-50 box-col-6" md="6">
                                <Card className="features-faq product-box">
                                    <div className="faq-image product-img">
                                        <Media className="img-fluid" src={three} alt="" />
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-link" onClick={() => clickApply()}></i></li>
                                                <li><i className="icon-import"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <CardBody>
                                        <h6>{"Demo Title"}</h6>
                                        <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                    </CardBody>
                                    <CardFooter><span>{"Dec 15, 2022"}</span><span className="pull-right"></span></CardFooter>
                                </Card>
                            </Col>
                            <Col xl="3 xl-50 box-col-6" md="6">
                                <Card className="features-faq product-box">
                                    <div className="faq-image product-img">
                                        <Media className="img-fluid" src={four} alt="" />
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-link" onClick={() => clickApply()}></i></li>
                                                <li><i className="icon-import"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <CardBody>
                                        <h6>{"Demo Title"}</h6>
                                        <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                    </CardBody>
                                    <CardFooter><span>{"Dec 15, 2022"}</span><span className="pull-right"></span></CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default KnowledgebaseComponent;