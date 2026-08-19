import { login, register } from "./client";

// Protection SSR — localStorage n'existe que dans le navigateur
const isBrowser = typeof window !== "undefined";

export const loginUser = async (username: string, password: string) => {
    const data = await login(username, password);
    console.log("Login response:", data);
    if (data.access) {
        if (isBrowser) {
            localStorage.setItem("access_token", data.access);
            localStorage.setItem("refresh_token", data.refresh);
            localStorage.setItem("user", JSON.stringify(data.user));
        }
        return data.user;
    }
    throw new Error(data.error || data.detail || "Erreur de connexion");
};

export const registerUser = async (formData: any) => {
    const data = await register(formData);
    console.log("Register response:", data);
    if (data.access) {
        if (isBrowser) {
            localStorage.setItem("access_token", data.access);
            localStorage.setItem("refresh_token", data.refresh);
            localStorage.setItem("user", JSON.stringify(data.user));
        }
        return data.user;
    }
    const errorMsg = Object.entries(data)
        .map(([key, val]) => `${key}: ${Array.isArray(val) ? val.join(", ") : val}`)
        .join(" | ");
    throw new Error(errorMsg || "Erreur d'inscription");
};

export const logoutUser = () => {
    if (isBrowser) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");
        window.location.href = "/";
    }
};

export const getCurrentUser = () => {
    if (!isBrowser) return null;
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
    if (!isBrowser) return false;
    return !!localStorage.getItem("access_token");
};