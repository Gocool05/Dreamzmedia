import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

const BirthdayEvents = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState('');
    const [currentCategory, setCurrentCategory] = useState('Anchor');

    const openModal = (src) => {
        setModalOpen(true);
        setModalSrc(src);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalSrc('');
    };

    const images = {
        Anchor: [
            { src: "../../Images/FB_IMG_1474178603458.jpg", alt: "Dreamzmedia gallery images" },
            { src: "../../Images/FB_IMG_1475170958394.jpg", alt: "Dreamzmedia gallery images" },
            { src: "../../Images/IMG-20190716-WA0034.jpg", alt: "Dreamzmedia gallery images" },
            { src: "../../Images/IMG-20190806-WA0010.jpg", alt: "Dreamzmedia gallery images" },
            { src: "../../Images/IMG-20190719-WA0047.jpg", alt: "Dreamzmedia gallery images" },
        ],
        'Balloon decoration': [
            { src: "../../Images/FB_IMG_1474178603458.jpg", alt: "Dreamzmedia gallery images" },
            { src: "../../Images/FB_IMG_1475170958394.jpg", alt: "Dreamzmedia gallery images" },
            { src: "../../Images/IMG-20190716-WA0034.jpg", alt: "Dreamzmedia gallery images" },
            { src: "../../Images/IMG-20190806-WA0010.jpg", alt: "Dreamzmedia gallery images" },
            { src: "../../Images/IMG-20190719-WA0047.jpg", alt: "Dreamzmedia gallery images" },
        ],
        'Stage decoration': [
            { src: "../../Images/FB_IMG_1474178603458.jpg", alt: "Dreamzmedia gallery images" },
            { src: "../../Images/FB_IMG_1475170958394.jpg", alt: "Dreamzmedia gallery images" },
            { src: "../../Images/IMG-20190716-WA0034.jpg", alt: "Dreamzmedia gallery images" },
            { src: "../../Images/IMG-20190806-WA0010.jpg", alt: "Dreamzmedia gallery images" },
            { src: "../../Images/IMG-20190719-WA0047.jpg", alt: "Dreamzmedia gallery images" },
        ]
    };

    const renderImages = () => {
        return images[currentCategory].map((image, index) => (
            <div key={index} className="bg-gold rounded-2xl shadow-sm shadow-gray-dark outline outline-gray-dark -outline-offset-8">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center lg:h-56 lg:w-80 bg-neutral-900 rounded-2xl outline outline-gold -outline-offset-8">
                    <img className="w-full h-full object-fit cursor-pointer" src={image.src} alt={image.alt} onClick={() => openModal(image.src)} />
                </div>
            </div>
        ));
    };

    return (
        <>
            <Nav />
            <div className="BgContainer py-20">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center">
                        <div className="text-center text-gold">
                            <h1 className="mb-2 font-serif text-3xl lg:text-7xl font-bold">
                                Birthday <br className="md:hidden" />
                                Events
                            </h1>
                            <p className="lg:text-2xl text-gray-lite tracking-wide">
                            CRAFTING UNFORGETTABLE BIRTHDAY CELEBRATIONS <br className="sm:hidden" />
                            WITH A PERSONAL TOUCH 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Bg2'>
                <div className="rounded-md mt-10 mx-5 grid lg:grid-flow-col lg:grid-cols-none grid-cols-2 grid-flow-row gap-2 justify-center items-center shadow-sm" role="group">
                    <button
                        type="button"
                        className={`px-4 py-2 text-sm font-medium text-gray-lite bg-transparent border border-gray-lite rounded-lg hover:bg-gray-lite hover:text-gray-normal focus:z-10 focus:ring-2 focus:ring-gray-mid focus:bg-gold focus:text-gray-dark ${currentCategory === 'Anchor' ? 'bg-gold text-gray-dark' : ''}`}
                        onClick={() => setCurrentCategory('Anchor')}
                    >
                        Anchor
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 text-sm font-medium text-gray-lite bg-transparent border border-gray-lite rounded-lg hover:bg-gray-lite hover:text-gray-normal focus:z-10 focus:ring-2 focus:ring-gray-mid focus:bg-gold focus:text-gray-dark${currentCategory === 'Balloon decoration' ? 'bg-gold text-gray-dark' : ''}`}
                        onClick={() => setCurrentCategory('Balloon decoration')}
                    >
                        Balloon decoration
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 text-sm font-medium text-gray-lite bg-transparent border border-gray-lite rounded-lg hover:bg-gray-lite hover:text-gray-normal focus:z-10 focus:ring-2 focus:ring-gray-mid focus:bg-gold focus:text-gray-dark${currentCategory === 'Balloon decoration' ? 'bg-gold text-gray-dark' : ''}`}
                        onClick={() => setCurrentCategory('Balloon decoration')}
                    >
                        Balloon decoration
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 text-sm font-medium text-gray-lite bg-transparent border border-gray-lite rounded-lg hover:bg-gray-lite hover:text-gray-normal focus:z-10 focus:ring-2 focus:ring-gray-mid focus:bg-gold focus:text-gray-dark${currentCategory === 'Stage decoration' ? 'bg-gold text-gray-dark' : ''}`}
                        onClick={() => setCurrentCategory('Stage decoration')}
                    >
                        Stage decoration
                    </button>
                </div>

                <div className="lg:p-10 px-10 py-20 relative lg:px-[110px] grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-5">
                    {renderImages()}
                </div>

                {/* The Modal */}
                {modalOpen && (
                    <div id="modal" className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center">
                        {/* The close button */}
                        <a className="fixed z-90 top-20 right-8 cursor-pointer text-white text-5xl font-bold" onClick={closeModal}>
                            ×
                        </a>
                        {/* A big image will be displayed here */}
                        <img id="modal-img" className="lg:max-w-[800px] px-5 lg:max-h-[600px] object-cover" src={modalSrc} alt="Modal" />
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default BirthdayEvents;
