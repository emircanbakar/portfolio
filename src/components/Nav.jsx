import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Nav = ({ active, setActive }) => {
  const items = [
    "About",
    "Experience",
    "Contact",
    //  "Latest Projects"
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActive(item);
    setIsOpen(false);
  };

  return (
    <div className="text-white text-[24px] mx-4 z-50">
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-2xl z-50 relative">
          <FaBars />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 left-0 top-0 bg-black bg-opacity-95 flex flex-col items-center justify-center gap-8 z-40">
          <button
            onClick={toggleMenu}
            className="absolute top-12 right-2 text-3xl text-white"
          >
            <IoClose />
          </button>

          <ul className="flex flex-col items-center gap-8 font-300 text-[20px]">
            {items.map((item) => (
              <li
                key={item}
                className={`cursor-pointer transition-colors duration-300 ${
                  active === item ? "text-white" : "text-stone-400"
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="hidden lg:block">
        <ul className="flex flex-col items-end gap-12 font-300 text-right">
          <li className="text-[12px] text-stone-600 select-none cursor-default">
            Software Developer
          </li>
          {items.map((item) => (
            <li
              key={item}
              className={`relative text-[16px] cursor-pointer transition-colors duration-300 text-right ${
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
