import { Button } from "@/components/ui/button";
import type { UserRole } from "../types/auth.types";

interface RoleSelectorProps {
  value: UserRole;
  onChange: (role: UserRole) => void;
}

const roles: UserRole[] = [
  "teacher",
  "student",
  "parent",
  "admin",
];

export default function RoleSelector({
  value,
  onChange,
}: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-3">

      {roles.map((role) => (

        <Button
          key={role}
          type="button"
          variant={value === role ? "default" : "outline"}
          onClick={() => onChange(role)}
          className="h-11 rounded-xl capitalize transition-all"
        >
          {role}
        </Button>

      ))}

    </div>
  );
}