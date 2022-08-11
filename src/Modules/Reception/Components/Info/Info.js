import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, } from 'reactstrap';
import './Info.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";


function InfoAccounting(props) {
    const { onChangeInfoUser, infoUser } = props

    return (
        <div className="information__user" >
            <Col className='information__user__col'>
                <FontAwesomeIcon icon={faUser} id="icon__user" /><span>Thông tin bệnh nhân</span>
            </Col>
            <div className="information">
                <Col className='information__col'>
                    <Row xs='12' className='information__row'>
                        <Col xs='4'>
                            Mã bệnh nhân
                            <span className='star'>*</span></Col>
                        <Col xs='8'><input className="valueInput" type={"number"} name="user_id" value={infoUser.user_id} onChange={(e) => onChangeInfoUser(e)} /></Col>
                    </Row>
                    <Row xs='12' className='information__row'>
                        <Col xs='4'>
                            Họ và tên
                            <span className='star'>*</span></Col>
                        <Col xs='8'>
                            <input className="valueInput" name="user_name" value={infoUser.user_name} onChange={(e) => onChangeInfoUser(e)} />
                        </Col>
                    </Row>
                    <Row xs='12' className='information__row'>
                        <Col xs='4'>
                            Ngày sinh
                            <span className='star'>*</span></Col>
                        <Col xs='8'>
                            <input className="valueInput" type={"date"} name="user_birthday" value={infoUser.user_birthday} onChange={(e) => onChangeInfoUser(e)} />
                        </Col>
                    </Row>
                    <Row xs='12' className='information__row'>
                        <Col xs='4'>
                            Giới tính
                            <span className='star'>*</span></Col>
                        <Col xs='8'>
                            <select className="information__row__select" name="user_sex" value={infoUser.user_sex} onChange={(e) => onChangeInfoUser(e)}>
                                <option>Chọn giới tính</option>
                                <option>Nam</option>
                                <option>Nữ</option>
                                <option>Khác</option>
                            </select>
                        </Col>
                    </Row>
                    <Row xs='12' className='information__row'>
                        <Col xs='4'>
                            Số điện thoại
                            <span className='star'>*</span></Col>
                        <Col xs='8'><input className="valueInput" type={"number"} name="user_phone" value={infoUser.user_phone} onChange={(e) => { onChangeInfoUser(e) }} /></Col>
                    </Row>
                </Col>
            </div>
        </div>

    )
}


export default InfoAccounting

