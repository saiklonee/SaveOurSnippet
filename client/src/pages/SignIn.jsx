import { SignInButton } from "@clerk/clerk-react";
import React from "react";

const SignIn = () => {
  return (
    <div className="text-black bg-red-50">
      <SignInButton />
    </div>
  );
};

export default SignIn;
