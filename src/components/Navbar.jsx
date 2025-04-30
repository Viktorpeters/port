import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import vik from '../assets/pik.png';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-between b">
      <Link to={'/'} className="flex-3 flex items-center gap-[10px]">
        <img src={vik} className="h-[50px] w-[50px] rounded-full" />
        <p className="text-[#FAEBD7]">Viktor Ajayi | Software Engineer</p>
      </Link>
      <div className="flex-1 flex justify-between text-[13px] hidden md:flex">
        {navLinks.map(({ id, title }) => {
          return <Link key={id}>{title}</Link>;
        })}
      </div>
      <div onClick={() => setToggle((prev) => !prev)}>
        <img
          className="block md:hidden cursor-pointer"
          src={toggle ? close : menu}
        />
      </div>
    </div>
  );
};

export default Navbar;
