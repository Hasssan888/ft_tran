export async function apiRequest(
    url: string,
    method: string,
    body?: unknown
) {
    const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined
    });

    const data = await res.json();

    if (!res.ok)
        throw new Error(data.message);
    return data;
}