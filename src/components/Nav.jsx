const Nav = ({ active, setActive }) => {
  const items = ["About", "Experience", "Contact", "Latest Projects"];

  return (
    <div className="text-white text-[24px] mx-4">
      <ul className="flex flex-col items-end gap-12 font-300">
        {items.map((item) => (
          <li
            key={item}
            className={`text-[16px] cursor-pointer ${
              active === item ? "text-white" : "text-stone-600"
            }`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
