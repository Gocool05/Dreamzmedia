import React, { useState } from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const SchoolEvents = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  const openModal = (src) => {
    setModalOpen(true);
    setModalSrc(src);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSrc("");
  };

  const images = [
    {
      src: "../../Images/FB_IMG_1474178603458.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/FB_IMG_1475170958394.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20190716-WA0034.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20190806-WA0010.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20190719-WA0047.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20190716-WA0027.jpg",
      alt: "Dreamzmedia gallery images",
    },

    {
      src: "../../Images/FB_IMG_1477915939947 - Copy.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/FB_IMG_1476119279104 - Copy.jpg",
      alt: "Dreamzmedia gallery images",
    },

    {
      src: "../../Images/IMG-20190126-WA0045 - Copy.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20190126-WA0037 - Copy.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20190126-WA0033 - Copy.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20190111-WA0005 - Copy.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20181023-WA0017 - Copy.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20181023-WA0010 - Copy.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20181023-WA0005 - Copy.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20180816-WA0011 - Copy.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20180814-WA0022 - Copy.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20180814-WA0016 - Copy.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20180427-WA0014 - Copy.jpg",
      alt: "Dreamzmedia gallery images",
    },
    {
      src: "../../Images/IMG-20180328-WA0015.jpg",
      alt: "Dreamzmedia gallery images",
    },
  ];

  return (
    <>
      <Nav />
      <div class="BgContainer py-20">
        <div class="container mx-auto">
          <div class="flex items-center justify-center">
            <div class="text-center text-gold">
              <h1 class="mb-2 font-serif text-3xl lg:text-7xl  font-bold">
                School <br class="md:hidden" />
                Events
              </h1>
              <p class="  lg:text-2xl text-gray-lite tracking-wide">
                Capturing the essence of every event <br class="sm:hidden" />
                through stunning visuals
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Bg2">
        <div>
          <h1 className="mt-10 mb-5 text-center text-5xl text-gold">
            Overview of our works through Visuals
          </h1>
          {/* Image grid */}

          <div className="lg:p-10 px-10 py-20 relative lg:px-[110px] grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-5">
            {images.map((image, index) => (
              <div class="bg-gold rounded-2xl shadow-sm shadow-gray-dark outline outline-gray-dark -outline-offset-8">
                <div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24  after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20  before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center lg:h-56 lg:w-80  bg-neutral-900 rounded-2xl outline outline-gold -outline-offset-8">
                  <img
                    key={index}
                    className="w-full h-full object-fit cursor-pointer"
                    src={image.src}
                    alt={image.alt}
                    onClick={() => openModal(image.src)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* The Modal */}
          {modalOpen && (
            <div
              id="modal"
              className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center"
            >
              {/* The close button */}
              <a
                className="fixed z-90 top-20 right-8 cursor-pointer text-white text-5xl font-bold"
                onClick={closeModal}
              >
                ×
              </a>
              {/* A big image will be displayed here */}
              <img
                id="modal-img"
                className="lg:max-w-[800px] px-5 lg:max-h-[600px] object-cover"
                src={modalSrc}
                alt="Modal"
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SchoolEvents;
