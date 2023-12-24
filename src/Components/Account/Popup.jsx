import React from 'react'
import { Box, Modal, } from '@mui/material';
import Register from './Register';

const style = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Popup = ({handleClose,open}) => {
  return (
    <div>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
    
    <Register/>
    </Box>
    </Modal>
    </div>
  )
}

export default Popup