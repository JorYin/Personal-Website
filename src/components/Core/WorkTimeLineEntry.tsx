import { IconType } from "react-icons"

interface WorkTimeLineEntryProps {
  Id: number,
  Icon: IconType
  Company: string,
  Role: string,
  StartMonth: string,
  StartYear: string,
  EndMonth: string,
  EndYear: string,
  Description: string,
  CurrentJob:boolean
}

const WorkTimeLineEntry = (
  {Id, Icon, Company, Role, StartMonth, StartYear, EndMonth, EndYear, Description, CurrentJob}:WorkTimeLineEntryProps
) => {
  return (
    <div className={`flex ${Id % 2 == 0 ? "" : "flex-row-reverse"} items-center w-full`}>
      <div className={`flex flex-col justify-center ${Id % 2 == 0 ? "items-end" : "items-start"} w-5/12`}>
        <div className={`my-24 w-full max-w-[300px]`}>
          <div className="flex justify-start items-center gap-4">
            <div className="hidden bg-accent rounded-full h-10 w-10 md:flex items-center justify-center">
              <Icon className="text-main-color h-6 w-6" />
            </div>
            <h3 className="font-Karantina text-4xl md:text-7xl">{Company}</h3>          
          </div>
          <div className="font-Kay-Pho-Du">
            <p className="font-bold text-lg md:text-3xl">{Role}</p>
            <p className="text-sm md:text-lg">{StartMonth}, {StartYear} - {EndMonth}, {EndYear}</p>
          </div>
          <ul className="font-Kay-Pho-Du text-sm">
            <li>{Description}</li>
          </ul>
        </div>
      </div>
      <div className="w-2/12 flex justify-center">
        <span className="relative flex size-4">
          {CurrentJob && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary"></span>}
          <span className={`relative inline-flex size-4 rounded-full ${CurrentJob ? "bg-accent" : "bg-accent/75"}`}></span>
        </span>
      </div>
      <div className="w-5/12"></div>
    </div>
  )
}

export default WorkTimeLineEntry