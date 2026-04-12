// import Lottie from "lottie-react";
import { NavLink } from "react-router";


const SignIn = () => {
  

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);

    
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          {/* <Lottie animationData={registerLottie} loop={true}></Lottie> */}
          <div className="card-body">
            <h1 className="text-5xl font-bold">SignIN now!</h1>
            {/* Form of Registration */}

            <form onSubmit={handleSignIn} className="fieldset">
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
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
