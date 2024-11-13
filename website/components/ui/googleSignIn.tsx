"use client";
import { signIn } from "next-auth/react";
import GoogleButton from "react-google-button";

export default function GoogleSignInButton() {
  return (
    // <button
    //   onClick={() => {
    //     signIn("google");
    //   }}
    // >
    //   Sign in with google
    // </button>

    <GoogleButton
      onClick={() => {
        signIn();
      }}
    />
  );
}
