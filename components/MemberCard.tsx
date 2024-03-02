import React from 'react'
import Image from 'next/image';

type MembershipProps = {
    icon: string;
    title: string;
    subTitle: string;
    price: string;
    duration: string;
    tick: string;
    points: string[];
}


const MemberCard = ({ icon, title, subTitle, price, duration, tick, points }: MembershipProps) => {
    return (
        <div className='border bg-white shadow-sm max-w-[350px] max-h-[800px] border-none rounded-2xl'>
            <div className='space-y-1.5 p-6 flex text-black flex-row justify-between'>
                <div className='text-2xl font-semibold leading-none tracking-tight'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <h1 className='text-xl font-normal'>{subTitle}</h1>
                </div>
                <div>
                    <Image src={icon} alt='icon' width={24} height={33} />
                </div>
            </div>
            <div className='p-6 pt-0'>
                <div className='flex items-end gap-x-2 p-0'>
                    <h1 className={`text-[32px] p-0 leading-none font-bold ${title === 'Two Week Basic' ? 'text-primary-50' :
                        title === 'Pro' ? 'text-teal-500' :
                            title === 'Premium' ? 'text-purple-500' :
                                'text-primary-50'
                        }`}>
                        {price}
                    </h1>
                    <h1 className='text-base p-0 text-black'>
                        {duration}
                    </h1>
                </div>
                <ul className={`p-4 rounded-2xl mt-4 space-y-4 ${title === 'Two Week Basic' ? 'bg-primary-70' :
                        title === 'Pro' ? 'bg-teal-100' :
                            title === 'Premium' ? 'bg-purple-100' :
                                'text-primary-50'
                        }`}>
                    {points.map((point, pointIndex) => (
                        <li className='flex items-start gap-x-4 w-full' key={pointIndex}>
                            <Image src={tick} alt='icon' width={20} height={21} />
                            <p className='text-sm font-normal p-0'>
                            {point}
                            {title === 'Two Week Basic' && <span className='text-primary-50 font-bold'> 2 weeks</span>}
                            </p>
                            </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MemberCard
