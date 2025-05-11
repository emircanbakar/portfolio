import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Nav = ({ active, setActive }) => {
  const items = ["About", "Experience", "Contact", "Latest Projects"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white text-[24px] mx-4">
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          <FaBars />
        </button>
      </div>

      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center gap-4 font-300">
          <li className="text-[12px] text-stone-600 select-none cursor-default">
            Software Developer
          </li>
          {items.map((item) => (
            <li
              key={item}
              className={`relative text-[16px] cursor-pointer transition-colors duration-300 ${
                active === item ? "text-white" : "text-stone-600"
              }`}
              onClick={() => setActive(item)}
            >
              {item}
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] w-full transition-opacity duration-300 ${
                  active === item ? "opacity-100 bg-white" : "opacity-0"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:block">
        <ul className="flex flex-col items-end gap-12 font-300">
          <li className="text-[12px] text-stone-600 select-none cursor-default">
            Software Developer
          </li>
          {items.map((item) => (
            <li
              key={item}
              className={`relative text-[16px] cursor-pointer transition-colors duration-300 ${
                active === item ? "text-white" : "text-stone-600"
              }`}
              onClick={() => setActive(item)}
            >
              {item}
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] w-full transition-opacity duration-300 ${
                  active === item ? "opacity-100 bg-white" : "opacity-0"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
