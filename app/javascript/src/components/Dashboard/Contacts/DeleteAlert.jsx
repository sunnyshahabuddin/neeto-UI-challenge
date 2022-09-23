import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose }) => {
  const handleDelete = () => {
    Toastr.success("Contact deleted successfully.");
    onClose();
  };

  return (
    <Alert
      isOpen
      className="h-52 w-1/2"
      message="Are you sure you want to delete contact? This change cannot be undone."
      title="Delete Contact"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
