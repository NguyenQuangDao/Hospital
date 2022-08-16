import { Row, Col, Container } from 'reactstrap';
function PatientResult() {
    let container = JSON.parse(localStorage.getItem('finishPatient'));
    return (
        <Container style={{padding:0}}>
            <Row>
                <Col sm="12">
                    <table style={{ width: '100%'}}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã bệnh nhân</th>
                                <th>Bệnh nhân</th>
                            </tr>
                        </thead>
                        <tbody className="bodyTable">
                        {container ? (container.map((el,i)=>{
                                return(
                                    <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{el.user_id}</td>
                                    <td>{el.user_name}</td>
                                </tr>
                                )
                            })):(<tr>
                                <td>1</td>
                                <td>trống</td>
                                <td>trống</td>
                            </tr>)}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
}

export default PatientResult;
