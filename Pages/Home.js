import React from 'react'
import { About } from '../components/Home section components/About'
import { Banner } from '../components/Home section components/Banner'
import News from '../components/Home section components/News'
import Speciality from '../components/Home section components/Speciality'
import { States } from '../components/Home section components/States'
import Testimonials from '../components/Home section components/Testimonials'
import { Brands } from '../components/Home section components/partners'
import { Products } from '../components/Products/Products'

export const Home = () => {
    return (
        <div className="min-h-screen max-w-screen-2xl mx-auto overflow-x-hidden">
            {/* <XBanner />
            <Pricing /> */}

            {/* <CarouselHome /> */}
            <Banner />
            <About />
            <Brands />
            <Speciality />
            <Products />
            <States />
            <News />
            {/* <Testimonials /> */}
        </div>
    )
}
