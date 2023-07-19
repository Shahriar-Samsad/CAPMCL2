export const About = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-teal-900 uppercase ">
                                From 100 to 5000 Tons -
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-normal leading-relaxed text-gray-900 sm:text-4xl sm:leading-none">
                            Chapai Agro:<br /> The Leading Provider of Premium Mango Pulp for the Beverage Industry in Bangladesh!
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Chapai Agro Product Marketing Company Ltd. is a reputed mango pulp producing company in Bangladesh, which started its journey in 2003 with the capacity of 100 tons of pulp. After 20 years the company has become the first choice of mango drink producers with the capacity of 5000 tons in one season.
                        </p>
                    </div>

                </div>
                <div className="relative lg:w-1/2">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="https://images.pexels.com/photos/16724965/pexels-photo-16724965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-slate-800 opacity-30"></div>
                    <a
                        href="https://drive.google.com/file/d/1_ldrJKS-BtuQonHvvKfpotdHd-f_npeH/view?usp=sharing"
                        aria-label="Play Video"
                        className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                    >
                        <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-26 h-26 text-slate-200">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg>

                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};