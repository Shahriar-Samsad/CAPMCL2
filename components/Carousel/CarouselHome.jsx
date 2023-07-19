import React from 'react';
import Slider from 'react-slick';

const CarouselHome = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        swipeToSlide: true,
        slidesToScroll: 1,

    };
    return (
        <>
            <Slider {...settings}>
                <div >
                    <img className='mx-auto' src="https://images.unsplash.com/photo-1682687220499-d9c06b872eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" srcset="" />
                </div>
                <div >
                    <img className='mx-auto' src="https://images.unsplash.com/photo-1682686580452-37f1892ee5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80" alt="" srcset="" />
                </div>
                <div >
                    <img className='mx-auto' src="https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" srcset="" />
                </div>

            </Slider>
        </>
    );
};

export default CarouselHome;