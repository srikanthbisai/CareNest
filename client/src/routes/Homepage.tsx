import Footer from "../components/Footer";

function HomePage() {
    return (
      <div className="homepage_container ">
        <div className="image_container object-contain sm:h-[450px] md:h-[450px] lg:h-[550px] xl:h-[920px] overflow-hidden relative">
          <img
            src="elder_care.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-1/4 top-1/4 lg:top-1/2 lg:left-[190px] text-black xl:top-[350px] xl:left-[280px] text-center space-y-3">
            <p className="text-3xl text-red-400 tracking-widest hidden lg:block xl:block">Nurturing golden years</p>
            <p className="text-2xl hidden lg:block xl:block">with compassionate care.</p> 
          </div>

        </div>
  
        <div className="infoContainer mt-10 space-y-2">
          <h1 className="text-5xl font-bold font-serif text-center">Welcome to CareNest</h1>
          <p className="text-xl font-medium text-center font-sans">
            A platform to help elderly find the right care
          </p>
          
        </div>

        <div className=" flex flex-col items-center mt-40 benefits_container">
         <p>Benefits of Elder Care At Home</p>
          <div className="4containers flex items-center gap-2 w-3/4 m-auto mt-10 sm:flex-col">
            <div className="bg-red-200">
              <img src="" alt="" />
               Faster Recovery
               <p>--------------------</p> 
               <p>In home elder care services are proven to promote recovery.</p>
            </div>

            <div className="bg-red-200">
              Reduced Health Hazards
              <p>---------------------</p>    
              Assistance for seniors at home reduces instances of hospitalisation.
            </div>

            <div className="bg-red-200 h-1/2">
             Cost Effective as Compared to Hospital
             <p>----------------------</p> 
             Get affordable, professional care in the comfort of home.
            </div>

            <div className="bg-red-200">
             Enhanced quality of Life
             <p>----------------------</p> 
             Elder care services minimise the instances of accidents, ensuring safety.
            </div>

          </div>
        </div>

        <footer>
            <Footer/>
        </footer>
      </div>
    );
  }
  
  export default HomePage;
  