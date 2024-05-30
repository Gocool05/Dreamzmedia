import React from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Stats from '../../components/Stats'
import Values from './Values'
const About = () => {
  return (
    <>
    <Nav/>
    <div class="BgContainer  py-20">
  <div class="container mx-auto">
    <div class="flex items-center justify-center">
      <div class="text-center text-gold">
        <h1 class="mb-2 font-serif text-3xl lg:text-7xl  font-bold">
          About <br class="md:hidden" />
          Dreamzmedia
        </h1>
        <p class="  lg:text-2xl text-gray-lite tracking-wide">
        Unleash Your Events <br class="sm:hidden" />
        with Dreamzmedia.
        </p>
      </div>
    </div>
  </div>
</div>


<div className=''>
<div class="relative flex flex-col items-center py-14 mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
    <div class="w-full h-64 lg:w-1/2 lg:h-auto">
        <img class="h-full w-full object-cover" src="../../../Images/IMG-20190716-WA0027.jpg" alt="Winding mountain road"/>
    </div>
    <div
        class="max-w-lg bg-gray-dark md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div class="flex flex-col p-12 md:px-16">
            <h2 class="text-2xl font-medium uppercase text-gold lg:text-4xl">About Dreamzmedia</h2>
            <p class="mt-4 text-gray-lite opacity-60">
            With nearly a decade of industry experience, we've partnered with top companies and professionals nationwide. Our expertise ensures every event is executed with meticulous attention to detail. Our mantra, "Flourish your dreams beyond expectations," drives us to consistently expand our satisfied client base.
            </p>
            <div class="mt-8">
            <div class="SliderButton text-center font-bold uppercase text-gold px-4 py-3 shadow-[0.4rem_0.4rem_#AE8625,-0.4rem_-0.4rem_#AE8625] transition">
                "Flourish your dreams beyond traditional expectations"
            </div>
            </div>
        </div>
    </div>
</div>
<Stats/>
<Values/>
    </div>
    <Footer/>
    </>
  )
}

export default About