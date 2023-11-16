import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import Modal from 'react-modal'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const AppointmentModal = () => {
    const [isOpen, setIsOpen] = useState(false)
   const customStyles = {
      overlay: {
         backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
      content: {
        width: '50%',
        height: '90%',
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)'
      }
   }
  return (
    <>
        <div>
            <p onClick={() => setIsOpen(true)}>
            Book an Appointment
            </p>

            
            <Modal className={styles.modelMain} isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
            <div>
                <h1>Book an appointment</h1>
                <form>
                <div className={styles.modalForm}>
                    <label>Complaint Title </label>
                    <input />
                </div>
                <div className={styles.modalForm}>
                    <label>Preferred Doctor </label>
                    <input />
                </div>
                <div className={styles.modalForm}>
                    <label>Preferred Date </label>
                    <input />
                </div>
                <div className={styles.modalForm}>
                    <label>Preferred Time </label>
                    <input />
                </div>
                <div className={styles.modalForm}>
                    <label>Any Other Information </label>
                    <input />
                </div>
                <div className={styles.btnModal}>
                    <button className={`${styles.btnBooking} ${styles.attach}`}>
                        <div className={styles.pt10}>
                        <Image
                            className={styles.iconMini} 
                            src="/paperclip.svg"
                            alt="UI Logo"
                            width={20}
                            height={20}
                            priority
                        />
                        </div>
                        <Link href="/client/profile">Attach</Link>
                    </button>
                    <button className={`${styles.btnBooking} ${styles.modalSubmit}`}>
                    <Link href="/client/profile">Submit Request</Link>
                    </button>
                </div>
                </form>
                <button className={`${styles.btnModal} ${styles.modalClose}`} onClick={() => setIsOpen(false)}>Close</button>
                
            </div>
            </Modal>
        </div>
    </>
  );
};

export default AppointmentModal;