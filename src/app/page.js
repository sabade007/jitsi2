"use client";
import { useAuthContext } from "@asgardeo/auth-react";
import Image from "next/image";

export default function Home() {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-8">This is our homepage or dashboard</h1>
      <h1 className="text-lg mb-8">
        If not logged in via SSO you will see this.currently login is via wso2.
        if we implement any other Login we direct ourself to that
      </h1>
      <button
        onClick={() => signIn()}
        className="bg-blue-500 mb-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
      <h1 className="text-lg mb-8">Else you will see this.</h1>

      <div className="flex flex-row gap-4">
        <button
          onClick={() => (window.location.href = "/jitsi")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Room
        </button>

        <button
          onClick={() => signOut()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          signOut
        </button>
      </div>
      <br />
      <h1>
        Current auth state :{" "}
        {state.isAuthenticated ? `${state.username}` : "not logged in"}
      </h1>
    </div>
  );
}
