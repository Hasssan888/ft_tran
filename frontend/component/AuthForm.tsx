"use client"

import { useRouter } from "@/node_modules/next/navigation";
import React, { useState } from "react";


interface Props {
    mode: "login" | "signup";
}

export default function AuthForm({ mode }: Props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const user = { name, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/profile");
    };

    return (
        <form onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 capitalize">{mode}</h2>
            {mode === "signup" && (
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
            )}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            />
            <button type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                {mode === "login" ? "Login" : "Sign Up"}
            </button>
        </form>
    );
}