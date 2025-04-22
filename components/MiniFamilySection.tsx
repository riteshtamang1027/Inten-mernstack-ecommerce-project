import Image from 'next/image'
import React from 'react'

export default function MiniFamilySection() {
  return (
    <div className='px-4 w-full sm:px-8 md:px-16 lg:px-20 xl:px-24 py-12 space-y-12 '>

           {/* header section */}
      <div className="text-center space-y-3 xl:px-64 lg:px-48 md:px-28 sm:px-18 ">
        <p className="md:text-4xl font-semibold text-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text leading-12">
        Introducing our latest addition to the Minime family - the Minime 360!
        </p>
        <p className="md:text-lg opacity-60 ">
        Introducing our latest addition to the Minime family - the Minime 360!
        </p>
      </div>

      <div className='grid lg:grid-cols-3 grid-cols-2 gap-8'>
        <Image className='rounded-2xl xl:w-100 xl:h-100  object-cover' src={"/heroImage/img7.png"} alt='' width={1000} height={1000}/>
        <Image className='rounded-2xl xl:w-100 xl:h-100 object-cover' src={"/heroImage/img8.jpg"} alt='' width={1000} height={1000}/>
        <Image className='rounded-2xl xl:w-100 xl:h-100 object-cover' src={"/heroImage/img9.jpg"} alt='' width={1000} height={1000}/>
        <Image className='rounded-2xl xl:w-100 xl:h-100 object-cover flex lg:hidden' src={"/heroImage/img10.jpg"} alt='' width={1000} height={1000}/>
      </div>
      
    </div>
  )
}
