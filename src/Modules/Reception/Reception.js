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
    user_sex: false,
    user_phone: "",
    user_adress: "",
    // user_provinc: dataCity,
    // user_district: dataDistrict,
    // user_wards: dataWards,
    user_CMND: "",
    user_PlateOfRegis: "",
    user_contact: "",
  });

  const [listInfoUser, setListInfoUser] = useState([])
  const onChangeInfoUser = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInfoUser({...infoUser , [name] : value });
  }
  // console.log(infoUser);
  const  HandleButtonSave = (e)=>{
        setListInfoUser([...listInfoUser , infoUser])
        // setInfoUser(" ")
  }
  // console.log(listInfoUser);
  localStorage.setItem("listInfoUser", JSON.stringify(listInfoUser))
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
      <SearchForm />
      <Row>
        <Col md={6}>
          <InfoAccounting />
        </Col>
        <Col md={6}>
          <ContactInformation onChangeInfoUser={onChangeInfoUser} infoUser={infoUser} />
        </Col>
      </Row>
      <Service />
      <HandleButton HandleButtonSave={HandleButtonSave}/>
    </div>
  );
}

export default Reception;
