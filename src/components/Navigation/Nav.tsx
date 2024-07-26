const Nav = () => {
  return(
      <div className="w-full py-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-between items-center mx-5">
            <div>
              <h1 className="font-extrabold">
                Jordan.Y
              </h1>
            </div>
            <div>
              <ul className="flex">
                <li className="py-2 px-4">
                  <a className="font-bold">About</a>
                </li>
                <li className="ml-4 py-2 px-4">
                  <a className="font-bold">Projects</a>
                </li>
                <li className="ml-4 py-2 px-4">
                  <a className="font-bold">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
  )
}

export default Nav;

