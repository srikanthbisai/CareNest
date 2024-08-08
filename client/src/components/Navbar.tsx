import { Link } from "react-router-dom"
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <div className="w-full flex h-20 bg-transparent sm:space-x-5">
      <div className="container flex justify-between w-3/4 m-auto">

      <div className="logo font-bold font-serif text-3xl flex gap-2 justify-center items-center ">
        <img src="hands2.png" alt="" width={60} height={1} />
        <Link to="/">CareNest</Link>
      </div>

      <div className="listItems space-x-10  justify-center items-center font-bold font-mono text-2xl hidden lg:flex xl:flex">
        <Link to="/plans"> Plans</Link>
        <Link to="/about">About</Link>
        <Link to="/blog"> Blogs</Link>
        <Link to="/services"> Services</Link>
        <Link to="/login"> Login</Link>
        <Link to="/register"> Register</Link>
      </div>

       <div className="sidebar md:hidden lg:hidden xl:hidden flex justify-center items-center">
        <IoMenu/>
       </div>
       
    </div>
      </div>
  )
}

export default Navbar