import {Check,} from "lucide-react";
export default function Benefit() {
    return (
      <section className=" w-full bg-gradient-to-r from-pink-50 from-0% via-[#F9F9F9] to-green-50 to-90%   ">
        {/* Left Side */}
        <div className="mx-7 md:py-12 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:mt-50 ">
          <div className="md:pr-19 ">
          <h2 className="text-3xl md:text-[50px] font-[700] font-[Inter] text-[#191A15] mb-6">
            What Benefit Will You Get
          </h2>
          <ul className="md:space-y-10 space-y-5 md:font-[500] font-[Inter] text-[10px] md:leading-[30px] text-[#191A15]">
            {[
              "Free Consulting With Expert Saving Money",
              "Online Banking",
              "Investment Report Every Month",
              "Saving Money For The Future",
              "Online Transaction",
            ].map((benefit, index) => (
              <li key={index} className="flex items-center text-lg text-gray-700 ">
                <Check className="text-white bg-[#54BD95] rounded-full mr-6" />
                {benefit}
              </li>
            ))}
          </ul>
          </div>
          <div className="relative">
          {/* Background Image */}
          <img
            src="/assets/images/Rectangle 48.png"
            alt="Laptop"
            className="w-9/12 sm:w-auto rounded-xl shadow-lg m-auto"
          />
  
          {/* Floating Cards */}
          <div className="absolute  sm:absolute top-4  bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
            <img
              src="/assets/images/Ellipse 33.png "
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Amanda Young</p>
              <p className="text-sm text-gray-500">Expert Saving Money</p>
            </div>
            <img src="/assets/images/Group 109.png" alt="" />
          </div>

          <div className="absolute right-[-20px] top-25 md:top-40 md:right-1 bg-white py-2 px-4 rounded-lg shadow-md text-gray-800">
            <div className="inline-block">
            <p className="text-sm">Total Income</p>
            <p className="font-bold">$245.00</p>
            </div>
            <img className="inline" src="/assets/images/bar-chart-2 1.png" alt="" />
          </div>
         
            <div className="absolute top-[150px] md:top-[200px] sm:absolute sm:top-70 left-0">
              <img src="/assets/images/Group 113.png" alt="" />
            </div>

          <div className="absolute bottom-[-30px] left-4 h-20 bg-white py-2 px-4 rounded-lg shadow-md flex items-center space-x-2">
            <Check className="text-green-500" />
            <p className="text-sm text-gray-600">Money Transfer Successful</p>
          </div>
        </div>
        </div>
  
        {/* Right Side */}
        
      </section>
    );
  }