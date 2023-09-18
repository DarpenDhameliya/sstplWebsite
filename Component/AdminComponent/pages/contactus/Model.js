import { Box, Modal } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import closeimg from "../../../../assets/images/close.png";
import styles from '../../common/common.module.css'

const Model = ({open , handleClose , viewData}) => {
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
                <h6 style={{ minWidth: "120px" }}>Date : </h6>
                <p className="handlep">{new Date(viewData.date).toLocaleDateString("en-GB")}</p>
              </div>
              <hr />
              <div className={styles.handleContactmodel}>
                <h6 style={{ minWidth: "120px" }}>Email : </h6>
                <p className="handlep">{viewData.email}</p>
              </div>
              <hr />
              <div className={styles.handleContactmodel}>
                <h6 style={{ minWidth: "120px" }}>Subject : </h6>
                <p className="handlep">{viewData.subject}</p>
              </div>
              <hr />
              <div className={styles.handleContactmodel}>
                <h6 style={{ minWidth: "120px" }}>Work Detail : </h6>
                <p className="handlep">{viewData.help}</p>
              </div>
            </div>
          </Box>
        </Modal>
    </>
  )
}

export default Model