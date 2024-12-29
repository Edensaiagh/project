import React from "react";
import { Outlet, NavLink } from "react-router-dom";

//icons
import { IoMdHome, IoIosLogIn } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { CiChat1 } from "react-icons/ci";
import { LuBookOpenText } from "react-icons/lu";

export default function RootLayout(isAuth) {
  return (
    <div className="root-layout">
      <header>
        <nav >
          <NavLink className="navbar" to="/"><IoMdHome/> Home</NavLink>
          <NavLink className="navbar" to="about"><LuBookOpenText/>About</NavLink>
          <NavLink className="navbar" to="post"><CiChat1/> Post</NavLink>

          {!isAuth?(
            <NavLink className="navbar"  to="loginandsingup"> <IoIosLogIn/> Login&Signup</NavLink>
          )
          :(
            <NavLink className="navbar" to="profile"><RxAvatar /> Profile</NavLink>
          )
        } 
        </nav>
        <hr></hr>
      </header>
      <main>
        <Outlet />
      </main>

    </div>
  )
}