import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { ROW_DATA, buildContactTableColumnData } from "./utils";

const Table = ({ setShowDeleteAlert }) => (
  <NeetoUITable
    allowRowClick
    pagination
    columnData={buildContactTableColumnData(setShowDeleteAlert)}
    rowData={ROW_DATA}
    onRowClick={() => {}}
  />
);

export default Table;
