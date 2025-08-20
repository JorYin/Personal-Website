import WorkInfo from "../../utils/WorkInfo";
import WorkTimeLineEntry from "../Core/WorkTimeLineEntry";
import SectionHeading from "../Core/SectionHeading";

const Work = () => {
  
  return(
  <section id="about" className="w-full py-32 text-main-color rounded-t-2xl">
    <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center">
      <div className="text-center mb-20 mx-5">
          <SectionHeading text="Work Experience" />
      </div>
      <div className="w-full">
        <div className="relative mx-5">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 rounded-sm bg-primary h-full"></div>
          {WorkInfo.map(workEntry => (
            <WorkTimeLineEntry
              key={workEntry.Id}
              Id={workEntry.Id}
              Icon={workEntry.Icon}
              Company={workEntry.Company}
              Role={workEntry.Role}
              StartMonth={workEntry.StartMonth}
              StartYear={workEntry.StartYear}
              EndMonth={workEntry.EndMonth}
              EndYear={workEntry.EndYear}
              Description={workEntry.Description}
              CurrentJob={workEntry.CurrentJob}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Work;