import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Signup = () => {

    const { createUser, updateUserProfile, loading, setLoading, verifyEmail, signInWithGoogle } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"

    const { reset, handleSubmit, register } = useForm();

    const handleSignup = (data) => {
        console.log(data);
        const { email, password, fullName, } = data;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        // console.log(image);

        // const url = `https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_imgbb_key}`;
        const url = `https://api.imgbb.com/1/upload?&key=303646d80b0b127bcdc690c6daae3ebf`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data?.display_url)

                // create user
                createUser(email, password).then(result => {
                    const user = result.user;
                    console.log(user);
                    toast.success("login success");
                    alert("login success")
                    reset();


                    // update profile
                    updateUserProfile(fullName, data.data?.display_url)
                        .then(() => {
                            verifyEmail().then(() => {
                                toast.success("Please check email for verification link");
                                alert("Please check email for verification link")
                                setLoading(false);
                                navigate(from, { replace: true })
                            })

                        })

                })
                    .catch(err => {
                        console.error(err.message)
                        setLoading(false)
                    })

            })
            .catch(err => {
                console.error(err);
                // if error occurs we stp the small spinner
                setLoading(false);
            })
        // console.log(formData);



    }
    return (
        <>
            <div
                className="relative w-full overflow-hidden bg-cover bg-[100%] bg-no-repeat bg-black">
                <img
                    src="https://cdn.pixabay.com/photo/2020/06/21/05/21/building-5323266_1280.jpg"
                    className=" top-0 left-0 h-screen w-screen -z-10 opacity-50 "
                    alt="background_image"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden  border-red-950">
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 text-white">
                        <div className="mx-auto max-w-lg">
                            <div className="text-center text-3xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow">
                                    Signup to your account
                                </span>
                            </div>

                            <form action="" className="mt-6 mb-0 space-y-4 bg-neutral rounded-lg p-8 shadow-2xl"
                                onSubmit={handleSubmit(handleSignup)}
                            >
                                <div>

                                    <div className="relative mt-1">
                                        <input
                                            type="FullName"
                                            id="FullName"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md text-black shadow-sm"
                                            placeholder="Enter full-Name"
                                            required
                                            {...register("fullName")}
                                        />
                                    </div>
                                </div>
                                <div>
                                    {/* <label htmlFor="image" className="text-sm font-medium">upload image</label> */}
                                    <div className="relative mt-1">

                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="file_input">Upload image</label>
                                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none py-3.5 px-4" id="file_input" type="file" placeholder="upload image" accept="image/png, image/jpeg"
                                            {...register("image")}
                                        />

                                    </div>

                                </div>
                                <div>
                                    <div className="relative mt-1">
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md text-black shadow-sm"
                                            placeholder="Enter email"
                                            {...register("email")}
                                        />
                                    </div>

                                </div>

                                <div>
                                    <div className="relative mt-1">
                                        <input
                                            type="password"
                                            id="password"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md text-black shadow-sm"
                                            placeholder="Enter password"
                                            required
                                            {...register("password")}
                                        />
                                    </div>

                                </div>
                                {/* radio */}
                                <div className="flex justify-between ">

                                    <div className="flex space-x-3">
                                        <div className="flex items-center mb-4">
                                            <input type="radio" value="employee" name="account" htmlFor="account-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                            <label htmlFor="account-type" className="ml-2 text-sm font-medium text-slate-50 ">Admin</label>
                                        </div>

                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    className="block w-full rounded-lg bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow px-5 py-3 text-sm font-medium text-white"
                                >
                                    Sign up
                                </button>

                                <p className="text-center text-sm text-gray-500">
                                    already have an account?
                                    <Link className="underline" to="/login">Sign in</Link>
                                </p>
                            </form>
                        </div>
                    </div >
                </div>
            </div>
        </>
    );
};

export default Signup;

