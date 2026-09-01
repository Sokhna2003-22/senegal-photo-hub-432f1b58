const API_URL = "https://senegal-photo-hub-backend-production.up.railway.app/api";

const getToken = () => localStorage.getItem("access_token");

const PUBLIC_ENDPOINTS = [
    "/auth/login/",
    "/auth/register/",
    "/auth/photographers/",
    "/portfolio/public/",
];

export const apiCall = async (endpoint: string, method = "GET", data: any = null) => {
    const headers: any = {
        "Content-Type": "application/json",
    };

    // N'envoie le token que pour les endpoints privés
    const isPublic = PUBLIC_ENDPOINTS.some(e => endpoint.startsWith(e));
    if (!isPublic) {
        const token = getToken();
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
    }

    const config: any = { method, headers };
    if (data) config.body = JSON.stringify(data);

    const response = await fetch(`${API_URL}${endpoint}`, config);
    return response.json();
};

// ── Auth ──────────────────────────────────────────
export const login = (username: string, password: string) =>
    apiCall("/auth/login/", "POST", { username, password });

export const register = (data: any) =>
    apiCall("/auth/register/", "POST", data);

export const getMe = () => apiCall("/auth/me/");

// ── Photographes ──────────────────────────────────
export const getPhotographers = () =>
    apiCall("/auth/photographers/");

export const getPhotographer = (username: string) =>
    apiCall(`/auth/photographers/${username}/`);

// ── Gallery ───────────────────────────────────────
export const getMyGalleries = () =>
    apiCall("/gallery/");

export const accessGallery = (code: string) =>
    apiCall("/gallery/access/", "POST", { access_code: code });

export const uploadPhotos = async (galleryId: number, files: FileList) => {
    const formData = new FormData();
    Array.from(files).forEach(f => formData.append('images', f));
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${API_URL}/gallery/${galleryId}/upload/`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
    });
    return response.json();
};

// ── Portfolio ─────────────────────────────────────
export const getPublicAlbums = () =>
    apiCall("/portfolio/public/");

export const getPublicAlbum = (pk: number) =>
    apiCall(`/portfolio/public/${pk}/`);

export const getMyAlbums = () =>
    apiCall("/portfolio/my/");

export const deleteAlbum = (pk: number) =>
    apiCall(`/portfolio/my/${pk}/delete/`, "DELETE");

// ── Orders ────────────────────────────────────────
export const createOrder = (data: any) =>
    apiCall("/orders/", "POST", data);

export const getMyOrders = () =>
    apiCall("/orders/");

export const updateOrder = (pk: number, data: any) =>
    apiCall(`/orders/${pk}/`, "PATCH", data);

// ── Messaging ─────────────────────────────────────
export const getInbox = () =>
    apiCall("/messaging/inbox/");

export const getConversation = (username: string) =>
    apiCall(`/messaging/conversation/${username}/`);

export const sendMessage = (username: string, content: string) =>
    apiCall(`/messaging/conversation/${username}/`, "POST", { content });