import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container } from 'reactstrap';
import Styles from './Xray.module.scss';
import classNames from 'classnames/bind';
import ResultXray from './ResultXray/resultXray';
import XRayForm from './components/XrayForm/xRayForm';
const cx = classNames.bind(Styles);
function XRayRender() {
    return (
        <Container className={cx('wrapper')} style={{}}>
            <Row sm={2}>
                <Col sm={8}>
                    <ResultXray />
                </Col>
                <Col sm={4}>
                    <XRayForm/>
                </Col>
            </Row>
        </Container>
    );
}
export default XRayRender