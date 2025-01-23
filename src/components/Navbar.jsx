import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
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
              <li className="hover:text-black">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-black">
                <Link href={"/profile"}>Profile</Link>
              </li>
              {user ? (
                <>
                  <li className="hover:text-black">
                    <LogoutLink>Logout</LogoutLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:text-black">
                    <LoginLink>Login</LoginLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
