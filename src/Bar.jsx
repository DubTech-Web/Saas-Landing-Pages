import { useState, useEffect, useRef } from "react";
import {Menu, X} from "lucide-react";
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown
   function toggleDropdown() {
  setIsOpen(!isOpen);
  console.log("After:", !isOpen);

  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Listen for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute md:hidden right-0 " ref={dropdownRef}>
      {/* Button to open dropdown */}
      <button
        onClick={toggleDropdown}
        className="px-2 py-1 mr-2  bg-[#54BD95] rounded-md shadow-md cursor-pointer"
      > {isOpen ? <X className="text-black"/> : <Menu className="text-gray-600 hover:text-white" />}
      </button>

      {/* Dropdown links */}
      {isOpen &&  (
        <div className="fixed top-12 left-0 w-full border-t bg-[#54BD95] shadow-lg h-fit mt-4">
          <ul className="flex flex-col items-center py-4 text-gray-700 w-full">
            <li className="text-center">
              <a
                href="#home"
                className="block py-2 hover:bg-gray-100 "
                onClick={() => setIsOpen(false)}  // Close dropdown on click
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#product"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                AboutUs
              </a>
            </li> 
            <button className="text-white">Login</button> 
            <button className="p-2  font-[Inter] font-[500] text-[16px] shadow-md  bg-[#033826] text-[#F8F8FA] rounded-lg hover:bg-green-600">SignUp</button>           
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
