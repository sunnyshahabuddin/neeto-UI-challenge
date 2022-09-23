import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { INITIAL_FORM_VALUES } from "../utils";

const Create = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form contact={INITIAL_FORM_VALUES} onClose={onClose} />
    </Pane>
  );
};
export default Create;
