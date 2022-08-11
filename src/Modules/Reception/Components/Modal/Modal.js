import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Accounting from "../../../Accounting/Acounting/Acounting"
function ModalFullscreenExample(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style={{fontSize:'large', margin:'20px', padding:'8px'}} color="success" onClick={toggle}>
        Lưu
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <h3 style={{textAlign:'center',color:'#28b76b', marginTop:'20px', fontSize:'33px', fontWeight:'700'}}>Thu Ngân</h3>
        <ModalBody>
          <Accounting/>
        </ModalBody>
        <ModalFooter>
        
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample;