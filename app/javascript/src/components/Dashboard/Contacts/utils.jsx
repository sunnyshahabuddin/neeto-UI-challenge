import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Dropdown, Avatar, Typography } from "neetoui";

const renderNameRoleAvatar = (name, { role }) => (
  <div className="flex space-x-4">
    <Avatar
      user={{
        imageUrl: "https://xsgames.co/randomusers/avatar.php?g=pixel",
      }}
    />
    <div>
      <Typography style="h5">{name}</Typography>
      <Typography className="neeto-ui-text-gray-600" style="body3">
        {role}
      </Typography>
    </div>
  </div>
);

const renderDropdown = () => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal} strategy="fixed">
    <li>Edit</li>
    <li>Delete</li>
  </Dropdown>
);

export const buildContactTableColumnData = [
  {
    dataIndex: "name",
    key: "name",
    title: "NAME & ROLE",
    width: "30%",
    render: renderNameRoleAvatar,
  },
  {
    dataIndex: "email",
    key: "email",
    title: "EMAIL",
    width: "30%",
  },
  {
    title: "CREATED AT",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "30%",
  },
  {
    title: "",
    dataIndex: "more",
    key: "more",
    width: "10",
    render: renderDropdown,
  },
];

export const ROW_DATA = [
  {
    name: "Oliver Smith",
    role: "Software Engineer",
    email: "oliver@example.com",
    createdAt: "Jul 21, 2022",
    id: 1,
  },
  {
    name: "Sam Smith",
    role: "UI Engineer",
    email: "samsmith@gmail.com",
    createdAt: "May 15, 2022",
    id: 2,
  },
  {
    name: "Oliver Sam",
    role: "QA Engineer",
    email: "example@example.com",
    createdAt: "Jun 30, 2022",
    id: 3,
  },
];
