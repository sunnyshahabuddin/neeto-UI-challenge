import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Dropdown, Avatar, Typography } from "neetoui";
import { buildSelectOptions } from "utils";
import * as yup from "yup";

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

const renderActionDropdown = setShowDeleteAlert => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal} strategy="fixed">
    <li>Edit</li>
    <li onClick={setShowDeleteAlert}>Delete</li>
  </Dropdown>
);

export const buildContactTableColumnData = setShowDeleteAlert => [
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
    render: () => renderActionDropdown(setShowDeleteAlert),
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

export const CONTACT_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const ROLES = buildSelectOptions([
  "Software Engineer",
  "UI Engineer",
  "QA Engineer",
  "UX-Desginer",
]);

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  role: yup
    .object()
    .nullable()
    .required("Role is required")
    .shape({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    }),
});
