import DesktopNavAnimation from "../Animations/DesktopNavAnimation";

const Nav = () => {
  return(
    <DesktopNavAnimation>
      <div className="w-full py-4 hidden lg:block">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-between items-center mx-5">
            <div>
              <h1 className="font-extrabold text-2xl">
                Jordan.Y
              </h1>
            </div>
            <div>
              <ul className="flex">
                <li className="py-2 px-4">
                  <a href="/#about" className="font-bold">About</a>
                </li>
                <li className="ml-4 py-2 px-4">
                  <a href="/#projects" className="font-bold">Projects</a>
                </li>
                <li className="ml-4 py-2 px-4">
                  <a href="/#contact" className="font-bold">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </DesktopNavAnimation>
  )
}

export default Nav;

