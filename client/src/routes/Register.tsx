function Register() {
  return (
    <div className="register_container flex space-x-10 items-center justify-center sm:mt-60 lg:mt-20">
      <img src="elder_care.png" className="w-1/2 h-1/2 object-contain ml-20 rounded-3xl hidden lg:block" alt=""></img>
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
