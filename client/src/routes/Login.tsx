import { useState } from "react";
import { Form, Link } from "react-router-dom";

function  Login() {
  const [error, setError] = useState(null);

  const handleLogin = (e:any) => {
    e.preventDefault();
     const form = new FormData(e.target);
     const formObject = Object.fromEntries(form.entries());
     const {email,password} = formObject;
     console.log("email", email);
  }

  return (
    <div className="register_container h-[700px] flex space-x-10 items-center justify-center pt-20">
      <img
        src="care2.png"
        className="w-1/2 h-full object-cover shadow-2xl rounded-xl ml-20 hidden lg:block"
        alt=""
      ></img>
      <form className="flex flex-col gap-[20px] w-1/2 h-full justify-center items-center">
        <h1 className="font-bold text-2xl">Login your account</h1>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="p-[20px] border border-solid border-teal-400 rounded-lg"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-[20px] border border-solid border-teal-500 rounded-lg"
        />

          <button className="bg-teal-700 p-3 text-white font-bold w-[250px] rounded-md" onSubmit={handleLogin}>
            Submit
          </button>
         
         <p>{error}</p>
        <Link to="/register">
          <button className="font-bold w-[250px] rounded-md text-black">
            Already have an account ?
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
