import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between p-8 h-30 bg-[#f8fafc] ">
      <h1 className="w-full text-4xl font-bold text-[#da3796]">
        SkillRazr
      </h1>
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar
