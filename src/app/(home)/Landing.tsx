import Image from "next/image"
import Header from "../components/shared/Header";
import styles from "./Landing.module.scss"

const Landing = () => {
  return (
    <div className={styles.heroContainer} id="animate">
        <Header className="mb-0">Animate your Business</Header>
        <Image src="/animated_brain.gif" alt="animated brain" width={700} height={700} priority quality={100}/>
    </div>
  )
}

export default Landing