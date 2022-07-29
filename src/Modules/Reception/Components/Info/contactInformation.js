import './contactInformation.scss'
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Col, Row, Form, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


function ContactInformation() {
    // const tabs = [ 'p', 'd' , 'w']
    // const [type, setType] = useState('p')
    // const [dataCity, setdataCity] = useState([]);
    // const [dataDistrict, setdaDistrict] = useState([]);
    // const [dataWards, setdataWards] = useState([]);
    // useEffect(() => {
    //     axios.get(`https://provinces.open-api.vn/api/${ty}/`)
    //         .then(res => setdataCity(res.data));

    // }, [])

    return (
        <div class="contact">
            <div className="contactInformation__user">
                <Col className='contactInformation__user__col'>
                    <FontAwesomeIcon icon={faClipboardList} id="icon__user" /><span>Thông tin liên lạc</span>
                </Col>
                <div className="contactInformation">
                    <Col className='contactInformation__col'>
                        <Row xs='12' className='contactInformation__row'>
                            <Col xs='4'>
                                Địa chỉ
                                <span className='star'>*</span></Col>
                            <Col xs='8'><Input /></Col>
                        </Row>
                        <Row xs='12' className='contactInformation__row'>
                            <Col xs='4'>
                                <Form>
                                    Tỉnh/Thành phố
                                    <select className="countrySelect">
                                        {/* {tabs.map((tab) => {
                                            return (
                                                <option key={city.code}>{city.name}</option>
                                            )
                                        })} */}
                                    </select>
                                </Form>
                            </Col>
                            <Col xs='4'>
                                <Form>
                                    Quận/Huyện
                                    <select className="countrySelect">
                                        {/* {dataDistrict.map((district) => {
                                            return (
                                                <option key={district.code}>{district.name}</option>
                                            )
                                        })} */}
                                    </select>
                                </Form>
                            </Col><Col xs='4'>
                                <Form>
                                    Xã/Phường
                                    <select className="countrySelect">
                                        {/* {dataWards.map((wards)=>{
                                            return(
                                                <option key={wards.code}>{wards.name}</option>
                                            )
                                        })} */}
                                    </select>
                                </Form>
                            </Col>
                        </Row>
                        <Row xs='12' className='contactInformation__row'>
                            <Col xs='4'>
                                CMT/CCCD
                            </Col>
                            <Col xs='8'><Input /></Col>
                        </Row>
                        <Row xs='12' className='contactInformation__row'>
                            <Col xs='4'>
                                Nơi đăng kí
                            </Col>
                            <Col xs='8'><Input /></Col>
                        </Row>
                        <Row xs='12' className='contactInformation__row'>
                            <Col xs='4'>
                                Tên người liên hệ
                            </Col>
                            <Col xs='8'><Input /></Col>
                        </Row>
                    </Col>
                </div>
            </div>
        </div>

    )
}

export default ContactInformation