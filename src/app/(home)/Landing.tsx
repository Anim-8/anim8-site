import Image from "next/image"
import Header from "../components/shared/Header";
import styles from "./Landing.module.scss"

const Landing = () => {
  return (

    <div className={styles.heroContainer} id="home">
        <div className={styles.leftRectangle}></div>
        <div className={styles.rightRectangle}></div>
        <Image src="/hero logo.png" alt="hero logo" width={700} height={700} priority quality={100} style={{ maxWidth: '50%' }}/>
    </div>
  )
}

export default Landing