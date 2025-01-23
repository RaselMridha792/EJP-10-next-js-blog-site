import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-3">
        <h1 className="text-3xl">Hey {user.given_name} welcome to the dashboard</h1>
      </div>
    </div>
  );
};

export default page;
