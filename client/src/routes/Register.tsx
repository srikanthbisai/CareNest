import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [error, setError] = useState(null);

  const handleRegister = () => {
        try {
          
        } catch (error) {
          
        }
  }

  return (
    <div className="register_container h-[700px] flex space-x-10 items-center justify-center pt-20">
      <img src="care2.png" className="w-1/2 h-full object-contain ml-20  hidden lg:block" alt=""></img>
      <form className="flex flex-col gap-[20px] w-1/2 justify-center items-center">
        <h1 className="font-bold text-2xl">Create an account</h1>
        <input name="username" type="text" placeholder="Username" className="p-[20px] border border-solid border-teal-400 rounded-lg"/>
        <input name="email" type="email" placeholder="Email" className="p-[20px] border border-solid border-teal-400 rounded-lg" />
        <input name="password" type="password" placeholder="Password" className="p-[20px] border border-solid border-teal-500 rounded-lg"/>
        <button className="bg-teal-700 p-3 text-white font-bold w-[250px] rounded-md" onClick={handleRegister}>
            Submit
          </button>
          <p>{error}</p>

        <Link to="/register">
          <button className="font-bold w-[250px] rounded-md text-black">
            Don't have an account ?
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Register;
