import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="w-full flex h-20 bg-transparent sm:space-x-5">
      <div className="container flex justify-between w-3/4 m-auto">

      <div className="logo  font-bold font-serif text-3xl">
        <Link to="/">CareNest</Link>
      </div>

      <div className="listItems space-x-10  font-bold font-mono text-2xl hidden lg:flex xl:flex">
        <Link to="/"> Plans</Link>
        <Link to="/">About</Link>
        <Link to="/"> Blogs</Link>
        <Link to="/services"> Services</Link>
        <Link to="/login"> Login</Link>
        <Link to="/register"> Register</Link>
      </div>

       <div className="sidebar hidden sm:flex-col">
         
       </div>
    </div>
      </div>
  )
}

export default Navbar