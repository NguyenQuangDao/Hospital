import React, { useEffect, useState } from "react";
import InfoOrder from "./Components/InfoOrder/InfoOrder";
import InfoCustumer from "./Components/InfoCustomer/InfoCustomer";
import Pay from "./Components/Pay/Pay";
import Search from "./Components/Search/Search";
import Clock from "../../../Shared/Components/clock/index.jsx";
function Accounting() {
  let container = JSON.parse(localStorage.getItem('listInfoUser'));
  const [showLocal, setLocal] = useState(container);
  // console.log(showLocal);
  const [key, setKey] = useState("")
  const [result, setResult] = useState([])
 
  const HandleInput = (e) => {
    setKey(e.target.value)
    // console.log(key);
  }
  const fillterList = showLocal.filter(item => {
    return item.user_id.includes(key)

})

const OnClickSearch = () => {

  setResult(fillterList)
  // console.log(result);
}
useEffect(()=>{
 
},[result])  
 
  return (
    <div className="Acounting" style={{ margin: "auto", width: "1200px" }}>
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
      <Search HandleInput={HandleInput} OnClickSearch={OnClickSearch} />
      <InfoCustumer showLocal={showLocal} result={result} />
      <InfoOrder />
      <Pay />

    </div>
  );
}
export default Accounting;
