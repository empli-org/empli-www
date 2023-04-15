// @ts-nocheck
/* eslint-disable prettier/prettier */
import { CardLarge } from '@/components/CardLarge/CardLarge'
import { Hero } from '@/components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import '../components/Navbar/Navbar.css'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className='relative'>
        <Hero />
        <CardLarge width="w-300" />
      </div>
    </>
  )
}
