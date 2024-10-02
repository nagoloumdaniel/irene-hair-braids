import React from 'react';
import Social from './SocialMediaButtons';

function Footer() {
  return (
    <footer class="w-full py-14">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto">
            <a href="/" className="flex justify-center items-center whitespace-nowrap text-2xl font-bold">
              <span className="mr-2 w-16">
                <img src="../../public/ddc.png" alt="" />
              </span>
              Irène's Hair Braids
            </a>
            <ul class="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-300">
                <li><a href="/" class="text-gray-800 hover:text-pink-700 duration-500 font-semibold">Home</a></li>
                <li><a href="/#about" class=" text-gray-800 hover:text-pink-700 duration-500 font-semibold">About Us</a></li>
                <li><a href="/#services" class=" text-gray-800 hover:text-pink-700 duration-500 font-semibold">Services</a></li>
                <li><a href="/#contact" class=" text-gray-800 hover:text-pink-700 duration-500 font-semibold">Contact</a></li>
                <li><a href="/list" class=" text-gray-800 hover:text-pink-700 duration-500 font-semibold">Book An Appointment</a></li>
            </ul>
            <div class="flex space-x-10 justify-center items-center mb-14">
              <Social />
            </div>
            <span class="text-lg text-gray-500 text-center block">&copy;<a href="/">Irène's Hair Braids {new Date().getFullYear()}, </a>All rights reserved.</span>
          </div>
      </div>
  </footer>
                                          
  );
}

export default Footer;
