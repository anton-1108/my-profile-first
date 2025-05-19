import { Divide } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t items-center justify-center px-4 md:px-6">
      <p className="text-center text-sm">
        {new Date().getFullYear()} Anton Amarjargal
      </p>
    </div>
  );
}
