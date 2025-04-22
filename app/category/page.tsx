import SingleCategoryCard from '@/components/SingleCategoryCard'
import React from 'react'

export default function page() {
  return (
    
      

<div className="px-4 w-full sm:px-8 md:px-16 lg:px-20 xl:px-24 py-12 space-y-8">

{/* Header section */}
<div className="text-center space-y-1 xl:px-74 lg:px-52 md:px-32 sm:px-22 ">
<p className="md:text-4xl font-semibold text-2xl bg-gradient-to-r md:h-12 from-purple-600 to-pink-500 text-transparent bg-clip-text">
  Explore  Categories
</p>
<p className="md:text-lg opacity-70 ">
Explore our wide range of categories and find the perfect one for your needs
</p>
</div>
<SingleCategoryCard/>
</div>
    
  )
}
