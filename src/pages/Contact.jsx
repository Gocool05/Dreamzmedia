import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Contact = () => {
  return (
    <>
      <Nav />
      <section class="Bg2 " id="contact">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h1 class="text-base font-semibold uppercase tracking-wide text-gray-lite ">
                Contact
              </h1>
              <h2 class="font-heading mb-4 font-bold tracking-tight text-gold  text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-lite  dark:text-slate-400">
                Get in touch with us to start planning your unforgettable event
                today
              </p>
            </div>
          </div>
          <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
              <div class="h-full pr-6">
                <p class="mt-3 mb-12 text-lg text-gray-lite opacity-70 ">
                  At DreamzMedia, our contact support team is here to assist you
                  with any questions or planning needs. Reach out to us for
                  prompt and personalized service to ensure your event's
                  success.
                </p>
                <ul class="mb-6 md:mb-0">
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-gold text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gold">
                        Our Address
                      </h3>
                      <p class="text-gray-lite opacity-70 dark:text-slate-400">
                        332, Arcot Rd, Vadapalani,
                      </p>
                      <p class="text-gray-lite opacity-70 dark:text-slate-400">
                        Chennai, Tamil Nadu 600026.
                      </p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-gold text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gold">
                        Contact
                      </h3>
                      <p class="text-gray-lite opacity-70 dark:text-slate-400">
                        Mobile:(+91) 8807650033
                      </p>
                      <p class="text-gray-lite opacity-70 dark:text-slate-400">
                        Mail: Info@dreamzmedia.in
                      </p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-gold text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gold">
                        Working hours
                      </h3>
                      <p class="text-gray-lite opacity-70 dark:text-slate-400">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p class="text-gray-lite opacity-70 dark:text-slate-400">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class=" h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 class="mb-4 text-2xl font-bold text-gold">
                  Ready to Get Started?
                </h2>
                <form id="contactForm">
                  <div class="mb-6">
                    <div class="mx-0 mb-1 sm:mb-4">
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          class="pb-1 text-xs uppercase tracking-wider bg-gray-mid"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          class="mb-2 w-full bg-gray-dark rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          class="mb-2 w-full rounded-md border bg-gray-dark border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="email"
                        />
                      </div>
                    </div>
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        class="mb-2 w-full rounded-md border active:border-gold bg-gray-dark border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div class="text-center">
                    <button class="SliderButton w-full cursor-pointer uppercase bg-gray-lite px-4 py-1 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#AE8625,-0.5rem_-0.5rem_#AE8625] hover:bg-gray-normal hover:text-gray-lite transition">
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.763101173865!2d80.2120652750778!3d13.050745687271942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e94571bb8b%3A0x5e4eab3021eae855!2sdreamzmedia!5e0!3m2!1sen!2sin!4v1716900528064!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ padding: "0px 40px 60px 40px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </>
  );
};

export default Contact;
