import React from "react";
import InfoOrder from "./Components/InfoOrder/InfoOrder"
import InfoCustumer from "./Components/InfoCustomer/InfoCustomer"
import Pay from "./Components/Pay/Pay"
import Search from "./Components/Search/Search"
import Clock from "../../../Shared/Components/clock/index.jsx";
function Accounting (){
   return(
    <div className="Acounting"style={{margin:'auto', width:'1200px'}}>
   <div style={{width:'100%', display:'flex', justifyContent:'flex-end',fontWeight:600,color:'green', fontSize:'20px'}}>
      <Clock/>
   </div>
    <Search/>
    <InfoCustumer/>
    <InfoOrder/>
    <Pay/>
    </div>
   )
}
export default Accounting;