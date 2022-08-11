import { useState} from 'react';
import PatientInfor from './components/PatientInfor';
import { Row, Col, Container, Button } from 'reactstrap';
import Styles from './resultXray.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { resultServiceXray } from '../share/util';
const cx = classNames.bind(Styles);
function ResultXray(props) {
    const { data, handleDelete, count,showLocal} = props;
    const [result, setResults] = useState({
        codeFromService: "",
        description: "",
        conclusion: "",
    });
    const patient = Object.assign(data,result)
    const [showFinish, setFinish] = useState([]);
    localStorage.setItem('finishPatient', JSON.stringify(showFinish));
    const HandleFinish = (i) => {
        handleDelete(i)
        showLocal.splice(i,1)
        setFinish([...showFinish,patient])
    };
    const onChangeResults = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setResults({...result,[name]: value });
    };
    const setResultFrom = () => {
        resultServiceXray.forEach((el) => {
            if (result.codeFromService === el.code) {
                setResults({
                    conclusion: el.results.conclusion,
                    description: el.results.description,
                });
            }
        });
    };
    const setOnchangeCode = async(ev) => {
        await setResults({
            codeFromService: ev.target.value,
        })
        await setResultFrom()
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <PatientInfor data={data}/>
                    </div>
                    <div className={cx('result-container')} style={{ backgroundColor: '#ffff' }}>
                        <div className={cx('result-title')}>
                            <span>
                                <FontAwesomeIcon icon={faPen} /> Mô tả chi tiết kết quả X-Quang
                            </span>
                            <select
                                id="description"
                                name="description"
                                value={result.codeFromService}
                                onChange={(ev) => {
                                    setOnchangeCode(ev);
                                }}
                            >
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
                            name="description"
                            value={result.description}
                            onChange={(e)=>onChangeResults(e)}
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
                            value={result.conclusion}
                            onChange={(e)=>onChangeResults(e)}
                            cols={38}
                            rows={10}
                            id="result"
                            name="conclusion"
                        ></textarea>
                    </div>
                </Col>
            </Row>
            <Row style={{ marginTop: 20, padding: 20, float: 'right' }}>
                <Col>
                <Button onClick={()=>HandleFinish(count)
                        } size="lg" color="success" outline>
                        Lưu
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ResultXray;
