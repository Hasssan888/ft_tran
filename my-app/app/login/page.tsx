'use client'



export default function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <form action="">
                <h1>Login</h1>
                {/* error */}

                <input 
                    type="email"
                    placeholder="Email"
                    onChange={(e) =>{
                        console.log(e);
                    }}
                    className=""
                />
                
                <input 
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>{
                        console.log(e);
                    }}
                    className=""
                />

                <button className="">
                    Login
                </button>
            </form>
        </div>
    )
}