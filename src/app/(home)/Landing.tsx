import Image from "next/image"
import Header from "../components/shared/Header";

const Landing = () => {
  return (
    <div className="w-full text-center flex flex-col items-center mt-4" id="home">
      <Header className="mb-0">Animate your Factory</Header>
      <Image src="/brain.webp" alt="brain.webp" width={700} height={700} priority quality={100}/>
    </div>
  )
}

export default Landing