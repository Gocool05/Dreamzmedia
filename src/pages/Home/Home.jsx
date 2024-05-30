import React from "react";
import Clients from "./Clients";
import Footer from "../../components/Footer";
import Grids from "./Grids";
import Nav from "../../components/Nav";
import Slider from "./Slider";
import Testimonial from "./Testimonial";
import SpinningCircle from "../../components/SpinningCircle";

const Home = () => {
  return (
    <>
      <Nav />
      <Slider />
      <div className="hero-pattern z-10">
        <section class="">
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gold ">
              Welcome to Dreamzmedia!
              </h2>
              <p class="mb-4">
              Dreamzmedia Pvt. Ltd., based in Chennai, is a leading event management company specializing in South Indian weddings, corporate events, TV commercials, and more. We cater to all client needs with personal care and attention to detail. Our services span various event types, ensuring high-quality, comprehensive planning.
              </p>
              <p>
              Beyond events, we produce TV commercials, corporate ads, films, music, audio-video productions, and radio jingles. We excel in planning grand weddings, including royal, beach, and theme weddings, and offer dream venues across India with attractive honeymoon packages. At Dreamzmedia, we provide everything from event planning to production services.
              </p>
            </div>
            <div class="grid grid-cols-2  gap-4 mt-8">
              <img
                class="w-auto lg:h-[400px]  object-cover rounded-lg z-10 drop-shadow-[5px_5px_10px_rgba(174,134,37)]"
                src="../../../Images/FB_IMG_1474178570115.jpg"
                alt="office content 1"
              />
              <img
                class="mt-4 w-full lg:h-[400px] object-cover  lg:mt-10 rounded-lg z-10 drop-shadow-[5px_5px_10px_rgba(174,134,37)]"
                src="../../../Images/IMG-20180427-WA0014 - Copy.jpg"
                alt="office content 2"
              />
        <div className="ml-[50%] Cycle">
          <SpinningCircle />
        </div>
            </div>
          </div>
        </section>
        <section class="bg-transparent  ">
          <Grids />
        </section>
      </div>

      {/* images section */}
      <section class="bg-gray-normal overflow-hidden">
        <h2 className="text-gold lg:text-5xl text-4xl uppercase text-center p-5">
          A Glimpse of dreamzmedia
        </h2>
        <div class="max-w-screen-xl 2xl:max-w-screen-3xl px-12 md:px-12 mx-auto py-12 my-20 lg:py-24 space-y-24  flex flex-col justify-center">
          <div class="flex flex-col sm:flex-row mx-auto ">
            <a href="/gallery" >
              {" "}
              <img
                src="../../../Images/FB_IMG_1474178603458.jpg"
                class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 lg:h-[300px] lg:w-[500px] h-full w-full object-cover lg:hover:scale-150 transform origin-bottom drop-shadow-[5px_5px_10px_rgba(174,134,37)]"
                alt="#_"
              />{" "}
            </a>
            <a href="/gallery">
              {" "}
              <img
                src="../../../Images/IMG-20190716-WA0033.jpg"
                class="rounded-xl   -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 lg:h-[300px] lg:w-[500px] h-full w-full object-cover lg:hover:scale-150 transform origin-bottom drop-shadow-[5px_5px_10px_rgba(174,134,37)]"
                alt="#_"
              />{" "}
            </a>
            <a href="/gallery" >
              {" "}
              <img
                src="../../../Images/IMG-20181023-WA0016 - Copy.jpg"
                class="rounded-xl   rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 lg:h-[300px] lg:w-[500px] h-full w-full object-cover lg:hover:scale-150 transform origin-bottom drop-shadow-[5px_5px_10px_rgba(174,134,37)]"
                alt="#_"
              />{" "}
            </a>
            <a href="/gallery">
              {" "}
              <img
                src="../../../Images/FB_IMG_1476162293399 - Copy.jpg"
                class="rounded-xl    -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 lg:h-[300px] lg:w-[500px] h-full w-full object-cover lg:hover:scale-150 transform origin-bottom drop-shadow-[5px_5px_10px_rgba(174,134,37)]"
                alt="#_"
              />{" "}
            </a>
           
          </div>
        </div>
      </section>

      {/* ENd of images */}

      <div className="lg:ml-[-30%] Cycle">
          <SpinningCircle />
        </div>
      <div className="p-10 relative ">
        <Clients />
      </div>
      <div className="p-10 ">
        <Testimonial />
      </div>
      <Footer />
    </>
  );
};

export default Home;
