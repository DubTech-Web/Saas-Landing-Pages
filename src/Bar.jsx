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
    <div className="relative md:hidden left-20 sm:left-5" ref={dropdownRef}>
      {/* Button to open dropdown */}
      <button
        onClick={toggleDropdown}
        className="px-4 py-2"
      > {isOpen ? <X className="text-black"/> : <Menu className="text-black " />}
      </button>

      {/* Dropdown links */}
      {isOpen &&  (
        <div className="fixed top-12 left-0 w-full border-t bg-[#54BD95] shadow-lg h-full mt-4">
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
            <li>
              <a
                href="#login"
                className="block px-4 py-2 text-gray-50 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
            </li> 
            <li>
              <a
                href="#signup"
                className="block px-4 py-2 bg-gray-500 rounded-3xl shadow-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                SignUp
              </a>
            </li>           
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
