import HeaderProps from "@/models/HeaderProps"

const Header = ({ children, className = "" }: HeaderProps) => {
  return (
    <h1 className={`mb-4 text-4xl font-normal leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center content-center justify-center ${className}`}>
        { children }
    </h1>
  )
}

export default Header