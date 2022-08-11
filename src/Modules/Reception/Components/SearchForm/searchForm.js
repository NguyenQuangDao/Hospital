import React, { useState, } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, FormGroup, Input, Col, Row, ListGroupItem, ListGroup } from 'reactstrap';
import './searchForm.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";


function SearchForm(props) { 
    const {open,  setSearch ,setOpen ,handleChangeSearch, setInfoUser,resListInfoUser} = props
    const handleClickItem = (data) => {      
        setOpen(false);
        setInfoUser(data)
    }
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
                    <div className="search-form">
                            <ul className={open? "search-list" : "close-search"} id="searchList">
                                {resListInfoUser.map((data) =>{
                                    return (
                                        <li className="search-item" onClick={(e) => handleClickItem(data)}>{data.user_id}</li>
                                    )
                                })}
                            </ul>
                    </div>
                </ListGroup>
            </Col>
        </div>

    )
}
export default SearchForm