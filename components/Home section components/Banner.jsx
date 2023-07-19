import homepic from "../../Assets/Photos/Homepage background img.png";

export const Banner = () => {
    return (
        <div className="relative">
            <img
                src={homepic}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div class="absolute bg-black opacity-30 inset-0 z-0"></div>
            <div className="z-10 relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 min-h-[420px]">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                    <div className="w-full max-w-xl mb-12 xl:mb-0  xl:w-7/12 mx-auto text-center">
                        <h2 className="text-center tracking-normal text-white leading-relaxed text-2xl font-semibold md:text-4xl ">
                            Most Pure & qualityful mango pulp you have tested ever😋
                        </h2>
                        <button className=" bg-gradient-to-tr from-orange-500 via-lime-200 to-rose-400 px-8 py-3.5 my-4 rounded-md">See products</button>
                    </div>

                </div>
            </div>

        </div>
    );
};