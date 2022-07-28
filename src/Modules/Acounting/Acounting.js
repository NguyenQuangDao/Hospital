import React from "react";
import InfoOrder from "./Components/InfoOrder/InfoOrder"
import InfoCustumer from "./Components/InfoCustomer/InfoCustomer"
import Pay from "./Components/Pay/Pay"
import Search from "./Components/Search/Search"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
function Accounting (){
   return(
    <div className="Acounting">
    <Search/>
    <InfoCustumer/>
    <InfoOrder/>
    <Pay/>
    </div>
   )
}
export default Accounting;