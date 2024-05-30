import React from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

const Works = () => {
  return (
    <>
    <Nav/>
    <div class="BgContainer py-20">
  <div class="container mx-auto">
    <div class="flex items-center justify-center">
    <div class="text-center text-gold">
        <h1 class="mb-2 font-serif text-3xl lg:text-7xl  font-bold">
          What <br class="md:hidden" />
          WE Do
        </h1>
        <p class="  lg:text-2xl text-gray-lite tracking-wide">
        Turning your event visions  <br class="sm:hidden" />
        into unforgettable realities
        </p>
      </div>
    </div>
  </div>
</div>


    <div className=''>
    <section class="">
    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-[110px]">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gold sm:text-4xl">Why Choose Us</h2>
                <p class="mt-4 text-gray-lite text-lg">In Chennai, the event management scene is bustling, yet we confidently distinguish ourselves from the rest. Our primary aim is to streamline the event planning and execution process, ensuring a stress-free experience for our clients. With a seasoned team of experts at our helm, we specialize in orchestrating events spanning the spectrum of scale, be it intimate gatherings or grand conferences.</p>
                <div class="mt-8">
                <div class="SliderButton text-center font-bold uppercase text-gold px-4 py-3 shadow-[0.4rem_0.4rem_#AE8625,-0.4rem_-0.4rem_#AE8625] transition">
                "Customer satisfaction is our top priority"
            </div>
                </div>
            </div>
            <div class="mt-12 md:mt-0">
                <img src="../../../Images/FB_IMG_1476119279104 - Copy.jpg" alt="About Us Image" class="object-cover rounded-lg shadow-md drop-shadow-[10px_10px_10px_rgba(174,134,37)] "/>
            </div>
        </div>
    </div>
</section>

{/* How we work */}

<div class="Bg2 p-4 min-h-screen">
  <div class="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
    <div class="md:w-2/3 lg:w-1/2">
      <h2 class="my-8 text-2xl font-bold text-gold md:text-4xl">How we work?</h2>
      <p class="text-gray-300">We follow our process to get you started as quickly as possible</p>
    </div>
    <div
      class="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
      <div class="group relative bg- transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
            stroke-linejoin="round" color="#AE8625"  height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path d="M10 10l2 -2v8"></path>
          </svg>
          <div class="space-y-2">
            <h5 class="text-xl font-semibold text-gold transition">Initial Consultation :</h5>
            <p class="text-gray-300">We start by delving into your event needs, orchestrating a comprehensive discussion to swiftly craft the blueprint for your event's successful debut.</p>
          </div>
        </div>
      </div>
      <div class="group relative  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
            stroke-linejoin="round" color="#AE8625"  height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
          </svg>
          <div class="space-y-2">
            <h5 class="text-xl font-semibold text-gold transition group-hover:text-secondary">Agreement Phase :</h5>
            <p class="text-gray-300">Once we align on the event's scope and vision, we seal the deal and promptly dive into action.</p>
          </div>
        </div>
      </div>
      <div class="group relative  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
            stroke-linejoin="round" color="#AE8625"  height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path
              d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1">
            </path>
          </svg>
          <div class="space-y-2">
            <h5 class="text-xl font-semibold text-gold transition group-hover:text-secondary">Event Production :</h5>
            <p class="text-gray-300">With meticulous attention, we bring your event to life, ensuring every detail is finely tuned to perfection</p>
          </div>
        </div>
      </div>
      <div class="group relative  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
            stroke-linejoin="round" color="#AE8625"  height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path d="M10 8v3a1 1 0 0 0 1 1h3"></path>
            <path d="M14 8v8"></path>
          </svg>
          <div class="space-y-2">
            <h5 class="text-xl font-semibold text-gold transition group-hover:text-secondary">Launch Celebration :
            </h5>
            <p class="text-gray-300">At DreamzMedia, we cherish milestones. We commemorate your event's launch across our vibrant social media platforms, spreading the joy and excitement far and wide.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* end of how we work */}

{/* Works we do */}

<section className="p-4 pb-24 lg:px-[110px]  dark:text-gray-800">
	<div className="container mx-auto space-y-12">

  <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="../../../Images/IMG-20190716-WA0032.jpg" alt="" className="h-80   px-5  lg:aspect-video object-cover drop-shadow-[10px_15px_1px_rgba(174,134,37)]" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				<h3 className="text-3xl font-bold text-gold">Wedding Events</h3>
				<p className="my-6 text-gray-lite text-justify opacity-60">
        At DreamzMedia, we specialize in creating unforgettable wedding events that reflect your unique love story. From intimate ceremonies to grand celebrations, our dedicated team ensures every detail is meticulously planned and flawlessly executed. We offer a full range of services, including venue selection, decor, entertainment, catering, and more, all tailored to your vision. With our expertise and passion, we transform your dreams into a beautiful reality, leaving you free to cherish every moment of your special day.
        </p>
        <div class="SliderButton text-center font-bold uppercase text-gold px-4 py-3 shadow-[0.4rem_0.4rem_#AE8625,-0.4rem_-0.4rem_#AE8625] transition">
                "Transforming your dream wedding into a stunning reality"
            </div>
			</div>
		</div>

    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="../../../Images/IMG-20190126-WA0037 - Copy.jpg" alt="" className="h-80  px-5  lg:aspect-video object-cover drop-shadow-[10px_15px_1px_rgba(174,134,37)]" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				<h3 className="text-3xl font-bold text-gold">Corporate Events</h3>
				<p className="my-6 text-gray-lite text-justify opacity-60">
At DreamzMedia, we excel in organizing corporate events that leave a lasting impact. Whether it's a conference, seminar, product launch, or corporate gala, our team ensures seamless execution from start to finish. We provide comprehensive services, including venue selection, AV setup, branding, catering, and entertainment, all customized to meet your company's objectives. With our professionalism and attention to detail, we create engaging and memorable corporate events that elevate your brand and foster meaningful connections
        </p>
        <div class="SliderButton text-center font-bold uppercase text-gold px-4 py-3 shadow-[0.4rem_0.4rem_#AE8625,-0.4rem_-0.4rem_#AE8625] transition">
                "Elevating corporate events to inspire and impress"
            </div>
			</div>
		</div>

    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="../../../Images/IMG-20180328-WA0015.jpg" alt="" className="h-80  px-5  lg:aspect-video object-cover drop-shadow-[10px_15px_1px_rgba(174,134,37)]" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				<h3 className="text-3xl font-bold text-gold">Birthday Events</h3>
				<p className="my-6 text-gray-lite text-justify opacity-60">

        At DreamzMedia, we bring birthday celebrations to life with creativity and flair. Whether it's a milestone birthday, a themed party, or a cozy gathering, our team ensures every detail is perfectly planned and executed. We offer a wide range of services, including venue selection, decorations, entertainment, catering, and personalized touches that reflect the guest of honor's personality. With our passion and expertise, we create joyful and memorable birthday events that guests will cherish for years to come.
        </p>
        <div class="SliderButton text-center font-bold uppercase text-gold px-4 py-3 shadow-[0.4rem_0.4rem_#AE8625,-0.4rem_-0.4rem_#AE8625] transition">
                "Crafting unforgettable birthday celebrations with a personal touch"
            </div>
			</div>
		</div>


	</div>
</section>

{/* end of works we do */}
    </div>
    <Footer/>
    </>
  )
}

export default Works