import React, { Fragment, useRef } from 'react';
import { Form, Row, Col } from "reactstrap";
import ReactToPrint from 'react-to-print';
import "./Print.scss";
// import logoPK from "../../../Assets/img/logoPK.png";
// import QRcode from "../../../Assets//img/QRcode.png";
function Print(props) {
  const componentRef = useRef();
  const{infoUser} = props
  return (
    <Fragment>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <div className="print" ref={componentRef}>
      <div className="print-form">
        <Form>
          <Row>
            <Col sm={8} className="print-form-left">
              <div className="print-form-logo">
                {/* <img src={logoPK} alt="" /> */}
              </div>
              <div className="print-form-infoCompany">
                <p className="nameCompany">PHÒNG KHÁM ĐA KHOA VIỆT ĐOÀN</p>
                <span className="company-adress">
                  Bách Môn, Việt Đoàn, Tiên Du, Bắc Ninh
                </span>
                <br />
                <span className="company-hotline">
                  SĐT: 02222208999 - 0869968688
                </span>
              </div>
            </Col>
            <Col sm={4} className="print-form-right">
              <div className="QRcode">
                {/* <img alt="aaaa" src={QRcode} /> */}
              </div>
              <div className="idcode">280810141201</div>
            </Col>
          </Row>
          <div className="content">
            <div className="content-header">
              <h2 className="header-title">BIÊN LAI THU TIỀN</h2>
              <p className="header-Lien1">Liên 1: Lưu tại quầy</p>
              <span className="header-time">
                Ngày 16 Tháng 8 Năm 2022 15 giờ 20 phút
              </span>
            </div>
            <div className="content-body">
              <div className="infoUser">
                <div className="infoUser-name">
                  Họ Tên:
                  <b>
                    <span>{infoUser.user_name}</span>
                  </b>
                </div>
                <div className="infoUser-birthday">
                  Ngày sinh:
                  <span>{infoUser.user_birthday} </span>
                </div>
                <div className="infoUser-sex">
                  Giới tính:
                  <span>{infoUser.user_sex}</span>
                </div>
                <div className="infoUser-phone">
                  Điện thoại:
                  <span>{infoUser.user_phone}</span>
                </div>
                <div className="infoUser-adress">
                  Địa chỉ:
                  <span>{infoUser.user_adress}</span>
                </div>
              </div>
              <div className="info-sevice-stt" style={{ marginTop: "-10px" }}>
                <div className="info-sevice">
                  <div className="sevice">
                    Phòng Khám:
                    <span>Khám Nội</span>
                  </div>
                  <div className="Price-origin">
                    Giá gốc:
                    <b>
                      <span>{infoUser.user_cost}</span>
                    </b>
                  </div>
                  <div className="Price-sale">
                    Số tiền được khuyến mãi:
                    <b>
                      <span>{infoUser.user_totalPromotional} </span>
                    </b>
                  </div>
                  <div className="Price-total">
                    Tổng số tiền thanh toán:
                    <b>
                      <span>{infoUser.user_totalSevice} </span>
                    </b>
                  </div>
                  <div className="Price-total-write">
                    Viết bằng chữ:
                    <b>
                      <span> Bốn mươi nghìn đồng</span>
                    </b>
                  </div>
                </div>
                <div className="info-stt">
                  <div className="stt">
                    Số Thứ Tự :{" "}
                    <b>
                      <span>12</span>
                    </b>
                  </div>
                  <div className="room">
                    <span>Khám Nội - Tầng 2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-footer">
              <div className="user">
                <b>Người nộp tiền</b>
                <br />
                <span>(Ký , họ tên)</span>
              </div>
              <div className="reception">
                <b>Người thu tiền</b>
                <br />
                <span>(Ký , họ tên)</span>
                <h4>NGUYỄN THÙY TRINH</h4>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
    </Fragment>
  );
}

export default Print;
