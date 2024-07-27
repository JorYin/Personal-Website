const Contact = () => {
  
  return(
      <section id="contact" className="w-full bg-slate-100 py-64">
        <div className="max-w-7xl mx-auto">
          <h1 className="mx-5 mb-10 text-center text-5xl md:text-8xl lg:text-9xl font-bold font-League-Spartan">LETS GET IN TOUCH!</h1>
          <div className="mx-5 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            <div>
              <h1 className="font-League-Spartan font-medium text-4xl">Email</h1>
              <a>@something</a>
            </div>
            <div className="flex flex-col">
              <div className="mb-10">
                <h1 className="mb-5 font-League-Spartan font-medium text-4xl">Digital Spaces</h1>
                <ul>
                  <li>
                    <a className="font-Libre-Baskerville">LinkedIn</a>
                  </li>
                  <li>
                    <a className="font-Libre-Baskerville">GitHub</a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="font-League-Spartan font-medium text-4xl">Location</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact;