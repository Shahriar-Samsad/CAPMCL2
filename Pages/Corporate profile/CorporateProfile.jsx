import React from 'react'

export const CorporateProfile = () => {
    return (
        <>
            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/13940499/pexels-photo-13940499.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div class="absolute bg-black opacity-30 inset-0 z-0"></div>
                <div className="z-10 relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 min-h-[120px]">
                    <h1 className='text-3xl font-bold text-center text-white'>Corporate Profile</h1>
                    <div className='h-[4px] max-w-[100px] mx-auto bg-slate-50 mt-3.5 mb-8 ' ></div>

                </div>

            </div>
            <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <p className='text-base p-4'>
                    Chapai Agro Product Marketing Company has started operation as a mango supplier of the reputed industry Pran-RFl group, under the aegis of the companies first concern - the Feed-Up Agro in 1995. This project turned out to be a very successful one and had helped faster the growth of trust and confidence to start producing mango pulp in 2003 with 100 tons of capacity. After 20 years of struggle the company has become the trusted pulp producer in Bangladesh with the capacity of 5000 tons in one season.
                </p>
                <p className='text-base px-4'>Besides,</p>
                <ul className='text-base p-4 list-disc'>
                    <li>2Chapai Testy Puffed Rice & Chira</li>
                    <li>SS Concrete Bricks</li>
                    <li>Fresh & Green Cold Storages</li>
                    <li>SK Dairy</li>
                    <li>Chapai Fisheries</li>
                    <li>CA Trucks</li>

                </ul>

            </div>

        </>
    )
}
