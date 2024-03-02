import Image from 'next/image';
import React from 'react'

type HowItWorksProps = {
    icon: string;
    title: string;
    description: string;
  };


const HowItWorksCard = ({ icon, title, description }: HowItWorksProps) => {
  return (
    <div role='group' 
    className='min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3 flex justify-center'>
      <div className='rounded-lg border shadow-sm bg-primary-70 hover:bg-white border-none w-[300px] max-w-[370px] h-[310px] max-h-[330px] md:w-[330px] lg:w-[330px] xl:w-[370px]'>
        <div className='flex flex-col space-y-1.5 p-6'>
            <Image src={icon} alt='icon' width={78} height={78}/>
        </div>
        <div className='space-y-4 aspect-square p-6'>
            <h2 className='text-2xl font-medium'>{title}</h2>
            <p className='text-base text-gray-50'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksCard
