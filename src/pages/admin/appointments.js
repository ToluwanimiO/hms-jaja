import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SideNavAdmin from '../../components/SideNavAdmin';
import Header from '../../components/Header';
import AppointmentModal from '@/components/AppointmentModal';

const inter = Inter({ subsets: ['latin'] })

export default function Appointment() {
  return (
    <>
      <Header/>
      <main className={`${styles.flex} ${inter.className}`}>
        <SideNavAdmin/>
        <div className={styles.w100}>
          <div className= {`${styles.textLight} ${styles.fontLg }`}>Appointments</div>
          <div className={styles.main2} >
            View All Apointments          
          </div>
        </div>
       {/* <AppointmentModal/> */}
     </main>
    </>
  )
}
