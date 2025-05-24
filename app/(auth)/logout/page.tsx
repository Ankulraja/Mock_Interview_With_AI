"use client";

import { signOut } from "@/lib/action/auth.action";

const LogoutButton = () => {
  return (
    <button
      onClick={async () => {
        await signOut();
        window.location.href = "/sign-in"; // redirect on client side
      }}
      className="px-4 py-2  text-white rounded-lg hover:bg-red-700 transition duration-300 text-sm sm:text-base"
    >
      Logout
    </button>
  );
};

export default LogoutButton;