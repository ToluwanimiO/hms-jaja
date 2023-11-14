import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Notification() {
  return (
    <>
      <Header/>
      <main className={`${styles.flex} ${inter.className}`}>
        <SideNav/>
        <div className={styles.w100}>
        <div className={styles.heading}>
          <div>Notifications</div>
          <div>
            <span className={styles.userInfo}>TG</span>
            <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Tunde Gunner&nbsp;<i class="fa-solid fa-angle-down"></i></button>
            <div className={styles.dropdownContent}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            </div>
          </div>
        </div>
        <div className={`${styles.textLight} ${styles.fontLg }`}>Notifications</div>
        <div className={styles.notificationsection}>
          <p className={styles.bold}>Today</p><br/>
          <div className={styles.flex}>
            <div className={styles.pt10}>
              <Image
                className={styles.iconMini}
                src="/payments.svg"
                alt="UI Logo"
                width={20}
                height={20}
                priority
              />
            </div>
            <div className={styles.heading}>
            <div className={styles.notificationDetails}>
              <p className={styles.bold}>Payment Successful</p>
              <p>You have successfully made a payment for Pharmaceutical drugs</p>
              <p className={styles.textBlack}>Now</p>
            </div>
            <div><button className={styles.readBtn}>Mark as Read</button></div>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.pt10}>
              <Image
                className={styles.iconMini}
                src="/payments.svg"
                alt="UI Logo"
                width={20}
                height={20}
                priority
              />
            </div>
            <div className={styles.heading}>
              <div className={styles.notificationDetails}>
                <p className={styles.bold}>Request Successful</p>
                <p>Your to see a medical personnel has been confirmed. Date....</p>
                <p className={styles.textBlack}>2:29pm</p>
              </div>
              <div><button className={styles.readBtn}>Mark as Read</button></div>
            </div>
            </div>
        </div>
        <div className={styles.notificationsection}>
          <p className={styles.bold}>Last Week</p><br/>
          <div className={styles.flex}>
            <div className={styles.pt10}>
              <Image
                className={styles.iconMini}
                src="/payments.svg"
                alt="UI Logo"
                width={20}
                height={20}
                priority
              />
            </div>
            <div className={styles.heading}>
            <div className={styles.notificationDetails}>
              <p className={styles.bold}>Payment Successful</p>
              <p>You have successfully made a payment for Pharmaceutical drugs</p>
              <p className={styles.textBlack}>Now</p>
            </div>
            <div><button className={styles.readBtn}>Mark as Read</button></div>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.pt10}>
              <Image
                className={styles.iconMini}
                src="/payments.svg"
                alt="UI Logo"
                width={20}
                height={20}
                priority
              />
            </div>
            <div className={styles.heading}>
              <div className={styles.notificationDetails}>
                <p className={styles.bold}>Request Successful</p>
                <p>Your to see a medical personnel has been confirmed. Date....</p>
                <p className={styles.textBlack}>2:29pm</p>
              </div>
              <div><button className={styles.readBtn}>Mark as Read</button></div>
            </div>
            </div>
        </div>
        </div>
     </main>
    </>
  )
}
