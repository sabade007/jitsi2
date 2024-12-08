"use client";
import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

const page = ({ params }) => {
  const { roomname } = params;
  const { username } = params;
  return (
    <JitsiMeeting
      domain="jitsi.sruvi.in"
      roomName={roomname}
      configOverwrite={{
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false,
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
      }}
      userInfo={{
        displayName: "Your Username",
      }}
      onApiReady={(externalApi) => {
        // here you can attach custom event listeners to the Jitsi Meet External API
        // you can also store it locally to execute commands
      }}
      getIFrameRef={(iframeRef) => {
        iframeRef.style.height = "100dvh";
      }}
    />
  );
};

export default page;
