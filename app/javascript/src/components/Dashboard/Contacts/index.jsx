import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane/Create";
import SideMenu from "./SideMenu";
import Table from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <>
      <SideMenu showMenu={showMenu} />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              onClick={() => setShowNewContactPane(true)}
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
        <Table setShowDeleteAlert={setShowDeleteAlert} />
        <NewContactPane
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
      </Container>
    </>
  );
};

export default Contacts;
