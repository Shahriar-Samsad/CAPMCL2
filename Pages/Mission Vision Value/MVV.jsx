import React from 'react'

export const MVV = () => {
    return (
        <>
            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/7666429/pexels-photo-7666429.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div class="absolute bg-black opacity-30 inset-0 z-0"></div>
                <div className="z-10 relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 min-h-[120px]">
                    <h1 className='text-3xl font-bold text-center text-white'>Mission- Vission</h1>
                    <div className='h-[4px] max-w-[100px] mx-auto bg-slate-50 mt-3.5 mb-8 ' ></div>
                </div>

            </div>
            <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <p className='text-base p-4'>
                    <span className='font-bold text-lg italic block'>MISSION </span>
                    hapai Agro. believes in serving the people and the country; not only in doing business and making profit.
                    Chapai Agro believes that no organization can grow without an able and dedicated workforce behind it. It values and nurtures its officials, employees and other members of the staff accordingly. Through various acts and measures, the group tries to create a sense of belonging among the workforce so that they explore their full potential and give full dedication to the organization and get evaluated accordingly.
                    As a business conglomerate, Chapai Agro does not want to grow alone; it wishes to grow together with its partners, patrons, customers, employees and other stakeholders.

                </p>
                <p className='text-base p-4'>
                    <span className='font-bold text-lg italic block'>VISION </span>
                    It wishes to go far ahead from where it is now. The group wants to be a trustworthy business house of the country and contributor, from the private sector, to economic and social development. It also wishes to bring more and more people under job and thus become the largest employer in the private sector.

                </p>
            </div>

        </>
    )
}
