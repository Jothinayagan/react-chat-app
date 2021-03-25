import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

export default function SidebarChat() {
  const [userImage, setuserImage] = useState("");

  useEffect(() => {
    setuserImage(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${userImage}.svg`} />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  );
}
