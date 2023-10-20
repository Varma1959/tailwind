import React from 'react';
import internImage from '../images/intern-desktop-page.png';
import courseImage from '../images/course-icons.png'

const Interns = () => {
  return (
    <div className="bg-[#f8fafc]">
      <div className="flex flex-row">
        <div className=" w-full h-screen mx-auto flex flex-col justify-center mt-5 ml-20">
          <p>
            <span className="text-5xl font-sofia-pro font-bold leading-64">
              Hire
            </span>
            <span className="text-[#da3796] text-5xl font-bold leading-64  p-2">
              Trained Software Interns
            </span>
          </p>
          <p className="text-5xl font-sofia-pro font-bold leading-64 py-3">
            and get things done
          </p>
          <p className="text-5xl font-sofia-pro font-bold leading-64 py-3">
            from day 1.
          </p>
          <p className=" text-3xl py-4">Specially Designed for startups</p>
          <p className="mt-5 mb-8 text-1xl font-semibold"> Trained On</p>
          <img src={courseImage} alt="Your Image" className="w-1/2 h-64" />
        </div>

        <div className="flex w-1/2 h-96 mr-12 mt-20">
          {/* Place your image here */}
          <img src={internImage} alt="Your Image"/>
        </div>
      </div>
    </div>
  );
}

export default Interns
