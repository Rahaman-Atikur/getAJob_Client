// import Lottie from "lottie-react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/Auth-Context/AthenticationContext";
import { use } from "react";
// import registerLottie from "../../assets/register.json";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
