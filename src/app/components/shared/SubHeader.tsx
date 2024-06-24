import HeaderProps from "@/models/HeaderProps"

const SubHeader = ({ children, className}: HeaderProps) => {
  return (
    <h3 className={`text-2xl font-normal leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl ${className}`}>
        { children }
    </h3>
  )
}

export default SubHeader