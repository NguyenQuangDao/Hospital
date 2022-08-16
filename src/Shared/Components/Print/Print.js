import React from "react";
import { Form, Row, Col } from "reactstrap";
import "./Print.scss"
import logoPK from '../../../Assets/img/logoPK.png'
function Print() {
  return (
    <div className="print">
      <div className="print-form">
        <Form>
          <Row>
            <Col sm={8}>
              <div className="print-form-logo">
                <ing src="../../../Assets/img/logoPK.png" />
              </div>
              <div className="print-form-infoCompany">
                <p className="nameCompany">PHÒNG KHÁM ĐA KHOA VIỆT ĐOÀN</p>
                <span className="company-adress">
                  Bách Môn, Việt Đoàn, Tiên Du, Bắc Ninh
                </span>
                <br/>
                <span className="company-hotline">
                  SĐT: 02222208999 - 0869968688
                </span>
              </div>
            </Col>
            <Col sm={4}>
              <canvas id="receipId" style={{ height: "13mm" }}>
                    <img alt="" src={logoPK} />
              </canvas>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default Print;
