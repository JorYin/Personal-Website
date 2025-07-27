interface SectionHeadingProps {
  text: string
}

const SectionHeading = ({text}:SectionHeadingProps) => {
  return(
    <h1 className="font-Karantina text-5xl sm:text-9xl text-main-color">{text}</h1>
  )
}

export default SectionHeading