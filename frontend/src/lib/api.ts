const API_URL = "http://localhost:5000/api";

function getToken(): string | null {
  return localStorage.getItem("token");
}

async function parseResponse(response: Response) {
  const data = await response.json();

  if (!response.ok) {
    if (response.status === 401) {
      logout();
    }

    throw new Error(data.message || "Request failed");
  }

  return data;
}

// ======================
// Upload Evaluation
// ======================

export async function uploadAnswerSheet(formData: FormData) {
  const token = getToken();

  const response = await fetch(`${API_URL}/evaluation/upload`, {
    method: "POST",
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
    body: formData,
  });

  return parseResponse(response);
}

// ======================
// Results
// ======================

export async function getResults() {
  const response = await fetch(`${API_URL}/results`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch results"
    );
  }

  return data;
}
// ======================
// Analytics
// ======================
export async function getAnalytics() {
  const response = await fetch(`${API_URL}/analytics`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch analytics"
    );
  }

  return data;
}

// ======================
// Login
// ======================

export async function login(
  email: string,
  password: string
) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await parseResponse(response);

  localStorage.setItem(
    "token",
    data.data.token
  );

  localStorage.setItem(
    "user",
    JSON.stringify(data.data.user)
  );

  return data.data.user;
}

// ======================
// Register
// ======================

export async function register(
  name: string,
  email: string,
  password: string,
  role: string,
  confirmPassword?: string,
  rollNumber?: string
) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      confirmPassword,
      role,
      rollNumber,
    }),
  });

  const data = await parseResponse(response);

  localStorage.setItem(
    "token",
    data.data.token
  );

  localStorage.setItem(
    "user",
    JSON.stringify(data.data.user)
  );

  return data.data.user;
}

// ======================
// Logout
// ======================

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

// ======================
// Current User
// ======================

export function getCurrentUser() {
  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : null;
}

// ======================
// Auth Status
// ======================

export function isAuthenticated() {
  return !!getToken();
}