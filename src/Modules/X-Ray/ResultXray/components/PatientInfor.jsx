import { Row, Col, Container} from 'reactstrap';
import Styles from './PatientInfor.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(Styles);
function PatientInfor() {
    return (
        <Container>
            <Row>
                <Col style={{padding:0}}>
                <div className={cx('x-ray-room')} style={{marginTop:10}}>
                    <span>Phòng Chụp X quang - Tầng 1</span>
                </div>
                <div className={cx('information-patient')}>
                    <div className={cx('information-patient-title')}>
                        <span><FontAwesomeIcon icon={faUser} /> Thông Tin Bệnh Nhân</span>
                    </div>
                    <div className={cx('information-body')}>
                        <Row>
                            <Col sm={6}>
                                <span>Mã Bệnh Nhân:</span><br/>
                                <span>Họ Tên:</span><br/>
                                <span>Địa Chỉ:</span><br/>
                            </Col>
                            <Col sm={4}>
                                <span>Giới Tính:</span><br/>
                                <span>Ngày Sinh:</span>
                            </Col>
                        </Row>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    );
}

export default PatientInfor;