"use client"
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link"
import { useState } from "react";
export default function Home(){
  const [isOpen , setisOpen] = useState (false)
  function toggleMenu() {
    setisOpen (!isOpen)
  }  return(

   <div>
    {/* Header Section */}
    <section id="header-container" className="min-w-full min-h-20 flex justify-between pl-5 pr-5 items-center sm:pl-9 sm:pr-9 ">
      <div id="logo" className="font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl" ><Link href={"#"}>Gym WorkOut</Link></div>
      {isOpen || ( 
      <nav id="nav-container" className="flex text-base gap-x-6 font-semibold md:text-lg lg:text-xl lg:gap-x-5 relative">
        <li className="hover:text-gray-600"><a href={"#"}>Home</a></li>
        <li className="hover:text-gray-600"><a href={"#about-container"}>About</a></li>
        <li className="hover:text-gray-600"><a href={"#coach-section"}>Our Team</a></li>
        <li className="hover:text-gray-600"><a href={"#footer-section"}>Contact</a></li>
      </nav>
     )} 
      <button className="HamburgerMenu text-2xl hidden" onClick={()=>toggleMenu()}><RxHamburgerMenu /> {isOpen ? '' : ''}
      </button>
   </section>
 {/* Hero Section */}
<section id="hero-container" className="text-center flex items-center justify-center w-full bg-center bg-cover pt-2 pl-1 pr-1">
<div className="flex flex-col items-center"><h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">WorkOut Get Stronger</h1>
<p id="hero-para" className="text-white pt-2 w-5/6 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl sm:w-4/5 md:w-3/5 lg:w-2/5 sm:pt-3 md:pt-4 lg:pt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ratione dolor nam dicta
   rerum nisi aliquid perspiciatis recusandae consequatur aliquam inventore, fugiat aperia
    odio, doloribus placeat beatae quo suscipit consectetur.</p>
    <button className="text-black font-bold h-6 w-16 bg-white my-4 hover:bg-black hover:text-white text-xs sm:h-7 sm:w-20 md:h-8 md:w-24 md:text-sm lg:h-9 lg:w-28 lg:text-base">Join Us</button></div>
</section>
 {/* About Section */}
<section id="about-container" className="w-full pt-3 pl-2 pr-2 flex items-center justify-center gap-12 sm:pt-4 md:pt-5 lg-pt-6 lg:pl-10 lg:pr-10 xl:pl-14 xl:pr-14">
  <div className="about-div w-2/5 ">
    <h1 className="text-3xl font-bold pb-2 sm:text-4xl lg:text-5xl sm:pb-3 lg:pb-4 xl:pb-5"> About Us </h1>
    <p className="text-sm text-justify pb-3 sm:text-base md:text-lg sm:pb-4 lg:pb-5 xl:pb-6">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
      debitis voluptatem perspiciatis accusamus officia rerum. Nostrum sunt
      labore vero recusandae accusantium temporibus illo nesciunt incidunt
      blanditiis ad, placeat laborum quam!</p>
      <button className="h-9 w-24 bg-black text-white text-xs md:h-10 md:w-28 md:text-base">Read More</button>
  </div>
  <div className="image-about"></div>
</section>

 {/* coach Section */}
<section id="coach-section" className="flex">
<div className="box1 pl-14 pr-14 flex flex-col justify-center">
<h1 className="text-lg font-bold text-white pb-2 sm:text-xl md:text-2xl xl:text-3xl"> Free Lesson </h1>
    <p className="text-xs text-justify text-white pb-3 sm:text-sm md:text-base xl:text-lg">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Temporibus debitis voluptatem perspiciatis accusamus officia
      rerum. Nostrum sunt labore vero recusandae accusantium temporibus 
      illo nesciunt incidunt blanditiis ad, placeat laborum quam!</p>
      <button className="h-7 w-24 bg-white text-black  text-xs md:h-8 md:w-32 md:text-sm lg:h-10 lg:w-40 lg:text-base">Read More</button>
</div>
<div className="box2 pl-14 pr-14 flex flex-col justify-center">
<h1 className="text-lg font-bold text-white pb-2 sm:text-xl md:text-2xl xl:text-3xl"> 35% Discount </h1>
    <p className="text-xs text-justify text-white pb-3 sm:text-sm md:text-base xl:text-lg">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Temporibus debitis voluptatem perspiciatis accusamus officia
      rerum. Nostrum sunt labore vero recusandae accusantium temporibus 
      illo nesciunt incidunt blanditiis ad, placeat laborum quam!</p>
      <button className="h-7 w-24 bg-white text-black  text-xs md:h-8 md:w-32 md:text-sm lg:h-10 lg:w-40 lg:text-base">Read More</button>
</div>
<div className="box3 pl-14 pr-14 flex flex-col justify-center">
<h1 className="text-lg font-bold text-white pb-2 sm:text-xl md:text-2xl xl:text-3xl">Free Texting</h1>
    <p className="text-xs text-justify text-white pb-3 sm:text-sm md:text-base xl:text-lg">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Temporibus debitis voluptatem perspiciatis accusamus officia
      rerum. Nostrum sunt labore vero recusandae accusantium temporibus 
      illo nesciunt incidunt blanditiis ad, placeat laborum quam!</p>
      <button className="h-7 w-24 bg-white text-black  text-xs md:h-8 md:w-32 md:text-sm lg:h-10 lg:w-40 lg:text-base">Read More</button>
</div>
</section>
 {/* Contact Section */}
 <section className="contact-section  bg-white flex items-center justify-center">
<div className="contact-item bg-black flex flex-col justify-center items-center">
  <h2 className="text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Contact Us</h2> 
  <input type="text" name="name" placeholder="Your Name" required className="mt-12  text-sm bg-black text-start w-9/12 sm:text-base"/>  <hr className="mt-2  w-3/4"/><br />
   <input type="email" name="email" placeholder="Your Mail" required className="mt-10  text-sm bg-black text-start w-9/12 sm:text-base"/><hr className="mt-2 w-3/4" /><br />
      <input  name="message" placeholder="Your Message" required className="mt-10  text-sm bg-black text-start w-9/12 sm:text-base"></input><hr  className="mt-2 w-3/4"/><br />
        <button type="submit" className="h-8 w-20 bg-white text-black text-sm  mt-2 sm:h-9 sm:w-28 sm:text-base">Submit</button>
</div>
 </section>
  {/* Footer Section */}
  <section id="footer-section" className="h-80 bg-black flex flex-col justify-center pl-16 pr-16 pt-5 pb-5 gap-4 items-start sm:h-96 md:flex-row md:pl-5 md:pr-5 md:gap-16 md:h-44 lg:gap-28 xl:gap-36">
  <div>
    <p className="text-xl font-bold	 text-white lg:text-2xl ">Address</p>
    <li className="text-xs pt-2 text-white sm:text-base lg:text-lg">701 Old York Drive Richmond USA</li>
    <li className="text-xs pt-1 text-white sm:text-base lg:text-lg">+1 9852 8547 25</li>
  </div>
  <div>
    <p className="text-xl font-bold	 text-white lg:text-2xl">Open Hours</p>
    <li className="text-xs pt-2 text-white sm:text-base lg:text-lg">Monday - Friday 6AM - 10PM </li>
    <li className="text-xs pt-1 text-white sm:text-base lg:text-lg">Saturday - 6AM - 5PM</li>
    <li className="text-xs pt-1 text-white sm:text-base lg:text-lg">Sunday Closed</li>
  </div>
  <div>
    <p className="text-xl font-bold	 text-white lg:text-2xl">Tags</p>
    <li className="text-xs pt-2 text-white sm:text-base lg:text-lg">Cardio</li>
    <li className="text-xs pt-1 text-white sm:text-base lg:text-lg">Shape</li>
    <li className="text-xs pt-1 text-white sm:text-base lg:text-lg">Cross-fit</li>
  </div>
  </section>
   </div>
  )
}