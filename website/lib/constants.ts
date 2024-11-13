import { signIn } from "next-auth/react";

export const routes = {
  home: "/",
  login: "/api/auth/signin",
  register: "/api/auth/signin",
  onboarding: {
    initial: "/onboarding/driver-or-rider",
    rider: "/onboarding/rider",
    driver: "/onboarding/driver",
  },
  ride: "/book",
  dashboard: "/dashboard",
  settings: "/settings",
  notFound: "/404",
  driverOrRider: "/driver-or-rider",
  logout: "/api/auth/signout",
};

export const routingFunctions = {
  login: signIn,
};
