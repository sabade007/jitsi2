"use client";
import React, { useState } from "react";
import { useAuthContext } from "@asgardeo/auth-react";

const page = () => {
  const { state, signIn, signOut } = useAuthContext();
  if (!state.isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl mb-8">This is our homepage or dashboard</h1>
        <h1 className="text-lg mb-8">You have not logged in . please login</h1>
        <button
          onClick={() => signIn()}
          className="bg-blue-500 mb-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    );
  }

  const [roomName, setRoomName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-8">Create your Room name</h1>
      <input
        className="mb-4"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        type="text"
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={() =>
          (window.location.href = `/jitsi/${state.username}/${roomName}`)
        }
        className="bg-blue-500 mb-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Room/Conference
      </button>
    </div>
  );
};

export default page;
