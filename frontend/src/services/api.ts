const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:5000/api";

function getToken() {
  return localStorage.getItem("token");
}

export interface PerformancePoint {
  month: string;
  evaluations: number;
}

export interface Analytics {
  totalEvaluations: number;
  averageScore: number;
  averageSimilarity: number;
  averageConfidence: number;
  highestScore: number;
  lowestScore: number;

  performance: PerformancePoint[];
}

export interface StudentAnalytics {
  totalEvaluations: number;
  averageScore: number;
  highestScore: number;
  lowestScore: number;
}

export interface Evaluation {
  _id: string;
  teacherId: string;
  studentId?: string;
  studentName: string;
  subject: string;
  questionPaper: string;
  answerSheet: string;
  score: number;
  similarity: number;
  confidence: number;
  feedback: string;
  keywords: string[];
  status: string;
  evaluatedAt?: string;
  createdAt: string;
  updatedAt: string;
}
export interface Student {
  _id: string;
  name: string;
  email: string;
  rollNumber: string;
  status: "active" | "inactive" | "suspended";
  totalEvaluations: number;
  averageScore: number;
  lastEvaluation: string | null;
  joinedAt: string;
}
export interface AdminDashboardStats {
  students: number;
  teachers: number;
  parents: number;
  admins: number;
  evaluations: number;
}
export interface AdminUser {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "teacher" | "student" | "parent";
  status: "active" | "inactive" | "suspended";
  rollNumber?: string;
  createdAt: string;
}

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
  role: "student" | "teacher" | "parent" | "admin";
  rollNumber?: string;
}


export async function fetchAdminUsers(): Promise<AdminUser[]> {
  const response = await fetch(
    `${API_BASE_URL}/admin/users`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch users"
    );
  }

  return data.data;
}


export async function fetchAdminDashboard(): Promise<AdminDashboardStats> {
  const response = await fetch(
    `${API_BASE_URL}/admin/dashboard`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch admin dashboard"
    );
  }

  return data.data;
}


export async function fetchAnalytics(): Promise<Analytics> {
  const response = await fetch(
    `${API_BASE_URL}/analytics`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch analytics"
    );
  }

  return data.analytics;
}

export async function fetchEvaluations(): Promise<
  Evaluation[]
> {
  const response = await fetch(
    `${API_BASE_URL}/evaluation`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch evaluations"
    );
  }

  return data.data;
}

export async function fetchStudentEvaluations(): Promise<
  Evaluation[]
> {
  const response = await fetch(
    `${API_BASE_URL}/evaluation/student`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        "Failed to fetch student evaluations"
    );
  }

  return data.data;
}

export async function fetchStudentAnalytics(): Promise<StudentAnalytics> {
  const response = await fetch(
    `${API_BASE_URL}/evaluation/student/analytics`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        "Failed to fetch student analytics"
    );
  }

  return data.analytics;
}

export async function fetchEvaluationsByStudentName(
  studentName: string
): Promise<Evaluation[]> {
  const evaluations =
    await fetchStudentEvaluations();

  return evaluations.filter(
    (evaluation) =>
      evaluation.studentName === studentName
  );
}
export async function fetchEvaluationById(
  id: string
): Promise<Evaluation> {
  const response = await fetch(
    `${API_BASE_URL}/evaluation/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch evaluation"
    );
  }

  return data.data;
}
export async function fetchStudents(): Promise<Student[]> {
  const response = await fetch(
    `${API_BASE_URL}/students`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch students"
    );
  }

  return data.data;
}
export async function createUser(
  payload: CreateUserPayload
) {
  const response = await fetch(
    `${API_BASE_URL}/admin/users`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to create user"
    );
  }

  return data.data;
}

export async function updateUser(
  id: string,
  payload: Partial<AdminUser>
) {
  const response = await fetch(
    `${API_BASE_URL}/admin/users/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.data;
}

export async function toggleUserStatus(
  id: string
) {
  const response = await fetch(
    `${API_BASE_URL}/admin/users/${id}/status`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deleteUser(
  id: string
) {
  const response = await fetch(
    `${API_BASE_URL}/admin/users/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return true;
}

export async function linkParentStudent(
  parentId: string,
  studentId: string
) {
  const response = await fetch(
    `${API_BASE_URL}/admin/parent/link`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({
        parentId,
        studentId,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

export interface ParentDashboardData {
  student: {
    _id: string;
    name: string;
    email: string;
    rollNumber?: string;
    status: string;
  };

  analytics: {
    totalEvaluations: number;
    averageScore: number;
    highestScore: number;
    lowestScore: number;
  };

  evaluations: Evaluation[];
}

export async function fetchParentDashboard(): Promise<ParentDashboardData> {
  const response = await fetch(
    `${API_BASE_URL}/parent/dashboard`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to load parent dashboard"
    );
  }

  return data.data;
}