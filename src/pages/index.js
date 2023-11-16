import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        <div className={`${styles.center} ${styles.logodiv}`}>
          <Image
            className={styles.logo}
            src="/ui_logo.svg"
            alt="jaja Logo"
            width={180}
            height={37}
            priority
          />
          <p className={styles.logoText}>The University Health Service</p>
        </div>

        <div className={`${styles.center} ${styles.welcomediv}`}> 
            <p className='text-4xl text-center'>WELCOME TO THE UNIVERSITY HEALTH SERVICE</p>
        </div>

        <div className={styles.menu}> 
            <div className={styles.menuClient}>
              <Link href="/client/login" className={styles.client}>Client</Link>
            </div>
            <div className={styles.menuAdmin}>
              <Link href="/client/login" className={styles.admin}>Admin</Link>
            </div>
        </div>

        
      </main>
    </>
  )
}
