import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 pt-16 pb-32 md:gap-28 lg:py-20 xl:flex-row' >
      <div className='hero-map' />

      {/* Left */}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image
          src="/camp.svg"
          alt="camp"
          height={50}
          width={50}
          className='absolute left-[-5px] top-[-50px] w-10 lg:w-[50px]'
        />
        <h1 className='bold-50 lg:bold-88'>Putuk Truno Camp Area</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod facilis molestiae perferendis adipisci optio ducimus culpa pariatur aliquid at! Unde quod atque, neque quidem libero aspernatur laborum dolorum labore!</p>

        <div className='my-11 flex flex-wrap gap-5'>
          <div className='flex items-center gap-2'>
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="./star.svg"
                key={index}
                width={24}
                height={24}
                alt="star"
              />
            ))}
          </div>
          <p>198k <span>Excellent Reviews</span> </p>
        </div>
        <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Button
            type="button"
            title="Download App"
            variant="btn_green" icon={''} />
          <Button
            type="button"
            title="How we work"
            icon="/play.svg"
            variant="btn_white_text"
          />

        </div>
      </div>


      <div className="relative flex flex-1 items-start ">
        <div className='relative  flex z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
          <div className='flex flex-col'>
            <div className='flexBetween'>
              
              
              <p className='regular-16 text-gray-20 '>location </p>
               <Image src="/close.svg" alt="Close" width={24} height={24} />
              </div>
              
              <p className="bold-20 text-white" >Aguas Calientes</p>
            </div>


            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20 text-white">173.28 mi</p>
              </div>
  

         <div className="flex flex-col">
          <p className="regular-16 block 
        text-gray-20">Elevation</p>
          <p className="bold-20 text-white">
        2.040 km</p>
        </div>


            </div>
          </div>
        </div>
      
    </section>
  )
}

export default Hero
