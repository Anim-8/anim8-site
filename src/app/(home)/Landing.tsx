import Image from "next/image"
import styles from "./Landing.module.scss"

const Landing = () => {
  return (
    <div className={styles.heroContainer} id="home">
        <div className={styles.leftRectangle}></div>
        <div className={styles.rightRectangle}></div>
        <Image src="/hero_logo.webp" alt="hero logo" width={700} height={700} priority quality={100} style={{ maxWidth: '70%', marginTop: '8%'}}/>
    </div>
  )
}

export default Landing