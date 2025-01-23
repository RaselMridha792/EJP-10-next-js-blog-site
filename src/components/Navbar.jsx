import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-teal-800 text-white fixed w-full top-0 shadow-md">
        <div className="max-w-screen-2xl mx-auto px-5 py-5 flex items-center justify-between">
          <div>
            <Link
              href={"/"}
              className="text-3xl font-bold uppercase text-center"
            >
              Blogs
            </Link>
          </div>
          <div>
            <ul className="flex gap-5 text-2xl">
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"/login"} className="btn btn-neutral">Login</Link></li>
              <li><Link href={"/logout"}>Logout</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
