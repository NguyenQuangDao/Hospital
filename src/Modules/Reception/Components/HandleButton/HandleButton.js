import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import './HandleButton.scss'

function HandleButton() {
    return (
        <div className="Handle__Button">
            <ButtonGroup>
                <Button color="danger">Xóa</Button>
                <Button color="success">Lưu</Button>
            </ButtonGroup>
        </div>
    )
}


export default HandleButton