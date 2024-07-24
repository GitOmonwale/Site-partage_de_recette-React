import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { MdCopyright } from "react-icons/md";
import logo from "../assets/tastebite-logo.png"
const Footer = () => {
  return (
    <footer className='bg-gray-100 mt-14 lg:px-28 lg:py-14 md:px-20 md:py-10 px-10 py-5 flex flex-col gap-2'>
      <div className='flex justify-between items-start'>
        <div className='flex flex-col max-w-80 gap-2'>
          <img src={logo} alt="" className="h-12 w-52 filter grayscale brightness-0" />
          <p className='text-gray-500'>On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demorilized by the charms of pleasure of the moment</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h2>
            Tastebite
          </h2>
          <div className='flex flex-col gap-1 text-gray-500'>
          <a href="">About us</a>
          <a href="">Careers</a>
          <a href="">Contact us</a>
          <a href="">Feedback</a>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2>
            Legal
          </h2>
<div className='flex flex-col gap-1 text-gray-500'>
<a href="">Terms</a>
          <a href="">Conditions</a>
          <a href="">Cookies</a>
          <a href="">Copyright</a>
</div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2>
            Follow
          </h2>
         <div className='flex flex-col gap-1 text-gray-500'>
         <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">Intagram</a>
          <a href="">Youtube</a>
         </div>
        </div>
      </div>
      <hr />
      <div className='flex justify-between items-center text-gray-500 mt-3'>
        <a href="#" className='flex items-center gap-1'>
          <MdCopyright></MdCopyright>
          <span>2020 tastebite - All rights deserved</span>
        </a>
        <div className='flex gap-5 text-3xl'>
        <FiFacebook></FiFacebook>
<FiTwitter></FiTwitter>
<FiInstagram></FiInstagram>
<FiYoutube></FiYoutube>
        </div>
      </div>
    </footer>
  )
}

export default Footer
