import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[100vh] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 space-y-4">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
        <div className="p-4 relative  w-full text-center flex  gap-3 flex-col items-center justify-between">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Efficient Restaurant Management, Simplified.</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-[50rem] mx-auto">Welcome to Dinecraft's POS and Management System. Streamline your operations, manage orders seamlessly, keep track of inventory, and enhance customer experience with our powerful and intuitive platform. Focus on what you do best – serving great food – while we take care of the rest.</p>
            <div className='mt-4'>
                <Link href={'/courses'}>
                  <Button borderRadius='1.75rem' className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">Explore Services</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
