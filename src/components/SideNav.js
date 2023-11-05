import React from 'react';
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from "next/navigation";

const navItems = ['Profile','Appointments','Notifications']

export default function SideNav() {
  const pathname = usePathname();

  return (
    <header className={styles.sideBarUser}>
    <Image
        className={styles.sideNavLogo}
        src="/ui-logo.svg"
        alt="UI Logo"
        width={120}
        height={37}
        priority
      />
      {navItems.map((item,index)=>(
        <Link key={index} href={`/client/${item.toLowerCase()}`} className={`${pathname == `/client/${item.toLowerCase()}` ? styles.activeNav : ""} ${styles.iconDiv}`}>
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
        <p>Logout</p>
        </div>
    </header>
  );
};
