import { useState } from "react";
import DropdownMenu from "./Bar";

const Navbar = () => {
  const navigation = ['Home', 'Product', 'FAQ', 'Blog', 'AboutUs'];
  const [active, setActive] = useState('Home');  // Track active link

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-gradient-to-r from-emerald-50 from-10% via-pink-50 via-60% to-emerald-100 to-90%   ">
      <nav className="flex w-full screen-max-width">
        <h2 className="ml-7 h-8 text-3xl font-bold text-[#54BD95] font-[Inter]">Biccas</h2>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navigation.map((nav) => (
            <div
            onClick={() => setActive(nav)}
              key={nav}
              className="px-5 py-2 text-sm cursor-pointer text-gray-300 hover:text-gray-950 transition-all"
              {...(nav === active && { style: { color: 'black' } })}  
            >
              {nav}
            </div>
          ))}
        </div>
        <DropdownMenu />
        
        <div className="md:flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 hidden">
          <button>Login</button>
          <button className="p-2  font-[Inter] font-[500] text-[16px]  bg-[#54BD95] text-[#F8F8FA] rounded-lg hover:bg-green-600">SignUp</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;




