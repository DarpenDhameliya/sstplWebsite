import React from 'react'
import Image from 'next/image'
import closeimg from "../../../../assets/images/close.png";
import styles from '../../common/common.module.css'
import { Box, Modal } from '@mui/material';

const CareerinqModel = ({open , handleClose , viewData}) => {
  return (
    <>
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box className={`${styles.handle_portfolio_modal_mui} contact_moda`}>
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {viewData.name}
              </h5>
              <div onClick={handleClose} style={{ cursor: "pointer" }}>
                <Image src={closeimg} alt="car1" />
              </div>
            </div>{" "}
            <div className="modal-body" style={{ border: "none", boxShadow: "none" }}>

              <div className={styles.handleContactmodel}>
                <h6 style={{ minWidth: "120px" }}>Ip Address : </h6>
                <p className="handlep">{viewData.ip}</p>
              </div>
              <hr />
              <div className={styles.handleContactmodel}>
                <h6 style={{ minWidth: "120px" }}>Operater : </h6>
                <p className="handlep">{viewData.mobile === true ? "Mobile" : "Desktop"}</p>
              </div>
              <hr />
              <div className={styles.handleContactmodel}>
                <h6 style={{ minWidth: "120px" }}>Browser : </h6>
                <p className="handlep">{viewData.browsernm_browsever}</p>
              </div>
            </div>
          </Box>
        </Modal>
    </>
  )
}

export default CareerinqModel