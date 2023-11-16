import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Header from '../../components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Register() {
  return (
    <>
      <Header/>
      <main className={`${styles.flex} ${inter.className}`}>
        <div className={styles.sideBar}>

        </div>
        <div className={styles.main}>
          <div className={styles.alignCenter}>
            <Image
              className={styles.logo}
              src="/ui_logo.svg"
              alt="UI Logo"
              width={180}
              height={37}
              priority
            />
            <p className={`${styles.bold} ${styles.mt-5}`}>The <br/> University Health Service</p>
          </div>
          <br/>
          <form>
          <div className={styles.formGroup}>
                <label>Full Name </label>
                <input />
            </div>
            <div className={styles.formGroup}>
                <label>Jaja Card Number </label>
                <input />
            </div>
            <div className={styles.formGroup}>
                <label>Phone Number </label>
                <input />
            </div>
            <div className={styles.formGroup}>
                <label>Password </label>
                <input type="password"/>
            </div>
            <button className={styles.btnForm}>
              <Link href="/client/profile">Sign up</Link>
            </button>
            <span className={styles.bold}>Already have an account?</span>
            <span className={styles.blueText}>
              <Link href="/client/login"> Log in</Link>
            </span>
          </form>
        </div>
     </main>
    </>
  )
}
