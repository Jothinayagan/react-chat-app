import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import React from "react";
import "./Chat.css";
import moment from "moment";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_header_info">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Jothinayagan 😻</span>
          This is a first message! 😋
          <span className="chat_timestamp">
            {moment().format("DD/MM/YY hh:mm A")}
          </span>
        </p>

        <p className="chat_message chat_reciever">
          <span className="chat_name">Jothinayagan 😻</span>
          This is a first message! 😋
          <span className="chat_timestamp">
            {moment().format("DD/MM/YY hh:mm A")}
          </span>
        </p>
      </div>

      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
