import React from 'react';
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from "next/navigation";

const navItems = ['Profile','Appointments','Resources','Members',]

export default function SideNav() {
  const pathname = usePathname();

  return (
    <header className={styles.sideBarUser}>
    <Image
        className={styles.sideNavLogo}
        src="/ui_logo.svg"
        alt="UI Logo"
        width={120}
        height={37}
        priority
      />
      {navItems.map((item,index)=>(
        <Link key={index} href={`/admin/${item.toLowerCase()}`} className={`${item.toLowerCase() == `profile` ? styles.activeNav : ""} ${styles.iconDiv}`}>
       {/* className={`${pathname == `/client/${item.toLowerCase()}` ? styles.activeNav : ""} */}
        <Image
          className={styles.icon}
          src={`/${item}.svg`}
          alt={item}
          width={120}
          height={37}
          priority
        />
        <p>{item}</p>
        </Link>
      ))}
      <div className={styles.iconDiv}>
        <Image
          className={styles.icon}
          src="/Logout.svg"
          alt="Logout"
          width={120}
          height={37}
          priority
        />
        <p><Link href="/">Logout</Link></p>
        </div>
    </header>
  );
};
