// import Lottie from "lottie-react";

import { NavLink } from "react-router";
// import { AuthContext } from "../../Context/Auth-Context/AthenticationContext";
import { createContext, use } from "react";
import { AuthContext } from "../../Context/Auth-Context/AthenticationContext";
// import registerLottie from "../../assets/register.json";
// type  AuthContextType ={
//   createUser:(email: string,password:string)=>Promise<void>
// }
// const AuthContext = createContext<AuthContextType | null>(null);

const Register = () => {
  const { createUser } = use((AuthContext) as React.Context<{ createUser: (email: string, password: string) => Promise<any> }> );

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log(email, password);
    if(!email || !password) return;

   createUser(email, password)
      .then((result) => {
        console.log("User created:", result);
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  // Google Register Handler
  const handleGoogleRegister=()=>{
    
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          {/* <Lottie animationData={registerLottie} loop={true}></Lottie> */}
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            {/* Form of Registration */}

            <form onSubmit={handleRegister} className="fieldset">
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
                  Already Have an account ?
                </NavLink>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>

              {/* Google Register Button */}
              <button type="button" onClick={handleGoogleRegister} className="btn bg-black text-white  mt-0.5">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Register with Google
              </button>



            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
