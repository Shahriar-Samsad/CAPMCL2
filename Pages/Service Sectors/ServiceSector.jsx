import React from 'react';
import mango from "../../Assets/Photos/Chapai Agro Mango Pulp.png";
import fish from "../../Assets/Photos/Chapai Fisheries.jpg";
import coldStore from "../../Assets/Photos/Fresh & green cold store.jpg";
import rice from "../../Assets/Photos/Puffed rice.jpg";
import agro from "../../Assets/Photos/SK agro farm.jpg";
import block from "../../Assets/Photos/SS Concrete Block.jpg";
export const ServiceSector = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            <h2 className="text-4xl font-bold text-center mb-10">Our service sectors</h2>

            <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-8 border-b sm:border-r">
                    <div className="max-w-md text-center">
                        <div>
                            <img
                                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                                src={mango}
                                alt=""
                            />
                            <div className="flex justify-between p-3 items-center">
                                <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                    Mango pulp
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="p-8 border-b lg:border-r">
                    <div className="max-w-md text-center">
                        <div>
                            <img
                                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                                src={fish}
                                alt=""
                            />
                            <div className="flex justify-between p-3 items-center">
                                <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                    Fish
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="p-8 border-b sm:border-r lg:border-r-0">
                    <div className="max-w-md text-center">
                        <div>
                            <img
                                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                                src={rice}
                                alt=""
                            />
                            <div className="flex justify-between p-3 items-center">
                                <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                    Puffed rice
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="p-8 border-b lg:border-b-0 lg:border-r">
                    <div className="max-w-md text-center">
                        <div>
                            <img
                                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                                src={agro}
                                alt=""
                            />
                            <div className="flex justify-between p-3 items-center">
                                <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                    Sk agro firm
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="p-8 border-b sm:border-b-0 sm:border-r">
                    <div className="max-w-md text-center">
                        <div>
                            <img
                                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                                src={block}
                                alt=""
                            />
                            <div className="flex justify-between p-3 items-center">
                                <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                    Concrete Block
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="p-8">
                    <div className="max-w-md text-center">
                        <div>
                            <img
                                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                                src={coldStore}
                                alt=""
                            />
                            <div className="flex justify-between p-3 items-center">
                                <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                    Cold storage
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
