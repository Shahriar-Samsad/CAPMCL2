import p1 from "../../Assets/Icons/eco-factory.png";
import p3 from "../../Assets/Icons/rating.png";
import p2 from "../../Assets/Icons/stock.png";


export const States = () => {
    const data = [
        { img: p1, desc: "  Warehouses", number: "7+" },
        { img: p2, desc: "  Distributors", number: "50+" },
        { img: p3, desc: "  Reguler Customers", number: "500+" },
    ]

    return (
        <div className="relative object-left-top bg-cover bg-no-repeat  min-h-[480px] my-10 bg-states-banner" style={{ "backgroundAttachment": "fixed" }} >

            <div class="absolute bg-gray opacity-10 inset-0 z-0"></div>
            <div className="z-10 relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row px-4 py-10">
                    <div className="w-full max-w-xl mb-6">
                        <h2 className="tracking-normal text-white leading-[8rem] text-2xl font-semibold md:text-4xl ">
                            Are you willing to become a supplier?
                        </h2>

                        <button className=" bg-gradient-to-tr from-orange-500 via-lime-200 to-rose-400 px-8 py-3.5 my-4 rounded-md">Become a Supplier</button>
                    </div>
                    <div className="w-full flex-auto">
                        <div className="grid grid-col-1  md:grid-cols-3 gap-6 ">
                            {
                                data.map((elem, i) => (
                                    <div className="p-3 mx-auto" key={i}>
                                        <figure className="p-2 mb-2">
                                            <img src={elem.img} alt={elem.desc} className="w-[30%] md:w-[45%]" />
                                        </figure>
                                        <h2 className="py-3.5 text-3xl font-bold text-white">
                                            {elem.number}
                                        </h2>
                                        <p className="text-lg text-white">
                                            {elem.desc}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>

        </div >
    );
};