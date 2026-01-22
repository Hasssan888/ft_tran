"use client"

import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        if (!localStorage.getItem("isAuth")) {
            router.push("/login");
        }
    }, []);

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">Dashboard 🔐</h1>
        </div>
    )
}