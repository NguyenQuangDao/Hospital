import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, FormGroup, Input, Col, Row, ListGroupItem, ListGroup } from 'reactstrap';
import './Info.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faClipboardList } from "@fortawesome/free-solid-svg-icons";


function InfoAccounting(props) {
  const {onChangeInfoUser , infoUser} = props ;
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
                        <Col xs='8'><input name='user_id' value={infoUser.user_id} onChange= {(e) => onChangeInfoUser(e) } /></Col>
                    </Row>
                    <Row xs='12' className='information__row'>
                        <Col xs='4'>
                            Họ Tên
                            <span className='star'>*</span></Col>
                        <Col xs='8'><input name='user_name' value={infoUser.user_name}  onChange= {(e) => onChangeInfoUser(e) } /></Col>
                    </Row>
                    <Row xs='12' className='information__row'>
                        <Col xs='4'>
                            Ngày sinh
                            <span className='star'>*</span></Col>
                        <Col xs='8'><input placeholder='dd/mm/yyyy' name='user_birthday' value={infoUser.user_birthday} onChange= {(e) => onChangeInfoUser(e) }/></Col>
                    </Row>
                    <Row xs='12' className='information__row'>
                        <Col xs='4'>
                            Giới tính                           
                            <span className='star' onChange= {(e) => onChangeInfoUser(e) }>*</span></Col>
                        <Col xs='8'>
                            <select className="information__row__select">
                                <option>Nam</option>    
                                <option>Nữ</option>    
                            </select>    
                        </Col>
                    </Row>
                    <Row xs='12' className='information__row'>
                        <Col xs='4'>
                            Số điện thoại
                            <span className='star'>*</span></Col>
                        <Col xs='8'><input name='user_phone' value={infoUser.user_phone} onChange= {(e) => onChangeInfoUser(e) }/></Col>
                    </Row>
                </Col>
            </div>
        </div>

    )
}


export default InfoAccounting

