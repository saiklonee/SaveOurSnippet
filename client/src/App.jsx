import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { Routes, Route } from "react-router-dom";
import React from "react";
import SyncUser from "./components/SyncUser";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import CreateSnippet from "./pages/createSnippet";

const App = () => {
  return (
    <>
      <SignedIn>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-snippet" element={<CreateSnippet />} />
        </Routes>
      </SignedIn>
      <SignedOut>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </SignedOut>
    </>
  );
};

export default App;
