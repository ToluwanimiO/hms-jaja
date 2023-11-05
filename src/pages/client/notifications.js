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
        <div className={styles.main}>
        NOTIFICATIONS
        </div>
     </main>
    </>
  )
}
