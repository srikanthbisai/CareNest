function Register() {
  return (
    <div className="register_container h-[700px] flex space-x-10 items-center justify-center pt-20">
      <img src="care2.png" className="w-1/2 h-full object-contain ml-20  hidden lg:block" alt=""></img>
      <form className="flex flex-col gap-[20px] w-1/2 justify-center items-center">
        <h1 className="font-bold text-2xl">Create an account</h1>
        <input name="username" type="text" placeholder="Username" className="p-[20px] border border-solid border-teal-400 rounded-lg"/>
        <input name="email" type="email" placeholder="Email" className="p-[20px] border border-solid border-teal-400 rounded-lg" />
        <input name="password" type="password" placeholder="Password" className="p-[20px] border border-solid border-teal-500 rounded-lg"/>
      </form>
    </div>
  );
}

export default Register;
