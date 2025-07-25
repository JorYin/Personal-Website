const Nav = () => {
  return(
      <div className="w-full py-4 text-main-color font-Karantina relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-between items-center mx-5">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl">
                Jordan Yin
              </h1> 
            </div>
            <div>
              <ul className="flex items-center justify-center">
                <li>
                  <a href="" className="text-3xl md:text-4xl hover:bg-accent duration-300 ease-in-out">
                    Work
                  </a>
                </li>
                <li className="text-4xl mx-2">/</li>
                <li>
                  <a href="/about" className="text-3xl md:text-4xl hover:bg-accent duration-300 ease-in-out">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
  )
}

export default Nav;

