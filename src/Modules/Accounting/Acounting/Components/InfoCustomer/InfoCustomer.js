import React, { useState } from "react";
import { FormGroup, Form, Label, Col, Row } from 'reactstrap'
import './InfoCustomer.scss'
function InfoCustomer(props) {
    // const [search, setSearch] =useState({}) 
    const { result } = props
    // setSearch(Object.assign({... result}))
    // console.log(search);

    return (

        <>
            <div>


                <Form className="Form-2">


                    <Row className="row-2">
                        <span class="text-success " >
                            <i className="fa fa-user "></i>
                            Thông tin bệnh nhân
                        </span>
                        {result.map((p) => {
                            return (
                                <>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label >
                                                Mã bệnh nhân:{p.user_id}

                                            </Label>

                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label >
                                                Giới Tính :{p.user_sex}

                                            </Label>

                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label >
                                                Họ Tên :{p.user_name}

                                            </Label>

                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label >
                                                Ngày Sinh :{p.user_birthday}

                                            </Label>

                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>
                                                Địa chỉ :{p.user_adress}

                                            </Label>

                                        </FormGroup>
                                    </Col>

                                </>
                            )
                        })}


                    </Row>


                </Form>

            </div>
        </>
    )
}
export default InfoCustomer;