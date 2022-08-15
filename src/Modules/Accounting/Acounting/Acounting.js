import React, { useEffect, useState } from "react";
import InfoOrder from "./Components/InfoOrder/InfoOrder";
import InfoCustumer from "./Components/InfoCustomer/InfoCustomer";
import Pay from "./Components/Pay/Pay";
import Search from "./Components/Search/Search";
import Clock from "../../../Shared/Components/clock/index.jsx";
function Accounting() {
  let container = JSON.parse(localStorage.getItem('listInfoUser'));
  const [showLocal, setLocal] = useState(container);
  const [saveData , setSaveData] = useState({})
  const [open, setOpen] = useState(true)
  
  const [key, setKey] = useState("")
  const [result, setResult] = useState([])
 
  const HandleInput = (e) => {
    setKey(e.target.value)
    setResult(fillterList)
    setOpen(true);

   
  }
  const fillterList = showLocal.filter(item => {
    return item.user_id.includes(key)

})

const OnClickSearch = () => {
  // setResult(fillterList)
}
 console.log(fillterList);
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
      <Search setOpen={setOpen} open={open} HandleInput={HandleInput} setSaveData={setSaveData} OnClickSearch={OnClickSearch} result={result} />
      <InfoCustumer saveData={saveData} showLocal={showLocal} />
      <InfoOrder saveData= {saveData}/>
      <Pay  saveData={saveData} setSaveData= {setSaveData}/>

    </div>
  );
}
export default Accounting;
