import { options } from "@/lib/auth/options";
import { routes } from "@/lib/constants";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Dashboard() {
  var user = await getServerSession(options);

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <h2>Hi, {user?.user.firstName}!</h2>
      <h3>Thank&apos;s for being a {user?.user.role}!</h3>
      <div className="mt-12">
        <Link
          href={routes.logout}
          className="p-3 transition-all duration-150 bg-purple-400 hover:bg-purple-200 rounded-sm"
        >
          Logout now
        </Link>
      </div>
    </div>
  );
}
