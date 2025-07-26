import { FaCar } from "react-icons/fa6"

interface WorkTimeLineEntryProps {
  Company: string,
  Role: string,
  StartMonth: string,
  StartYear: string,
  EndMonth: string,
  EndYear: string
  Description: string,
}

const WorkTimeLineEntry = (
  {Company, Role, StartMonth, StartYear, EndMonth, EndYear, Description}:WorkTimeLineEntryProps
) => {
  return (
    <div  className="flex items-center w-full">
      <div className="w-[50%] text-left pl-8">
        <div className="flex">
          <div className="bg-accent rounded-full h-10 w-10 flex items-center justify-center">
            <FaCar className="text-main-color h-6 w-6" />
          </div>
          <h3 className="text-3xl">{Company}</h3>          
        </div>
                  <p className="text-2xl">{Role}, {StartMonth}, {StartYear} - {EndMonth}, {EndYear}</p>
                <ul>
        <li>{Description}</li>
      </ul>
      </div>
            {/* Center Line and Circle */}
      <div className="w-2/12 flex justify-center">
        <div className="relative">
          <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 relative"></div>
        </div>
      </div>
      
      {/* Empty space on the other side */}
      <div className="w-[50%]"></div>
    </div>
  )
}

export default WorkTimeLineEntry