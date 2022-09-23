import React from "react";

import { Table as ContactTable } from "neetoui";

import { ROW_DATA, buildContactTableColumnData } from "./utils";

const Table = ({ setShowDeleteAlert }) => (
  <ContactTable
    allowRowClick
    pagination
    columnData={buildContactTableColumnData(setShowDeleteAlert)}
    rowData={ROW_DATA}
    onRowClick={() => {}}
  />
);

export default Table;
