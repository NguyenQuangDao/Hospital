import { useState } from 'react';
import PatientInfor from './components/PatientInfor';
import { Row, Col, Container } from 'reactstrap';
import Styles from './resultXray.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { resultServiceXray } from '../share/util';
const cx = classNames.bind(Styles);
function ResultXray() {
    const [result, setResults] = useState({
        description: '',
        conclusion: '',
    });
    const onBlurChangeResult = () => {
        let xrayReSult = {
            conclusion: result.conclusion,
            description: result.description,
        };
        onChangeResults(xrayReSult);
    };
    const onChangeResults = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setResults({ ...result, [name]: value });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <PatientInfor />
                    </div>
                    <div className={cx('result-container')} style={{ backgroundColor: '#ffff' }}>
                        <div className={cx('result-title')}>
                            <span>
                                <FontAwesomeIcon icon={faPen} /> Mô tả chi tiết kết quả X-Quang
                            </span>
                            <select>
                                <option value="">Chọn kết quả</option>
                                {resultServiceXray.map((el) => {
                                    return (
                                        <option key={el.code} value={el.code}>
                                            {el.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <textarea
                            placeholder="Nhập kết quả X-Quang"
                            cols={38}
                            rows={10}
                            id="result"
                            name="description"
                            value={result.description}
                            onChange={onChangeResults}
                            onBlur={onBlurChangeResult}
                        ></textarea>
                    </div>
                    <div className={cx('result-container')} style={{ backgroundColor: '#ffff' }}>
                        <div className={cx('result-title-end')}>
                            <span>
                                <FontAwesomeIcon icon={faPen} /> Kết Luận
                            </span>
                        </div>
                        <textarea
                            placeholder="Nhập kết luận x-quang"
                            value={result.description}
                            onChange={onChangeResults}
                            onBlur={onBlurChangeResult}
                            cols={38}
                            rows={10}
                            id="result"
                            name="story"
                        ></textarea>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ResultXray;
