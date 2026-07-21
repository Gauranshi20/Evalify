import { DashboardLayout } from "@/components/layout/dashboard";
import { Settings, User, Shield, Bell } from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Teacher Portal
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Settings
          </h1>

          <p className="mt-3 text-slate-600">
            Manage your account preferences and application settings.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <User className="mb-4 text-blue-600" size={32} />
            <h2 className="text-lg font-semibold">Profile</h2>
            <p className="mt-2 text-sm text-slate-500">
              Update your profile information.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <Shield className="mb-4 text-green-600" size={32} />
            <h2 className="text-lg font-semibold">Security</h2>
            <p className="mt-2 text-sm text-slate-500">
              Change your password and security settings.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <Bell className="mb-4 text-amber-600" size={32} />
            <h2 className="text-lg font-semibold">Notifications</h2>
            <p className="mt-2 text-sm text-slate-500">
              Configure notification preferences.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <Settings className="text-blue-600" />
            <h2 className="text-xl font-semibold">
              More settings coming soon
            </h2>
          </div>

          <p className="mt-3 text-slate-600">
            This section will include theme preferences, account management,
            export defaults, and other teacher-specific settings.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}