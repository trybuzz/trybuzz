import Link from "next/link";

import { AuthenticationForm } from "@/components/thentication";

export default function AuthenticationPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-[450]">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md"></div>
            Trybuzz Inc.
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <AuthenticationForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block"></div>
    </div>
  );
}
