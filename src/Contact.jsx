import { ArrowRight} from "lucide-react";
export default function Contact() {
    return (
      <section className="bg-[#161C28] text-white px-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:grid grid-cols-2 gap-12">
          {/* Testimonial Section */}
          <div>
            <h2 className="text-3xl md:text-[50px] font-[600] leading-[60px] mb-4">
              People are Saying About DoWhith
            </h2>
            <p className="font-[Inter] text-[#A6A6A6] font-[500] text-[18px] mb-10">
              Everything you need to accept payment and grow your money anywhere
              on planet
            </p>
            <img className="mb-10" src="/assets/images/Group 212.png" alt="" />
              <p className="font-[Inter] text-[#A6A6A6] font-[500] text-[18px] mb-6">
                I am very helped by this E-wallet application, my days are very
                easy to use this application and it&apos;s very helpful in my life,
                even I can pay a short time 😍
              </p>
              <cite className="text-[#A6A6A6] font-[Inter] font-[500] text-[18px] leading-[30px] mb-6">_ Aria Zinanrio</cite>
              
            <div className="grid grid-cols-3 space-y-4 md:flex items-center space-x-4 mt-4">
              {["/assets/images/Ellipse 54.png", "/assets/images/Ellipse 55.png", "/assets/images/Ellipse 56.png","/assets/images/Ellipse 33.png", '/assets/images/Group 215.png'].map(
                (src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`User ${index + 1}`}
                    className="w-17 h-17 rounded-full border-2 border-gray-700"
                  />
                ),
              )}
            </div>
          </div>
  
          {/* Contact Form Section */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-md w-full m-auto">
            <div className="flex flex-col items-center mb-6">
              <img
                src="/assets/images/Group.png"
                alt="Coin Icon"
                className="w-[72px] h-[86px] mb-2"
              />
              <h3 className="text-[30px] font-[500] mb-2">Get Started</h3>
            </div>
            <form>
              <div className="mb-4">
                <p className=" block text-[18px] font-[500] leading-[27px] mb-5">Email</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-[50px] rounded-[10px] bg-[#FFFFFF] text-[#A6A6A6] py-2 px-4 focus:outline-none"
                />
              </div>
              <div className="mb-4">
              <p className=" block text-[18px] font-[500] leading-[27px] mb-5">Message</p>
                <textarea
                  placeholder="What are you say?"
                  className="w-full h-[80px] rounded-[10px] bg-[#FFFFFF] text-[#A6A6A6] py-2 px-4 focus:outline-none"
                  
                ></textarea>
              </div>
              <button
                type="submit"
                className=" w-full h-[60px] bg-[#54BD95] text-[16px] leading-[19px] font-[600] text-[#FFFFFF] py-2 rounded-[10px]"
              >Request Demo
              </button>
              <p className="text-right text-[14px] text-gray-400 mt-2">
                or <a href="#" className="text-white">
                  Start Free Trial
                </a>
              </p>
            </form>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="py-8 mt-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            {/* Footer Left */}
            <div>
              <h4 className="text-[#54BD95] text-[50px] font-[600] leading[30px] mb-2">Biccas</h4>
              <p className="text-[#A6A6A6] text-[18px] leading-[30px] mb-8 font-[500]">
                Get started now try our product
              </p>
              <div className="w-auto flex items-center bg-gray-800 rounded-full overflow-hidden h-[60px] text-[#A6A6A6] border-[2px]">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="py-2 px-4 focus:outline-none flex-1"
                />
                <button type="submit" className="bg-[#A6A6A6] ml-8 mt-1 sm:bg-[#A6A6A6] rounded-full p-3 mr-1">
                  <ArrowRight className="text-white text" />
                </button>
              </div>
            </div>
  
            {/* Footer Center */}
            <div className="grid grid-cols-3 gap-6">
            <div>
              <h5 className="text-white text-[18px] font-[500] mb-4">Support</h5>
              <ul className="text-gray-400  text-[18px] font-[500] space-y-6">
                <li>Help centre</li>
                <li>Account information</li>
                <li>About</li>
                <li>Contact us</li>
              </ul>
            </div>
              <div>
                <h5 className="text-white text-[18px] font-[500] mb-4">Help and Solution</h5>
                <ul className="text-gray-400  text-[18px] font-[500] space-y-7">
                  <li>Talk to support</li>
                  <li>Support docs</li>
                  <li>System status</li>
                  <li>Covid response</li>
                </ul>
              </div>
              <div>
                <h5 className="text-white text-[18px] font-[500] mb-4">Product</h5>
                <ul className="text-gray-400  text-[18px] font-[500] space-y-7">
                  <li>Update</li>
                  <li>Security</li>
                  <li>Beta test</li>
                  <li>Pricing product</li>
                </ul>
              </div>
            </div>
          </div>
  
              
          <p className=" md:mt-8">
            © 2022 Biccas Inc. Copyright and rights reserved | 
          </p>
          <p className="md:text-right">Terms and Conditions - Privacy Policy</p>
        </footer>
      </section>
    );
  }