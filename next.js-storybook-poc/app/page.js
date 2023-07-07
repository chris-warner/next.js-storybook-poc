import Image from 'next/image'
import styles from './page.module.css'
import HelloWorld from '@/components/HelloWorld'

export default function Home() {
  return (
    <main className={styles.main}>
        <HelloWorld />
    </main>
  )
}
