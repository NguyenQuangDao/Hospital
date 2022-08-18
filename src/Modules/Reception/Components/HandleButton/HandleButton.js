import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import './HandleButton.scss'
import ModalAcc from '../ModalAcc/ModalAcc'
function HandleButton(props) {
   
    const {setInfoUser, HandleButtonSave, HandleButtonClose, modal, setModal,toggle, infoUser, listInfoUser, setListInfoUser } = props;
   
    return (
        <div className="Handle__Button">
            <ButtonGroup>
                <Button onClick={() => { HandleButtonClose() }} className='Handle__Button__child' color="danger"><span className='Handle__Button__child__text'>Xóa</span></Button>
                {/* <Button onClick={() => { HandleButtonSave() }} className='Handle__Button__child' color="success"><span className='Handle__Button__child__text'>Lưu</span></Button> */}
                <ModalAcc toggle = {toggle} 
                    modal = {modal} 
                    infoUser = {infoUser} 
                    listInfoUser = {listInfoUser} 
                    setModal = {setModal} 
                    setListInfoUser = {setListInfoUser}
                    setInfoUser = {setInfoUser} 
                    />
            </ButtonGroup>
        </div>
    )
}


export default HandleButton