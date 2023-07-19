import React from 'react';

const Testimonials = () => {
    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid items-center gap-4 xl:grid-cols-5">
                <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                    <h2 className="text-4xl font-bold">See our customers reviews</h2>
                    <p className="text-gray-400">Based on these pleasing comments we can say that we are the best❤</p>
                </div>
                <div className="p-6 xl:col-span-3">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid content-center gap-4 ">
                            <div className="p-6 rounded shadow-md bg-slate-100">
                                <p>I absolutely love this mango pulp! It's so rich and flavorful, and makes the perfect base for my smoothies.</p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                                    <div>
                                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                                        <p className="text-sm text-gray-400">CTO of Company Co.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 rounded shadow-md bg-gray-900">
                                <p>This mango pulp is the real deal! It's so sweet and fresh, it tastes like I'm biting into a ripe mango straight from the tree.</p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                                    <div>
                                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                                        <p className="text-sm text-gray-400">CTO of Company Co.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid content-center gap-4 ">
                            <div className="p-6 rounded shadow-md bg-slate-100">
                                <p>I've been using this mango pulp in all of my baking lately, and it adds such a delicious tropical twist to everything I make. Highly recommend!</p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                                    <div>
                                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                                        <p className="text-sm text-gray-400">CTO of Company Co.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 rounded shadow-md bg-slate-100">
                                <p>If you're a fan of authentic Indian mango lassis, then you need to try this mango pulp. Just mix with yogurt and sugar, and you'll have the most amazing drink ever</p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                                    <div>
                                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                                        <p className="text-sm text-gray-400">CTO of Company Co.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonials;