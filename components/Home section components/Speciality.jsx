import React from 'react';
import sp2 from "../../Assets/Icons/low-speed.png";
import sp1 from "../../Assets/Icons/vegan.png";
import sp3 from "../../Assets/Icons/vitamin-c.png";
const Speciality = () => {

    const data = [
        { img: sp1, title: "100% natural and organic", desc: "Our mango pulp is made with the finest ingredients, including ripe, juicy mangoes that are hand-picked at the peak of ripeness.Our mango pulp is gluten-free and vegan" },
        { img: sp2, title: " Low in calories and fat", desc: "We use a cold-pressing process to preserve the natural flavor and nutrients of the mangoes, and we never add any artificial flavors, colors, or preservatives." },
        { img: sp3, title: "Good vitamins Source", desc: "Our mango pulp is a healthy snack option that won't derail your diet also pulp is a delicious and nutritious way to fuel your day.It  is the perfect snack for people who are watching their calories or fat intake." },
    ]
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="grid row-gap-8 grid-cols-1 lg:grid-cols-3 ">

                {
                    data.map((sp, i) => (
                        <div class="text-center p-8 md:p-6 mx-auto" key={i}>
                            <img src={sp.img} alt={sp.title} className="w-24 mx-auto p-4" />

                            <h6 class="text-2xl font-bold py-3.5">{sp.title}</h6>
                            <p class="text-base ">
                                {sp.desc}
                            </p>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Speciality;