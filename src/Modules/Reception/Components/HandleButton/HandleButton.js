import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import './HandleButton.scss'
function HandleButton(props) {
    const {HandleButtonSave} = props;
    return (
        <div className="Handle__Button">
            <ButtonGroup>
                <Button className='Handle__Button__child' color="danger"><span className='Handle__Button__child__text'>Xóa</span></Button>
                <Button onClick={(e)=>{HandleButtonSave(e)}} className='Handle__Button__child' color="success"><span className='Handle__Button__child__text'>Lưu</span></Button>
            </ButtonGroup>
        </div>
    )
}


export default HandleButton