import { useState } from "react";
import { createUser } from "@/services/api";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CreateUserModal({
  open,
  onClose,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    rollNumber: "",
  });

  if (!open) return null;

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      await createUser({
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role as
          | "student"
          | "teacher"
          | "parent"
          | "admin",
        rollNumber:
          form.role === "student"
            ? form.rollNumber
            : undefined,
      });

      onSuccess();

      onClose();

      setForm({
        name: "",
        email: "",
        password: "",
        role: "student",
        rollNumber: "",
      });
    } catch (err) {
      alert(
        err instanceof Error
          ? err.message
          : "Failed to create user."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-bold">
          Create User
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            placeholder="Full Name"
            className="w-full rounded-lg border p-3"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            type="email"
            className="w-full rounded-lg border p-3"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full rounded-lg border p-3"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <select
            className="w-full rounded-lg border p-3"
            value={form.role}
            onChange={(e) =>
              setForm({
                ...form,
                role: e.target.value,
              })
            }
          >
            <option value="student">
              Student
            </option>

            <option value="teacher">
              Teacher
            </option>

            <option value="parent">
              Parent
            </option>

            <option value="admin">
              Admin
            </option>
          </select>

          {form.role === "student" && (
            <input
              placeholder="Roll Number"
              className="w-full rounded-lg border p-3"
              value={form.rollNumber}
              onChange={(e) =>
                setForm({
                  ...form,
                  rollNumber: e.target.value,
                })
              }
            />
          )}

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-5 py-2"
            >
              Cancel
            </button>

            <button
              disabled={loading}
              className="rounded-lg bg-blue-600 px-5 py-2 text-white"
            >
              {loading
                ? "Creating..."
                : "Create User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}