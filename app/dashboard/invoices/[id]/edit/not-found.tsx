import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="mt-4 text-center text-xl font-semibold">404 Not Found</h2>
      <p className="mt-2 text-center text-gray-600">
        We couldn&apos;t find the invoice you&apos;re looking for.
      </p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go back to invoices
      </Link>
    </main>
  );
}
