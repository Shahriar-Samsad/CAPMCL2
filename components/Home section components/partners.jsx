import React from 'react'
import p2 from "../../Assets/Icons/g-logo.png"
import p1 from "../../Assets/Photos/starship.jpeg"
export const Brands = () => {
    const imgs = [
        { src: p1, name: 'Starship' },
        { src: p2, name: 'Globe' },




    ]
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    }
    return (

        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-8">
            <div className="container relative z-[1] m-auto px-6 md:px-12">
                <h2 className="text-4xl font-bold text-center mb-10">Brands who keep trust with us </h2>


                <div className='flex justify-center flex-wrap mx-auto
                '>

                    <div
                        className="max-w-[350px] group rounded-xl  bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                    >
                        <img
                            src={p1}
                            className="contrast-100 scale-95  w-[200px] transition group-hover:contrast-75  group-hover:scale-105"

                            alt="{globe}"
                        />
                    </div>
                    <div
                        className="max-w-[350px] group rounded-xl  bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                    >
                        <img
                            src={p2}
                            className="contrast-100 scale-95  w-[250px] transition group-hover:contrast-75  group-hover:scale-105"

                            alt="starship"
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

/*
 initial={{ y: 60, opacity: 0, }}
                        whileInView={{ y: 0, opacity: 100 }}
                        transition={{
                            delay: 0.2,
                            x: { type: 'spring', stiffness: 60, },
                            opacity: { duration: 1.6 },
                            ease: 'easeIn',
                            duration: 1
                        }}


*/