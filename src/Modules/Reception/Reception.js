import SearchForm from "./Components/SearchForm/searchForm";
import InfoAccounting from "./Components/Info/Info";
import ContactInformation from "./Components/Info/contactInformation";
import Service from "./Components/Service/Service";
import HandleButton from "./Components/HandleButton/HandleButton";
import Clock from "../../Shared/Components/clock/index.jsx";
import React, { useState, useEffect } from "react";

import {
  Button,
  Table,
  FormGroup,
  Input,
  Col,
  Row,
  ListGroupItem,
  ListGroup,
} from "reactstrap";
// import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Reception() {

  // useEffect(()=>{
  //    getCountry()
  //    .then((response) => response.json())
  //    .then(res => console.log(res))``
  // }, [])
  const [infoUser, setInfoUser] = useState({
    user_id: "",
    user_name: "",
    user_birthday: "",
    user_sex: "",
    user_phone: "",
    user_adress: "",
    user_provinc: "",
    user_district: "",
    user_wards: "",
    user_CMND: "",
    user_PlateOfRegis: "",
    user_contact: "",
    user_service: "",
    user_service_object: "",
    user_clinic: "",
    user_reason: "",
    user_cost: "",
    user_promotional_price: "",
    user_promotional_service: "",
  });

  const [listInfoUser, setListInfoUser] = useState([]);
  const onChangeInfoUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfoUser({ ...infoUser, [name]: value });
  };
  const HandleButtonSave = (e) => {
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
    })
    let { user_id,
      user_name,
      user_birthday,
      user_sex,
      user_phone,
      user_adress,
      user_service,
      user_service_object,
      user_clinic,
      user_reason, } = infoUser
    let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (user_phone != "") {
      if (vnf_regex.test(user_phone) == false) {
        alert('Số điện thoại của bạn không đúng định dạng!');
      } else {
        if (user_id != "" &&
          user_name != "" &&
          user_birthday != "" &&
          user_sex != "" &&
          user_phone != "" &&
          user_adress != "" &&
          user_service != "" &&
          user_service_object != "" &&
          user_clinic != "" &&
          user_reason != "") {
          setListInfoUser([...listInfoUser, infoUser]);
        } else {
          return alert('vui lòng điền đầy đủ thông tin')
        }
      }
    } else {
      alert('Bạn chưa điền số điện thoại!');
    }

  };
  const HandleButtonClose = () => {
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
    })
  }
  // search for
  const [open, setOpen] = useState(true)
  const [search, setSearch] = useState('');
  const [resListInfoUser, setResListInfoUser] = useState([]);
  const handleChangeSearch = (e) => {

    if (search == " ") {
      setOpen(false);
    } else {
      const value = e.target.value;
      setSearch(value);
      setOpen(true);
    }
  };
  useEffect(() => {
    setResListInfoUser(listInfoUser.filter((item) => item.user_id.includes(search)));
  }, [search])


  localStorage.setItem("listInfoUser", JSON.stringify(listInfoUser));
  return (
    <div
      className="App"
      style={{ width: "90vw", margin: "auto", marginTop: "10px" }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          fontWeight: 600,
          color: "#28b76b",
          fontSize: "20px",
        }}
      >
        <Clock />
      </div>
      <SearchForm setSearch={setSearch} open={open} setOpen={setOpen} handleChangeSearch={handleChangeSearch} setInfoUser={setInfoUser} resListInfoUser={resListInfoUser} />
      <Row>
        <Col md={6}>
          <InfoAccounting
            onChangeInfoUser={onChangeInfoUser}
            infoUser={infoUser}
          />
        </Col>
        <Col md={6}>
          <ContactInformation
            onChangeInfoUser={onChangeInfoUser}
            infoUser={infoUser}
          />
        </Col>
      </Row>
      <Service onChangeInfoUser={onChangeInfoUser} infoUser={infoUser} />
      <HandleButton HandleButtonSave={HandleButtonSave} HandleButtonClose={HandleButtonClose} />
    </div>
  );
}

export default Reception;
