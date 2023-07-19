import React from 'react';
import award from "../../Assets/Photos/WhatsApp Image 2023-05-15 at 12.27.24 AM.jpeg";
const News = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className="text-4xl text-center font-bold py-4 mb-6">
                Our Achievements
            </h1>
            <article className="flex bg-white transition hover:shadow-xl">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time
                        datetime="2022-10-10"
                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                        <span>2022</span>
                        <span className="w-px flex-1 bg-gray-900/10"></span>
                        <span> December -10</span>
                    </time>
                </div>

                <div className="hidden sm:block sm:basis-56">
                    <img
                        alt="award"
                        src={award}
                        className="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <a href="#">
                            <h3 className="font-bold uppercase text-gray-900">
                                Bangladesh Financial tycons
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            we are proudly awarded as Selected as the highest VAT paying company in the financial year 2020-2021 in the manufacturing sector
                        </p>
                    </div>

                    <div className="sm:flex sm:items-end sm:justify-end">
                        <a
                            href="#"
                            className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                        >
                            See event details
                        </a>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default News;