// import React, {  } from "react";
import React, { useState, Fragment, useRef, useEffect } from "react";
import Axios from "axios";
import { Form, Row, Col, Input, Button } from "reactstrap";
import "./PayAcc.scss";
import { Link } from "react-router-dom";
function Pay(props) {
  const { infoUser, setListInfoUser, listInfoUser, setInfoUser, toggle } =
    props;
  const handlePayPrint = () => {
    // setListInfoUser([...listInfoUser, infoUser]);
    // setInfoUser({
    //   user_id: "",
    //   user_name: "",
    //   user_birthday: "",
    //   user_sex: "",
    //   user_phone: "",
    //   user_adress: "",
    //   user_city: "",
    //   user_district: "",
    //   user_ward: "",
    //   user_CMND: "",
    //   user_PlateOfRegis: "",
    //   user_contact: "",
    //   user_service: "",
    //   user_service_object: "",
    //   user_clinic: "",
    //   user_reason: "",
    // });
    toggle();
  };
  useEffect(() => {
    Axios.post("http://localhost:4000/api/recep", infoUser)
      .then(() => {})
      .catch(function (error) {});
  }, [handlePayPrint]);
  useEffect(() => {
    Axios.get("http://localhost:4000/api/recep")
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {});
  }, []);
  return (
    <>
      <Form className="form-4">
        <Row>
          <Col sm={3} className="col">
            <span className="text-success ">
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
            <Link to="/Reception/Print" state={infoUser}>
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
