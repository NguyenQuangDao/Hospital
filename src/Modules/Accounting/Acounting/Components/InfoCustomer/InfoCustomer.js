import React from "react";
import { FormGroup, Form, Label,Col, Row} from 'reactstrap'
import './InfoCustomer.scss'
function InfoCustomer() {
    return (
        <>
            <Form className="Form-2">

                <Row className="row-2">
                    <span class="text-success " >
                        <i className="fa fa-user "></i>
                        Thông tin bệnh nhân
                    </span>
                    <Col md={6}>
                        <FormGroup>
                            <Label >
                                Mã bệnh nhân :
                            </Label>

                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label >
                                Giới Tính :
                            </Label>

                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label >
                                Họ Tên :
                            </Label>

                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label >
                                Ngày Sinh :
                            </Label>

                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>
                                Địa chỉ :
                            </Label>

                        </FormGroup>
                    </Col>
                </Row>

            </Form>

        </>
    )
}
export default InfoCustomer;