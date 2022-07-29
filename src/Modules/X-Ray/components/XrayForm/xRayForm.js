import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Row, Col, Container, Nav, NavItem, TabContent, NavLink, TabPane, Form, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Styles from './xRayForm.module.scss';
import classNames from 'classnames/bind';
import PatientWaiting from './components/PatientWaiting';
import PatientResult from './components/PatientResults';
import Clock from '../../../../Shared/Components/clock/index';

const cx = classNames.bind(Styles);
function XRayForm() {
    const [show, setShow] = useState('1');
    return (
        <>
            <div className={cx('clock')}>
                <Clock />
            </div>
            <Container className={cx('list__patient-waiting')} >
                <Row sm={12}>
                    <Col sm={12}>
                        <span style={{marginBottom:12}} className={cx('list-title')}>
                            <FontAwesomeIcon icon={faUsers} />
                            Danh Sách Bệnh Nhân Chờ Chụp X-Quang:
                        </span>
                        <Input size="lg" id="exampleEmail" name="email" placeholder="Lọc Theo Mã Họ Tên" />
                    </Col>
                </Row>
                <Row className={cx('content')}>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={cx('active')}
                                onClick={function noRefCheck() {
                                    setShow('1');
                                }}
                            >
                                <span className={cx('list-title')}>Bệnh Nhân Chờ</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={cx('text')}
                                onClick={function noRefCheck() {
                                    setShow('2');
                                }}
                            >
                                <span className={cx('list-title')}>Bệnh Nhân Có Kết quả</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent style={{ backgroundColor: '#ffff', height: 300, overflow: 'auto' }} activeTab={show}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <PatientWaiting />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <PatientResult />
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                    <div style={{ display: 'flex',justifyContent:'center',alignItems:'center', marginTop:15}}>
                        <Col sm={9}>
                            <Form action="">
                                <Input size="lg" id="exampleEmail" name="email" placeholder="Tìm Kiếm" />
                            </Form>
                        </Col>
                        <Col style={{marginLeft:4}}>
                            <Button size="lg" color="success">
                                Tìm Kiếm
                            </Button>
                        </Col>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default XRayForm;
