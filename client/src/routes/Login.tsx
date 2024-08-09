import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay to allow mounting
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(form.entries());
    const { email, password } = formObject;
    console.log("email", email);
  };

  return (
    <div className="register_container h-[700px] flex space-x-10 items-center justify-center pt-20 ml-14 relative overflow-hidden">
      <img
        src="care2.png"
        className={`w-1/2 h-full object-cover shadow-2xl rounded-xl transition-transform duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} lg:block`}
        alt=""
      />
      <form
        className="flex flex-col gap-[20px] w-1/2 h-full justify-center items-center"
        onSubmit={handleLogin}
      >
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

        <button
          type="submit"
          className="bg-teal-700 p-3 text-white font-bold w-[250px] rounded-md"
        >
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

export default Login;
