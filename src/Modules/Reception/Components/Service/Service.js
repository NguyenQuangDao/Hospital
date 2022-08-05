import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Input,
  Col,
  Row,
  FormControl,
  InputLabel,
  Form,
} from "reactstrap";
import "./Service.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faMagnifyingGlass,
  faNotesMedical,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Service(props) {
  const { onChangeInfoUser, infoUser } = props;

  return (
    <div className="service">
      <div className="service__element">
        <Col>
          <div className="service__choose">
            <FontAwesomeIcon icon={faNotesMedical} id="icon-medical" />
            <span>Chọn các dịch vụ</span>
          </div>

          <Row xs="12" className="service__row">
            <Col xs="4">
              <Form>
                Chọn dịch vụ <span>*</span>
                <select
                  id="selectService"
                  className="service__select"
                  placeholder="Chọn dịch vụ"
                  onChange={(e) => {
                    const userService =
                      document.getElementById("selectService");
                    infoUser.user_service =
                      userService.options[userService.selectedIndex].text;
                  }}
                >
                  <option>Khám nội</option>
                  <option>Khám nhi</option>
                  <option>Khám nội chuyên gia</option>
                  <option>Khám nhi chuyên gia</option>
                  <option>Khám cấp cứu</option>
                  <option>Tư vấn sức khỏe</option>
                  <option>Khám nội Bác sĩ BV Bạch Mai, Nội tiết... </option>
                  <option>Dịch vụ</option>
                </select>
              </Form>
            </Col>
            <Col xs="4">
              <Form>
                Đối tượng dịch vụ <span>*</span>
                <select
                  className="service__select"
                  placeholder="Chọn đối tượng dịch vụ"
                  id="chooseObjectUser"
                  onChange={(e) => {
                    const userServiceObject =
                      document.getElementById("chooseObjectUser");
                    infoUser.user_service_object =
                      userServiceObject.options[
                        userServiceObject.selectedIndex
                      ].text;
                  }}
                >
                  <option>Tứ thân phụ mẫu</option>
                  <option>Vip ( Miễn phí 100% )</option>
                  <option>Người thân nhân viên ( Giảm 20% )</option>
                  <option>Khám dịch vụ</option>
                  <option>Cán bộ nhân viên ( Miễn phí )</option>
                  <option>Không có bảo hiểm y tế</option>
                  <option>Bảo hiểm y tế</option>
                </select>
              </Form>
            </Col>
            <Col xs="4">
              <Form>
                Phòng khám <span>*</span>
                <input
                  placeholder="Chọn phòng khám"
                  name="user_clinic"
                  value={infoUser.user_clinic}
                  onChange={(e) => onChangeInfoUser(e)}
                ></input>
              </Form>
            </Col>
            <Col xs="6" className="service__reason">
              <Form>
                Lí do <span>*</span>
                <input
                  placeholder="Nhập lí do"
                  name="user_reason"
                  value={infoUser.user_reason }
                  onChange={(e) => onChangeInfoUser(e)}
                ></input>
              </Form>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
}

export default Service;
