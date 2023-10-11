import { NavLink } from "react-router-dom";


const Header = () => {

    const links = <>

        <li><NavLink to="/" className={({isActive,isPending})=>isPending ? "pending" : isActive ? "text-yellow-400 underline" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive,isPending})=>isPending ? "pending" : isActive ? "text-yellow-400 underline" : ""}>About</NavLink></li>
        <li><NavLink to="/class" className={({isActive,isPending})=>isPending ? "pending" : isActive ? "text-yellow-400 underline" : ""}>Class</NavLink></li>
        <li><NavLink to="/trainers" className={({isActive,isPending})=>isPending ? "pending" : isActive ? "text-yellow-400 underline" : ""}>Trainers</NavLink></li>
        <li><NavLink to="/blogs" className={({isActive,isPending})=>isPending ? "pending" : isActive ? "text-yellow-400 underline" : ""}>Blogs</NavLink></li>
        <li><NavLink to="/contact" className={({isActive,isPending})=>isPending ? "pending" : isActive ? "text-yellow-400 underline" : ""}>Contact</NavLink></li>
       

    </>

    return (
        <div className="navbar gap-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><span className="text-yellow-400">FIT</span>CLUB</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
            <li className="list-none"><NavLink to="/login" className={({isActive,isPending})=>isPending ? "pending" : isActive ? "text-yellow-400 underline" : ""}>Login</NavLink></li>
                
            </div>
        </div>
    );
};

export default Header;