
import {Check,} from "lucide-react";
export default function Pricing() {
    return (
      <section className="max-w-7xl mx-auto py-12 px-6 text-center bg-gradient-to-r from-gray-100 from-0% via-[#F9F9F9] to-green-50 to-90%   ">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Choose plan
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          That’s Right For You
        </h2>
        <p className="text-gray-600 mb-6">
          Choose plan that works best for you, feel free to contact us
        </p>
  
        {/* Billing Toggle */}
        <div className=" m-auto flex items-center justify-center mb-8 w-[340px] rounded-lg bg-white gap-2">
          <button className="w-[160px] p-3">
            Bill Monthly
          </button>
          <button className="w-[160px] bg-[#54BD95] text-[#FFFFFF] rounded-lg p-3">
            Bill Yearly
          </button>
        </div>
  
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-[30px] font-[Inter] leading-[36px] font-[600] text-gray-800 mb-2">Free</h3>
            <p className="text-[#A6A6A6] text-[27px] leading-[27px] font-[500] mb-4">
              Have a go and test your superpowers
            </p>
            <p className="text-4xl font-bold mb-20">$0</p>
            <div>
            <ul className="text-gray-600 mb-20 space-y-8">
              {[
                "2 Users",
                "2 Files",
                "Public Share & Comments",
                "Chat Support",
                "New income apps",
              ].map((item, index) => (
                <li key={index} className="flex items-start text-[#191A15] font-[500] font-[Inter] text-[18px] leading-[30px]">
                  <Check className="bg-[#54BD95] mr-2 rounded-xl text-[10px] text-gray-100" />
                  {item}
                </li>
              ))}
            </ul>
            </div>
            <button className=" text-[#54BD95] font-[Inter] font-[600] text-[18px] leading-[30px] py-2 px-4 shadow-md rounded-lg">
              Signup for free
            </button>
          </div>
  
          {/* Pro Plan */}
          <div className="bg-[#54BD95] text-white shadow-md rounded-xl p-6 text-center relative">
            <h3 className="text-[30px] font-[Inter] font-[600] leading-[36px] text-[#FFFFFF] mb-2">Pro</h3>
            <p className="mb-4 font-[Inter] font-[500] text-[18px] leading-[27px]">Experiment the power of infinite possibilities</p>
            <p className="text-4xl font-bold mb-4">$8</p>
            <div className="bg-[#85DAB9] text-[14px] leading-[30px] font-[600] font-[Inter] py-1 px-2 rounded-[10px] mb-4 inline-block">
              Save $50 a year
            </div>
            <div className="bg-[#FFFFFF] rounded-xl p-6">
            <ul className="text-gray-600 mb-20 space-y-8">
              {[
                "4 Users",
                "All apps",
                "Unlimited editable exports",
                "Folders and collaboration",
                "All incoming apps",
              ].map((item, index) => (
                <li key={index} className="flex items-start text-[#191A15] font-[500] font-[Inter] text-[18px] leading-[30px]">
                  <Check className="bg-[#54BD95] mr-2 rounded-xl text-[10px] text-gray-100" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-[#54BD95] w-[260px] h-[64px] py-2 px-4 rounded-[20px] font-[Inter] font-[600] text-[16px] shadow-md ">
              Go to pro
            </button>
            </div>
          </div>
  
          {/* Business Plan */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Business
            </h3>
            <p className="text-[#A6A6A6] text-[18px] leading-[27px] font-[500] mb-4">
              Unveil new superpowers and join the Design League
            </p>
            <p className="text-4xl font-bold mb-20">$16</p>
              <div>
            <ul className="text-gray-600 mb-20 space-y-8">
              {[
                "All the features of pro plan",
                "Account success Manager",
                "Single Sign-On (SSO)",
                "Co-conception program",
                "Collaboration-Soon",
              ].map((item, index) => (
                <li key={index} className="flex items-start text-[#191A15] font-[500] font-[Inter] text-[18px] leading-[30px]">
                  <Check className="bg-[#54BD95] mr-2 rounded-xl text-[10px] text-gray-100" />
                  {item}
                </li>
              ))}
            </ul>
            </div>
            <button className="text-[#54BD95] font-[Inter] font-[600] text-[18px] leading-[30px] py-2 px-4 shadow-md ">
              Goto Business
            </button>
          </div>
        </div>
      </section>
    );
  }