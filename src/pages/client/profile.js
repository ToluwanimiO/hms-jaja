import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Profile() {
  const name = 'TUNDE GUNNER'
  return (
    <>
      <Header/>
      
      <main className={`${styles.flex} ${inter.className}`}>
        <SideNav/>
        <div className={styles.block}>
        <div className={styles.divider}></div>
        <div className={styles.profileMain}>
        <div className={`${styles.textLight} ${styles.fontLg}`}>
          <p>{name}</p>
          <div className={styles.profileDetails}>
            <p><span className={styles.bold}>MATRIC NUMBER:</span> 111111</p>
            <p><span className={styles.bold}>FULL NAME:</span> Tunde Gunner Awo</p>
            <p><span className={styles.bold}>FACULTY:</span> SOCIAL SCIENCE</p>
            <p><span className={styles.bold}>DEPARTMENT:</span> Sociology</p>
            <p><span className={styles.bold}>GENOTYPE:</span> AA</p>
          </div>
        </div>
        {/* <div>
          <p>Appointments</p>

        </div> */}
        </div>
        </div>
     </main>
    </>
  )
}
