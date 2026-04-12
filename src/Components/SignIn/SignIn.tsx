import { NavLink } from "react-router";
const SignIn = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          {/* <Lottie animationData={registerLottie} loop={true}></Lottie> */}
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In</h1>
            {/* Form of Registration */}

            <form  className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <NavLink to="/login" className="link link-hover">
                 Doesn't have an account ?
                </NavLink>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                SignIn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
