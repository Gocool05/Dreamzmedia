import React from 'react'

const Footer = () => {
  return (
   

<footer class="Bg1 shadow dark:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="../../Images/dreamz-logo-png.png" class="h-20" alt="Dreamzmedia Logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-lg font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/about" class=" Link2 underline-offset-4 me-4 md:me-6 text-gray-dark font-bold">About</a>
                </li>
                <li>
                    <a href="https://www.moviemads.com/" target={'_blank'} class="Link2 underline-offset-4 me-4 md:me-6 text-gray-dark font-bold">Moviemads</a>
                </li>
                <li>
                    <a href="/gallery" class="Link2 underline-offset-4 me-4 md:me-6 text-gray-dark font-bold">Gallery</a>
                </li>
                <li>
                    <a href="/contact" class="Link2 underline-offset-4 text-gray-dark font-bold">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-mid sm:mx-auto  lg:my-8" />
        <span class="block text-lg text-gray-dark sm:text-center ">© 2010 <a href="/" class="Link2 font-bold">Dreamzmedia</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer