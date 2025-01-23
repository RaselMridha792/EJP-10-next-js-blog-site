import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen gap-5">
        <h1 className="text-xl">You are not logged In. please </h1>
        <button className="py-3 px-5 rounded-xl border font-bold hover:text-blue-600 hover:border-blue-600 duration-500">
          <LoginLink> Login </LoginLink>
        </button>
      </div>
    </>
  );
};

export default page;
