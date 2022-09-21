import React, { useState } from "react";

import { Alert } from "neetoui";

import notesApi from "apis/notes";

const DeleteAlert = ({ refetch, onClose, selectedNote, setSelectedNote }) => {
  const [deleting, setDeleting] = useState(false);
  const { id, title } = selectedNote;
  const handleDelete = async () => {
    try {
      setDeleting(true);
      await notesApi.destroy({ ids: id });
      onClose();
      setSelectedNote({});
      refetch();
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      className="h-52 w-1/2"
      isSubmitting={deleting}
      message={`Are you sure you want to delete ${title}? This cannot be undone.`}
      title="Delete Note"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
