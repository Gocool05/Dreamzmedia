import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container lg:px-5 lg:py-24 mx-auto">
        <h2 className="lg:text-5xl text-4xl font-medium title-font text-gold uppercase mb-12 text-center">
          Testimonials
        </h2>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="Test"
        >
          <SwiperSlide className="Test-Slider  border-dashed border-8 border-gray-mid rounded-xl">
            <div className="p-2 w-full bg-gray-normal bg-opacity-80  rounded-xl ">
              <div className="h-full lg:p-8 rounded ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="lg:leading-relaxed  mb-6 text-gray-lite">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  {/* <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-6 h- rounded-full flex-shrink-0 object-cover object-center" /> */}
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-mid">
                      Holden Caulfield
                    </span>
                    <span className="text-gold text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="Test-Slider  border-dashed border-8 border-gray-mid rounded-xl">
            <div className="p-2 w-full bg-gray-normal bg-opacity-80  rounded-xl ">
              <div className="h-full lg:p-8 rounded ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="lg:leading-relaxed  mb-6 text-gray-lite">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  {/* <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-6 h- rounded-full flex-shrink-0 object-cover object-center" /> */}
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-mid">
                      Holden Caulfield
                    </span>
                    <span className="text-gold text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="Test-Slider  border-dashed border-8 border-gray-mid rounded-xl">
            <div className="p-2 w-full bg-gray-normal bg-opacity-80  rounded-xl ">
              <div className="h-full lg:p-8 rounded ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="lg:leading-relaxed  mb-6 text-gray-lite">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  {/* <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-6 h- rounded-full flex-shrink-0 object-cover object-center" /> */}
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-mid">
                      Holden Caulfield
                    </span>
                    <span className="text-gold text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
