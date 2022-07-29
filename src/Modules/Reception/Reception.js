import SearchForm from './Components/SearchForm/searchForm'
import InfoAccounting from './Components/Info/Info'
import ContactInformation from './Components/Info/contactInformation'
import Service from './Components/Service/Service'
import HandleButton from './Components/HandleButton/HandleButton'
import { Button, Table, FormGroup, Input, Col, Row, ListGroupItem, ListGroup } from 'reactstrap';
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Reception() {
   // useEffect(()=>{
   //    getCountry()
   //    .then((response) => response.json())
   //    .then(res => console.log(res))``
   // }, [])
   return <div className="App" style={{ width: '90vw', margin: 'auto', marginTop:'50px' }}>
      <SearchForm />
      <Row>
         <Col md={6}>
            <InfoAccounting />
         </Col>
         <Col md={6}>
            <ContactInformation />
         </Col>
      </Row>
      <Service />
      <HandleButton/>
   </div>;

}

export default Reception;
