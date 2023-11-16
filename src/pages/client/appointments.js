import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';
import AppointmentModal from '@/components/AppointmentModal';

const inter = Inter({ subsets: ['latin'] })

export default function Appointment() {
  return (
    <>
      <Header/>
      <main className={`${styles.flex} ${inter.className}`}>
        <SideNav/>
        <div className={styles.w100}>
          <div className= {`${styles.textLight} ${styles.fontLg } ${styles.w100}`}>Appointments</div>
          <div className={styles.main2} >
            <div className={styles.btnBooking}><AppointmentModal /></div>
          </div>
          <div className={styles.notificationsection}>
          <p className={styles.bold}>Today</p><br/>
          <div className={styles.flex}>
            <div className={styles.pt10}>
              <Image
                className={styles.iconMini}
                src="/appointment-img.png"
                alt="UI Logo"
                width={20}
                height={20}
                priority
              />
            </div>
            <div className={styles.heading}>
              <div className={styles.notificationDetails}>
                <p className={styles.bold}>Appointment Booking Successful</p>
                <p>You have successfully booked a session</p>
                <p>Doctor: Dr. Ayo</p>
                <p>Date: 16-11-2023</p>
                <p>Time: 9:00am</p>
                <p className={styles.textBlack}>9.00pm</p>
              </div>
              <div><button className={styles.readBtn}>Remind Me</button></div>
            </div>
          </div>
          
        </div>
        </div>
       
       
       {/* <AppointmentModal/> */}
     </main>
    </>
  )
}
