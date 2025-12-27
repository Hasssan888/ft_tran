"use client"

import Navbar from "@/component/Navbar";
import { useRouter } from "@/node_modules/next/navigation";
import { use, useRef, useState } from "react";

export default function Home() {
  
  const inputRefEmail = useRef<HTMLInputElement>(null);
  const inputRefPassword = useRef<HTMLInputElement>(null);
  const [inputCorr, setInputCorr] = useState<boolean | null>(null);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storUser = JSON.parse(localStorage.getItem("user") || "null");
    if (!inputRefEmail.current || !inputRefPassword.current || !storUser) {
      setInputCorr(false);
      return;
    }
    

    if (inputRefEmail.current.value === storUser.email 
        && inputRefPassword.current.value === storUser.password) {
          setInputCorr(true);
          router.push("/profile");
      } else {
        setInputCorr(false);
      }

    inputRefEmail.current.value = "";
    inputRefPassword.current.value = "";
  };


  return (
    <div>
      <Navbar/>
      <form onSubmit={handleLogin}
            className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 capitalize">Login</h2>
            
            <input ref={inputRefEmail}  type="email" placeholder="Email"
                className="w-full p-2 mb-4 border rounded"
            />
            <input ref={inputRefPassword} type="password" placeholder="Password"
                className="w-full p-2 mb-4 border rounded"
            />
            { inputCorr === false && (
              <p className= "text-red-500 text-[11px] mb-2 font-bold">Something went wrong. Please check your email or password and try again.</p>
            )}
            <button type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
        </form>
    </div>
  );
}


