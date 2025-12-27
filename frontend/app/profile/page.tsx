"use client";

import Navbar from "@/component/Navbar";
import { useRouter } from "@/node_modules/next/dist/client/components/navigation";
import { useEffect, useState } from "react";

export default function Profile() {

    const [user, setUser] = useState<{ name?: string; email: string } | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            router.push("/");
        }
    }, [router]);
    
    const logout = () => {
        localStorage.removeItem("user");
        router.push("/");
    };

    return (
        <div>
            <Navbar/>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
                <h2 className="text-2xl font-bold mb-4">Profile</h2>
                {user?.name && <p className="mb-2">Name: {user?.name}</p>}
                <p>Email: {user?.email}</p>
                <button onClick={logout}
                    className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600">
                    Logout
                </button>
            </div>
        </div>
    );
}