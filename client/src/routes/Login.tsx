
function Login() {
  return (
    <div className="register_container flex space-x-10 items-center justify-around sm:flex-col lg:flex-row sm:mt-60 lg:mt-20">
    <form className="flex flex-col gap-[20px] w-1/2 justify-center items-center sm:w-full sm:justify-center sm:items-center">
      <h1 className="font-bold text-2xl">Login with your id</h1>
      <input name="email" type="email" placeholder="Email" className="p-[20px] border border-solid border-teal-400 rounded-lg" />
      <input name="password" type="password" placeholder="Password" className="p-[20px] border border-solid border-teal-500 rounded-lg"/>
    </form>
    <img src="elder_care.png" alt="" className="w-1/2 h-1/2  rounded-3xl hidden lg:block"></img>
  </div>
  )
}

export default Login