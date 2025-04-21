import Category from '@/components/Category'
import DiscoverSection from '@/components/DiscoverSection'
import { HeroSection } from '@/components/HeroSection'
import HygieneSection1 from '@/components/HygieneSection1'
import HygieneSection2 from '@/components/HygieneSection2'
import MiniFamilySection from '@/components/MiniFamilySection'
import React from 'react'

export default function HomePage() {
  return (
  
  <div>
    <HeroSection/>
    <Category/>
    <DiscoverSection/>
    <HygieneSection1/>
    <HygieneSection2/>
    <MiniFamilySection/>

  </div>
   
  )
}
