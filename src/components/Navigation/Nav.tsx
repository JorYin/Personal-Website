const Nav = () => {
  const navItemStyle = "text-4xl hover:bg-accent duration-300 ease-in-out"

  return(
      <div className="w-full py-4 text-main-color font-Karantina">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-center items-center mx-5">
            <ul className="flex items-center justify-center">
              <li>
                <a href="/" className={navItemStyle}>
                  Work
                </a>
              </li>
              <li className="text-4xl text-center mx-4">:</li>
              <li>
                <a href="/about" className={navItemStyle}>
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  )
}

export default Nav;