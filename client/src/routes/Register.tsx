import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Register() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay for the transition effect
    return () => clearTimeout(timer);
  }, []);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
      const formData = new FormData(e.currentTarget);
      const formObject = Object.fromEntries(formData.entries()) as {
        username: string;
        email: string;
        password: string;
      };
      const { username, email, password } = formObject;
  
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
  
      if (!username || !email || !password) {
        setError("Please fill in all fields");
      } 
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register_container h-[700px] flex space-x-10 items-center justify-center pt-20 relative overflow-hidden">
      <img
        src="care2.png"
        className={`w-1/2 h-full object-cover rounded-xl ml-20 shadow-xl transition-transform duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} hidden md:block`}
        alt=""
      />
      <form
        className="flex flex-col gap-[20px] w-1/2 justify-center items-center"
        onSubmit={handleRegister}
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
          type="submit"
          className="bg-teal-700 p-3 text-white font-bold w-[250px] rounded-md"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
        {error && <p className="text-red-500">{error}</p>}
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
