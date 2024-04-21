const apiUrl: string =
    (import.meta as any).env.DEV ? "http://localhost:5024/api/v1" :
        "https://tzoo-backend.onrender.com/api/v1";

export {
    apiUrl
};