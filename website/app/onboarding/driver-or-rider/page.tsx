import { routes } from "@/lib/constants";
import { Bike, PersonStanding } from "lucide-react";
import Link from "next/link";

export default function DriverOrRider() {
  return (
    <div className="flex flex-col justify-center align-middle items-center h-3/4 w-screen space-y-4 mt-5">
      <h1 className="text-3xl">Which describes you?</h1>
      <div className="flex flex-row space-x-4">
        <Link
          href={routes.onboarding.driver}
          className="transition-all duration-150 hover:bg-slate-300 h-64 w-72 flex flex-col justify-center align-middle items-center border-gray-400 border-2 hover:bg-black-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <>
            <p className="text-3xl font-bold">Driver</p>
            <Bike size={64} />
          </>
        </Link>

        <Link
          href={routes.onboarding.rider}
          className="transition-all duration-150 hover:bg-slate-300 h-64 w-72 flex flex-col items-center justify-center align-middle border-gray-400 border-2 hover:bg-black-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <>
            <p className="text-3xl font-bold">Rider</p>
            <PersonStanding size={64} />
          </>
        </Link>
      </div>
    </div>
  );
}
