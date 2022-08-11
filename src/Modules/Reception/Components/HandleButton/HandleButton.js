import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import './HandleButton.scss'
import Modal from '../Modal/Modal'
function HandleButton(props) {
    const { HandleButtonSave, HandleButtonClose } = props;
    return (
        <div className="Handle__Button">
            <ButtonGroup>
                <Button onClick={()=>{HandleButtonClose()}} className='Handle__Button__child' color="danger"><span className='Handle__Button__child__text'>Xóa</span></Button>
                {/* <Button onClick={() => { HandleButtonSave() }} className='Handle__Button__child' color="success"><span className='Handle__Button__child__text'>Lưu</span></Button> */}
                <Modal />
            </ButtonGroup>
        </div>
    )
}


export default HandleButton