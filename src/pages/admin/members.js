import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SideNavAdmin from '../../components/SideNavAdmin';
import Header from '../../components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Notification() {
  return (
    <>
      <Header/>
      <main className={`${styles.flex} ${inter.className}`}>
        <SideNavAdmin/>
        <div className={styles.w100}>
        <div className={styles.heading}>
        <div className={`${styles.textLight} ${styles.fontLg }`}>Members</div>
        <div><button className={styles.addBtn}>Add new Member</button></div>

        </div>
        </div>
     </main>
    </>
  )
}
