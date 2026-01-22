"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { isAuth, logout } = useAuth();
  const router = useRouter();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => router.push("/")}
      >
        MyApp
      </h1>

      <div className="space-x-4">
        {!isAuth ? (
          <>
            <button onClick={() => router.push("/login")}>Login</button>
            <button
              onClick={() => router.push("/signup")}
              className="bg-blue-600 px-4 py-2 rounded-lg"
            >
              Signup
            </button>
          </>
        ) : (
          <>
            <button onClick={() => router.push("/profile")}>
              Profile
            </button>
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
