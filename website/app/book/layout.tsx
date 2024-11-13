import { options } from "@/lib/auth/options";
import { routes } from "@/lib/constants";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function BookLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getServerSession(options);
  if (!user) {
    redirect(routes.login);
  }

  if (!user?.user.onboarded) {
    redirect(routes.onboarding.initial);
  }

  return <div> {children}</div>;
}
