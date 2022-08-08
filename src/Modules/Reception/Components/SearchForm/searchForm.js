import React, { useState, } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, FormGroup, Input, Col, Row, ListGroupItem, ListGroup } from 'reactstrap';
import './searchForm.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";


function SearchForm(props) { 
    const {handleChangeSearch} = props
    
    return (
        <div className="patientSearch__Receptionist">
            <Col >
                <ListGroup  style={{ boxShadow: '5px 5px 10px -5px rgb(0 0 0 / 12%)'}}> 
                    <ListGroupItem >

                        <FontAwesomeIcon icon={faMagnifyingGlass} className="faMagnifyingGlass" /> <span className="patientSearch">Tìm kiếm</span>
                    </ListGroupItem>
                    <ListGroupItem className="patientSearch__groupItem">

                        <Row >
                            <input
                                onChange={(e) => handleChangeSearch(e)}
                                placeholder='Nhập mã bệnh nhân, số điện thoại'
                            />
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </div>

    )
}
export default SearchForm