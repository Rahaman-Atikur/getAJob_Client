import { NavLink } from "react-router";
import registerAnimation from "../../assets/RegisterLottie.json";
import Lottie from "lottie-react";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Lottie animationData={registerAnimation} loop={true}></Lottie>
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <NavLink to="/login" className="link link-hover">
                  Already Have an account ?
                </NavLink>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
