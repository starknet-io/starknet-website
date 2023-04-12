import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "__FILENAME", headerName: "File Name", width: 200 },
  { field: "id", headerName: "ID", width: 200 },
  { field: "name", headerName: "Name", flex: 1 },
];

export function Page({ categories }: { categories: any[] }) {
  return (
    <DataGrid
      rows={categories}
      columns={columns}
      getRowId={(row) => row.__FILENAME}
    />
  );
}
