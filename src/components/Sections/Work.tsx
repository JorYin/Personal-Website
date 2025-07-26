import WorkTimeLineEntry from "../Core/WorkTimeLineEntry";

const Work = () => {
  
  return(
  <section id="about" className="w-full py-32 text-main-color rounded-t-2xl relative overflow-hidden">
    <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center">
              <div className="text-center mb-20 mx-5">
          <h1 className="font-League-Spartan text-5xl sm:text-9xl font-bold">Work Experience</h1>
      </div>

      <div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>

        <div>
          <WorkTimeLineEntry
            Company="CarMax"
            Role="Software Engineer Intern"
            StartMonth="June"
            StartYear="2025"
            EndMonth="August"
            EndYear="2025"
            Description="SNS Team + SF Team"
          />
        </div>
        <div>
          <WorkTimeLineEntry
            Company="CarMax"
            Role="Software Engineer Intern"
            StartMonth="June"
            StartYear="2025"
            EndMonth="August"
            EndYear="2025"
            Description="SNS Team + SF Team"
          />
        </div>
      </div>
      </div>
    </div>
  </section>
  )
}

export default Work;