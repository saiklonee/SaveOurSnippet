import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import SyncUser from "./components/SyncUser";

const App = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <SyncUser />
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default App;
