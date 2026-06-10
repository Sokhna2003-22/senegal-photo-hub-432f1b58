export type StoredUser = {
  id: string;
  name: string;
  email: string;
  role: "client" | "photographer";
  city?: string;
};

const USERS_KEY = "pp_users";
const CURRENT_KEY = "pp_current_user";

export function getUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveUser(u: StoredUser) {
  const all = getUsers();
  all.push(u);
  localStorage.setItem(USERS_KEY, JSON.stringify(all));
}

export function getPhotographers(): StoredUser[] {
  return getUsers().filter((u) => u.role === "photographer");
}

export function setCurrentUser(u: StoredUser | null) {
  if (!u) localStorage.removeItem(CURRENT_KEY);
  else localStorage.setItem(CURRENT_KEY, JSON.stringify(u));
}

export function getCurrentUser(): StoredUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CURRENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}