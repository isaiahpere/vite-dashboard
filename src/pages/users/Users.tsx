import { GridColDef } from "@mui/x-data-grid";

import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";

import "./Users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return (
        <img src={params.row.img || "/noavatar.png"} alt="person avatar" />
      );
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
    type: "string",
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    editable: true,
    type: "string",
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: false,
    width: 200,
    type: "number",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 130,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={handleOpen}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add setOpen={setOpen} slug="users" columns={columns} />}
    </div>
  );
};

export default Users;

// STOPPED AT 1:40:15
