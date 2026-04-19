// import Lottie from "lottie-react";
import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/Auth-Context/AthenticationContext";


const SignIn = () => {
  const {signInUser} = use(AuthContext);
  

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email  = formData.get("email") as string;
    const password  = formData.get("password") as string;
    console.log(email, password);

    //Sign In user
    signInUser(email,password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error)
    })

    
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
