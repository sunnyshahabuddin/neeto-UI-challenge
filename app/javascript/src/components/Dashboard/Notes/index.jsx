import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import Note from "./Note";
import Create from "./Pane/Create";
import SideMenu from "./SideMenu";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showPane, setShowPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNote, setSelectedNote] = useState({});
  const [notes, setNotes] = useState([]);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <SideMenu showMenu={showMenu} />
      <Container>
        <Header
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Note"
              onClick={() => setShowPane(true)}
            />
          }
          menuBarToggle={() => {
            setShowMenu(showMenu => !showMenu);
          }}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: "Search Name, Email, Phone Number etc.",
          }}
        />
        {notes.length ? (
          notes.map(note => (
            <Note
              key={note.id}
              note={note}
              setSelectedNote={setSelectedNote}
              setShowDeleteAlert={setShowDeleteAlert}
            />
          ))
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowPane(true)}
            primaryActionLabel="Add New Note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <Create
          fetchNotes={fetchNotes}
          setShowPane={setShowPane}
          showPane={showPane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
