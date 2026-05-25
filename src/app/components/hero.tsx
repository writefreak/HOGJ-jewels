import React from 'react'
import { Wrapper } from './ui/wrapper'

const Hero = () => {
  return (
    <div className="relative">
      <img src="/flourish.png" className="w-full h-screen object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Wrapper className='flex justify-center'>
                  

 <div className="flex flex-col gap-7 pt-5 md:pt-9">       <h1 className="text-white font-playfair md:text-8xl">Luxury You Can
                      <br /> Treasure Forever</h1>
                      <p>Every ordered piece is curated and delivered with precision <br /> and passion that reflects its lasting beauty.</p>

                  <div className="flex gap-3 pt-4">
                      <button  className="hover:scale-105 hover:bg-[#9E8B7B] active:scale-95 transition-all duration-150 text-[15px] md:px-6 md:py-3 px-3 py-2 rounded-3xl bg-[#9E8B7B] text-white font-medium">
              Place an Order
                      </button>
                      <button  className="hover:scale-105 hover:bg-[#9E8B7B] active:scale-95 transition-all duration-150 text-[15px] md:px-6 md:py-3 px-3 py-2 rounded-3xl bg-transparent border-2 border-[#9E8B7B] text-white font-medium">
             Our Brand Story
                      </button>
                  </div></div>
              </Wrapper>
      </div>
    </div>
  )
}

export default Hero