"use client"

export default function LoginForm() {
    return (
        <form action=""
            // onSubmit={handleLogin}
        >
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Login></button>
        </form>
    )
}