import { useState } from "react";
import {NavLink} from "react-router-dom";


function Register() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true); 
      const formData = new FormData(e.currentTarget);
      // Convert FormData to a plain object
      const formObject = Object.fromEntries(formData.entries()) as {
        username: string;
        email: string;
        password: string;
      };
      // Extract form values
      const { username, email, password } = formObject;
  
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
  
      // Example error handling
      if (!username || !email || !password) {
        setError("Please fill in all fields");
      } 
    } catch (error) {
      setError(null);
      console.error(error)
    }finally{
      setIsLoading(false);
    }

  };

  return (
    <div className="register_container h-[700px] flex space-x-10 items-center justify-center pt-20">
      <img
        src="care2.png"
        className="w-1/2 h-full object-cover rounded-xl ml-20 hidden lg:block shadow-xl"
        alt=""
      />
      <form
        className="flex flex-col gap-[20px] w-1/2 justify-center items-center"
        onSubmit={handleRegister} // Use onSubmit for form submission
      >
        <h1 className="font-bold text-2xl">Create an account</h1>
        <input
          name="username"
          type="text"
          placeholder="Username"
          className="p-[20px] border border-solid border-teal-400 rounded-lg"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="p-[20px] border border-solid border-teal-400 rounded-lg"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-[20px] border border-solid border-teal-500 rounded-lg"
          required
        />
        <button 
          type="submit" // Ensure the button type is "submit"
          className="bg-teal-700 p-3 text-white font-bold w-[250px] rounded-md"
          disabled={isLoading}
        >
          Submit
        </button>
        {error && <p className="text-red-500">{error}</p>} {/* Conditionally render error */}
        <NavLink to="/login">
          <button className="font-bold w-[250px] rounded-md text-black">
            Already have an account?
          </button>
        </NavLink>
      </form>
    </div>
  );
}

export default Register;
