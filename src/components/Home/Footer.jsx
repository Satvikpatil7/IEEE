import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white py-10">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1 */}
        <div>
          <p className="text-lg font-semibold mb-2">
            Unlock opportunities, connect with peers, and access exclusive resources by joining <span className="text-[#A548B1]">IEEE</span>.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200">
            Join IEEE Today!
          </button>
        </div>

        {/* Section 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">About Us</a></li>
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">Events</a></li>
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">Membership</a></li>
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">IEEE</a></li>
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">Region 10</a></li>
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">Bangalore Section</a></li>
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">IEEE Collaborate</a></li>
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">About Global IEEE Membership</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Societies</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">Computer Society</a></li>
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">Communications Society</a></li>
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">Power and Energy Society</a></li>
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">Robotics and Automation Society</a></li>
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">Aerospace and Electronic Systems Society</a></li>
          </ul>
          <h4 className="text-lg font-semibold mt-6 mb-2">Affinities</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">Special Interest Group on Humanitarian Technology</a></li>
            <li><a href="#" className="hover:text-[#A548B1] font-extralight">Women in Engineering</a></li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Address:</h4>
          <p className="mb-4 font-extralight">Basaveshwar Engineering College, Vidyagiri, Bagalkote, Karnataka 587102</p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-[#A548B1]"><CiInstagram className='text-3xl' /></a>
            <a href="#" className="hover:text-[#A548B1]"><FaXTwitter className='text-3xl' /></a>
            <a href="#" className="hover:text-[#A548B1]"><CiLinkedin className='text-3xl' /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-400">
        <p>© All rights reserved BEC IEEE</p>
        <p>Crafted with ❤️ & passion by BEC IEEE Web Team 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
