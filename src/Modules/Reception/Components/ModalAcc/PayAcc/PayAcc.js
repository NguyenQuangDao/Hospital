import React, { useState } from "react";
import { Form, Row, Col, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./PayAcc.scss";
function Pay(props) {
  const { infoUser, setListInfoUser, listInfoUser, setInfoUser, toggle } =
    props;
  const handlePayPrint = () => {
    setListInfoUser([...listInfoUser, infoUser]);
    setInfoUser({
      user_id: "",
      user_name: "",
      user_birthday: "",
      user_sex: "",
      user_phone: "",
      user_adress: "",
      user_city: "",
      user_district: "",
      user_ward: "",
      user_CMND: "",
      user_PlateOfRegis: "",
      user_contact: "",
      user_service: "",
      user_service_object: "",
      user_clinic: "",
      user_reason: "",
    });
    toggle();
  };

  return (
    <>
      <Form className="form-4">
        <Row>
          <Col sm={3} className="col">
            <span class="text-success ">
              <i className="fa fa-dollar"></i>
              Thanh toán hóa đơn
            </span>
          </Col>
          <Col sm={3} className="col">
            <select>
              <option value="1">Tiền mặt</option>
              <option value="2">Thẻ ATM</option>
            </select>
          </Col>
          <Col sm={3} className="col">
            <Input placeholder="Điền thông tin giao dịch" />
          </Col>
          <Col sm={3} className="col">
            <Link to={`/`}>
              <Button color="success" onClick={handlePayPrint}>
                THANH TOÁN
              </Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </>
  );
}
export default Pay;
