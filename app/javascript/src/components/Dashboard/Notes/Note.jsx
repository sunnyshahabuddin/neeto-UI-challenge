import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Tag, Avatar, Tooltip, Dropdown } from "neetoui";

import { calculateCreatedAgo, calculateDateToWeekday } from "./utils";

const Note = ({ note, setSelectedNote, setShowDeleteAlert }) => (
  <div className="neeto-ui-shadow-xs mb-4 w-full gap-3 space-y-2 border py-2 px-4">
    <div className="flex justify-between ">
      <Typography style="h4">{note.title}</Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <div className="mx-2">
          <li>Edit</li>
          <li
            onClick={() => {
              setSelectedNote(note);
              setShowDeleteAlert(true);
            }}
          >
            Delete
          </li>
        </div>
      </Dropdown>
    </div>
    <Typography className="neeto-ui-text-gray-600" style="body2">
      {note.description}
    </Typography>
    <hr />
    <div className="flex justify-between">
      <Tag
        className="neeto-ui-rounded-sm neeto-ui-bg-gray-100 box-border h-6 px-2 py-px"
        label="Getting Started"
        style="body3"
      />
      <div className="flex items-center justify-between">
        <Clock color="#68737d" size="20" />
        <Tooltip
          content={calculateDateToWeekday(note.created_at)}
          followCursor="horizontal"
          position="bottom"
        >
          <Typography
            className="neeto-ui-text-gray-600 ml-1 mr-2"
            style="body3"
          >
            Created {calculateCreatedAgo(note.created_at)}
          </Typography>
        </Tooltip>
        <Avatar
          user={{
            imageUrl: "https://xsgames.co/randomusers/avatar.php?g=pixel",
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
