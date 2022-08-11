import { Row, Col, Container } from 'reactstrap';
import "../xRayForm.module.scss"
function PatientWaiting(props) {
    const{showLocalWaiting,onCLickHandle,onClickDelete}=props
    return (
        <Container>
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
                            {showLocalWaiting ? (showLocalWaiting.map((el,i)=>{
                                return(
                                    <tr onClick={()=>onCLickHandle(el,i) || onClickDelete(i)} key={i}>
                                    <td>{i+1}</td>
                                    <td>{el.user_id}</td>
                                    <td>{el.user_name}</td>
                                </tr>
                                )
                            })):(<tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>)}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
}

export default PatientWaiting;
