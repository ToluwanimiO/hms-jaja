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
              src="/ui_logo.svg"
              alt="UI Logo"
              width={180}
              height={37}
              priority
            />
            <p className={`${styles.bold} ${styles.mt-5}`}>The <br/> University Health Service</p>
          </div>
          
          <form className={styles.w50}>
            <div className={styles.formGroup}>
                <label>Staff ID</label>
                <input />
            </div>
            <div className={styles.formGroup}>
                <label>Password </label>
                <input type="password"/>
            </div>
            {/* <p className={`${styles.blueText} ${styles.alignCenter}`}>Forgot your password?</p> */}
            <Link href="/admin/profile"><button className={styles.btnForm}>
              Login
            </button></Link>
          </form>
        </div>
     </main>
    </>
  )
}
