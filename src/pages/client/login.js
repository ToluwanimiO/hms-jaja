import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Header from '../../components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
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
              src="/ui-logo.svg"
              alt="UI Logo"
              width={180}
              height={37}
              priority
            />
            <p className={`${styles.bold} ${styles.mt-5}`}>The <br/> University Health Service</p>
          </div>
          
          <form>
            <div className={styles.formGroup}>
                <label>Jaja Card Number </label>
                <input />
            </div>
            <div className={styles.formGroup}>
                <label>Password </label>
                <input />
            </div>
            <p className={`${styles.blueText} ${styles.alignCenter}`}>Forgot your password?</p>
            <button className={styles.btnForm}>
              <Link href="/client/profile">Login</Link>
            </button>
            <span className={styles.bold}>Don't have an account?</span>
            <span className={styles.blueText}> Create one here</span>
          </form>
        </div>
     </main>
    </>
  )
}
