import React from "react";

const Grids = () => {
  return (
    <section class=" py-12 bg-gray-normal text-gray-100 sm:py-12 lg:py-16">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 z-10">
        <div class="max-w-xl mx-auto text-center xl:max-w-2xl z-10">
          <h2 class="text-3xl font-bold leading-tight text-gold sm:text-4xl xl:text-5xl mb-6 relative ">
            We Create Memorable Events!
          </h2>
          <p class="mb-4 relative">
            At Dreamzmedia, we ensure your events are spectacular and
            unforgettable, whether it's a grand wedding, corporate function, or
            creative TV commercial.
          </p>
        </div>
        <div class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8  gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          <div class="relative">
            <div class="relative card overflow-hidden bg-gray-dark shadow-md rounded-xl h-full">
              <div class="p-9">
                <svg
                  class="w-12 h-12 text-gray-lite  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"
                  />
                </svg>

                <h3 class="mt-6 text-2xl font-bold text-gold sm:mt-10">
                  School Events
                </h3>
                <p class="mt-6 text-base text-gray-lite opacity-80">
                  Organize and manage school events such as annual days, sports
                  meets, and cultural festivals with comprehensive planning and
                  execution services tailored to educational institutions.
                </p>
              </div>
              <a href="/school-events">
                <span className="cursor-pointer">View More</span>
              </a>
            </div>
          </div>
          <div class="overflow-hidden card relative bg-gray-dark shadow-md rounded-xl">
            <div class="p-9">
              <svg
                class="w-12 h-12 text-gray-lite"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
                />
              </svg>

              <h3 class="mt-6 text-2xl font-bold text-gold sm:mt-10">
                Corporate Events
              </h3>
              <p class="mt-6 text-base text-gray-lite opacity-80">
                We excel in organizing corporate events, ensuring every detail
                is perfect, from conferences to product launches.
              </p>
            </div>
            <a href="/corporate-events">
              <span className="cursor-pointer">View More</span>
            </a>
          </div>
          <div class="relative">
            <div class="relative overflow-hidden card bg-gray-dark shadow-md rounded-xl h-full">
              <div class="p-9">
                <svg
                  class="w-12 h-12 text-gray-lite"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
                  />
                </svg>

                <h3 class="mt-6 text-2xl font-bold text-gold sm:mt-10">
                  TV Commercials
                </h3>
                <p class="mt-6 text-base text-gray-lite opacity-80">
                  Create impactful TV commercials that capture attention and
                  convey your brand message effectively.
                </p>
              </div>
              <a href="/corporate-events">
                <span className="cursor-pointer">View More</span>
              </a>
            </div>
          </div>
          <div class="overflow-hidden relative card bg-gray-dark shadow-md rounded-xl">
            <div class="p-9">
              <svg
                class="w-12 h-12 text-gray-lite"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
                />
              </svg>

              <h3 class="mt-6 text-2xl font-bold text-gold sm:mt-10">
                Birthday Events
              </h3>
              <p class="mt-6 text-base text-gray-lite opacity-80">
                Plan and execute personalized birthday parties with unique
                themes, decorations, and activities to create unforgettable
                experiences.
              </p>
            </div>
            <a href="/birthday-events">
              <span className="cursor-pointer">View More</span>
            </a>
          </div>

          <div class="relative">
            <div class="relative overflow-hidden card bg-gray-dark shadow-md rounded-xl h-full">
              <div class="p-9">
                <svg
                  class="w-12 h-12 text-gray-lite"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                </svg>

                <h3 class="mt-6 text-2xl font-bold text-gold sm:mt-10">
                  Wedding Events
                </h3>
                <p class="mt-6 text-base text-gray-lite opacity-80">
                  Experience personalized wedding planning services that bring
                  your dream wedding to life, from royal to beach themes.
                </p>
              </div>
              <a href="/wedding-events">
                <span className="cursor-pointer">View More</span>
              </a>
            </div>
          </div>
          <div class="overflow-hidden card relative bg-gray-dark shadow-md rounded-xl">
            <div class="p-9">
              <svg
                class="w-12 h-12 text-gray-lite"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
                />
              </svg>

              <h3 class="mt-6 text-2xl font-bold text-gold sm:mt-10">
                Grand Opening Events
              </h3>
              <p class="mt-6 text-base  text-gray-lite opacity-80">
                Coordinate grand opening events for shops with eye-catching
                themes, engaging activities, and effective promotional
                strategies to attract customers and create a memorable launch.
              </p>
            </div>
            <a href="/school-events">
              <span className="cursor-pointer">View More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grids;
