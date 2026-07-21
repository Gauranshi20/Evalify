import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function PasswordInput(
  props: PasswordInputProps
) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">

      <Input
        {...props}
        type={show ? "text" : "password"}
        className={`pr-12 ${props.className ?? ""}`}
      />

      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => setShow(!show)}
        className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        {show ? (
          <Eye className="h-4 w-4" />
        ) : (
          <EyeOff className="h-4 w-4" />
        )}
      </Button>

    </div>
  );
}