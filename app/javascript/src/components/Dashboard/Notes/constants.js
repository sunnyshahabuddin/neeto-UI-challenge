import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  role: null,
  tags: [],
};

export const TAGS = buildSelectOptions([
  "Getting Started",
  "Onboarding",
  "User Flow",
  "UX",
  "Bugs",
  "V2",
]);

export const ROLES = buildSelectOptions([
  "Software Engineer",
  "UI Engineer",
  "QA Engineer",
]);

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  role: yup
    .object()
    .nullable()
    .required("Role is required")
    .shape({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    }),
  tags: yup
    .array(
      yup
        .object()
        .nullable()
        .shape({
          label: yup.string().oneOf(TAGS.map(tag => tag.label)),
          value: yup.string().oneOf(TAGS.map(tag => tag.value)),
        })
    )
    .min(1, "At least one tag is required ")
    .required("Tag is required"),
});
