import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const [isDisabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    
    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(4);
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
      
        if (!isDisabled) {
          // Perform login only if captcha is valid
          signIn(email, password)
            .then((result) => {
              const user = result.user;
              console.log(user);
              Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown',
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp',
                },
              });
              navigate(from, { replace: true });
            });
        }
      };

      const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
          setDisabled(false);
        }
      };


    return (
      <section style={{background:`url(https://i.ibb.co/NZKF5cJ/authentication.png)`}}>
          <Helmet>
                <title>Dhaka Spice | Login</title>
            </Helmet>
            <div className="hero min-h-screen max-w-5xl mx-auto py-12 shadow-2xl shadow-slate-500">
                <div className="hero-content ">
                    <div className="">
                        <img src={'https://i.ibb.co/j8zFdnM/authentication2.png'} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm ">
                        <h3 className="text-3xl font-semibold text-center">Login</h3>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover"></a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                            </div>
                            {/* TODO: make button disabled for captcha */}
                            <div className="form-control mt-6">
                                <input disabled={isDisabled} className="btn bg-[#D1A054B2] text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-[#D1A054B2] text-center"> New here?<Link to={'sinup'}><samp className=" font-bold">Create a New Account</samp></Link> </p>
                       
                    </div>
                </div>
            </div>
      </section>
    );
};

export default Login;