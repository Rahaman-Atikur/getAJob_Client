import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/Auth-Context/AthenticationContext";
import { auth } from "../Firebase/firebase.init";

const Navbar = () => {
  type userType ={
    id: number,
    email: string,
    password: string

  } 
  type AuthContextType = {
    user: userType | null;
    signOutUser: () => void | null;
  };
  if (!AuthContext) {
  throw new Error("AuthContext not provided");
}
  const { user  , signOutUser} = useContext(AuthContext) as AuthContextType;

  const handleSignOut = () =>{
    signOutUser()
    .then(()=>{
      console.log("Signout successful");
    })
    .catch((error)=>{
      console.log("Error Signing out", error);
    })
  }


  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">GetAJob</a>
      </div>

      <div className="navbar-end">   
        {user ? (
          <button onClick={handleSignOut} className="btn">Sign Out</button>
        ) : (
          <>
            <div className="navbar-end">
              <NavLink to="/register" className="btn">
                Register
              </NavLink>
              <NavLink to="/signin" className="btn">
                Sign In
              </NavLink>
               <NavLink to="/" className="btn">
                Home
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
