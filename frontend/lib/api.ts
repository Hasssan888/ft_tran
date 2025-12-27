const API = "http://localhost:3000";

export async function api(path: string, data?: any, token?: string) {
    const res = await fetch(`${API}${path}`, {
        method: data ? "POST" : "GET",
        headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: token })
        },
        body: data ? JSON.stringify(data) : undefined
    });

    return res.json();
}
