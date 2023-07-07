declare global {
    interface Window {
        _env_: {
            [key: string]: any;
        }
    }
}

export const API = import.meta.env.VITE_API_URL 
    ?? window._env_?.API 
    ?? "http://localhost:8080/"