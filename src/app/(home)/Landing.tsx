import Image from "next/image"
import styles from "./page.module.scss"

const Landing = () => {
  return (
    <div className={styles.heroContainer} id="home">
        <div className={styles.leftRectangle}></div>
        <div className={styles.rightRectangle}></div>
        <div className="flex justify-center items-center h-screen">
          <Image src="/hero_logo.webp" alt="hero logo" width={700} height={700} priority quality={100} style={{ maxWidth: '70%', marginTop: '8%'}}/>
        </div>
    </div>
  )
}

export default Landing