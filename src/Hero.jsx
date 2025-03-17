import Logo from "./Logo";
import Navbar from "./NavBar";
import Buttons from "./Buttons";
import DropdownMenu from "./Bar";


export default function Main() {
 
  return (
    <>
    <div className="mb-10  md:mx-10 md:mb-30  p-4 rounded-lg flex items-center justify-between ">
    <Logo />
    <Navbar/>
    <DropdownMenu/>
    <Buttons/>
    {/* text-4xl text-left  sm:text-[80px] font-[700] font-[Inter] text-[#191A15] */}
    
    </div>
    <div className="mx-7 mb-20">
      <div className="md:grid grid-cols-2">
        <div className="sm:mb-12 p-4">
          <h2 className="text-4xl md:text-[80px] sm:text-left font-[700] text-[#191A15]">
            We&apos;re here to Increase your Productivity
          </h2>
          <br />
          <img src="/assets/images/Vector 32.png" />
          <br />
          <p className ="text-xl md:font-[500] text-[20px] leading-[30px] text-left  text-black">
            Let&apos;s make your work more organize and easily using the Taskio
            Dashboard with many of the latest features in managing work every
            day.
          </p>
          <br />
          <button className="px-4 py-2 bg-[#54BD95] mr-2 text-white rounded-3xl hover:bg-green-600">
            Try free trial
          </button>
          <img className="inline" src="/assets/images/Play.png" />
          <span>View Demo</span>
        </div>

        <div className="mt-10">
          <img className="w-auto" src="/assets/images/Group 138.png" />
        </div>
      </div>
      <br />
      <p className="mb-7 text-center text-black font-[700] text-[40px]">
        More than 25,000 teams use Collabs
      </p>
      <img className="mx-7" src="/assets/images/Logo.png" alt="" />
    </div>
    </>
  );
}
