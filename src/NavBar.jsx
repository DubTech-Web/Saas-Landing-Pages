import { useState } from "react";

const Navbar = () => {
  const navigation = ['Home', 'Product', 'FAQ', 'Blog', 'AboutUs'];
  const [active, setActive] = useState('Home');  // Track active link

  return (
    <nav className="hidden md:flex flex-1  w-[406px] h-[22px]  justify-center space-x-6">
      {navigation.map((nav, index) => (
        <a
          href={nav}
          key={index}
          onClick={() => setActive(nav)}  // Set active link on click
          className={`text-[18px] leading-5 font-[Inter] ${
            active === nav 
              ? 'text-black'        // Active link classes
              : 'text-gray-400 hover:text-blue-500'  // Inactive link classes
          }`}
        >
          {nav}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;



// export default function NavBar() {
  
//   const navigation = ['Home', 'Product', 'FAQ', 'Blog', 'AboutUs'];
//   return(
//     <nav className="w-[406px] h-[22px] flex-1 flex justify-center space-x-6">
//       {navigation.map((nav, index) => (
//         <a href="#" key={index} className="text-gray-400 hover:text-blue-500 text-[18px] leading-5">
//           {nav}
//         </a>
//       ))}
//       </nav>
//   )
// }
