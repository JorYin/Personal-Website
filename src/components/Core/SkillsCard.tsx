interface SkillsCard{
  skillName: String,
}

const SkillsCard = ({skillName} : SkillsCard) => {
  return(
    <div className="bg-primary text-center py-2 px-4 rounded">
      <p className="text-second-color font-Kay-Pho-Du text-lg md:text-3xl">{skillName}</p>
    </div>
  )
}

export default SkillsCard