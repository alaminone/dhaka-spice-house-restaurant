import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'

import { AuthContext } from "../../provider/AuthProvider";
import useAxiosOpen from "../../huks/openapi/useAxiosOpen";
import Googlelogin from "../../components/googlelogin/Googlelogin";

const SinUp = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosopenApi = useAxiosOpen();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = { name: data.name, email: data.email }

                        axiosopenApi.post("/users", userInfo).then((res) => {
                            console.log(res);
                          });
                          navigate('/')
                        })
                        .catch((error) => {
                          console.error("Error during Google sign-in:", error);
                        



                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        < section  style={{background:`url(https://i.ibb.co/NZKF5cJ/authentication.png)`}}>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen  py-12 ">
                <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl max-w-5xl mx-auto rounded-lg">
                    <div className="">
                      <img src={'https://i.ibb.co/j8zFdnM/authentication2.png'} alt="" />
                    </div>
                    <div className="card  w-full max-w-sm  ">
                        <h3 className="text-4xl font-bold text-center">SingUp</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 8,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#D1A054B2] text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="w-full text-[#D1A054B2] text-center"> Already registered?<Link to={'/login'}><samp className=" font-bold">Go to log in</samp></Link> </p>
                        <Googlelogin></Googlelogin>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default SinUp;