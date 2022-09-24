import React from 'react';
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const menuItems = 
        <>
            {user && <li><Link to="/welcome"></Link></li>}
            {user && <li><Link to="/allContacts">All Contacts</Link></li>}
            {user && <li><Link to="/addContact">Add Contact</Link></li>}
            {user && <li><Link to="/favorites">Favorites</Link></li>}
            {!user &&  <li><Link to="/">Home</Link></li>}
            <li>
                {user ? <button className="btn bg-primary-focus hover:bg-primary" onClick={logout}>Sign Out</button>
                    : <Link  className='bg-primary-focus ml-8 hover:bg-primary px-10' to="/login">Login</Link>
                }
            </li>
        </>
    return (
        <div class="navbar bg-neutral text-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52 bg-base-100 text-black">
                        {menuItems}
                    </ul>
                </div>
                <h4 class="text-xl mx-12 my-3">Contact Ninja</h4>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;