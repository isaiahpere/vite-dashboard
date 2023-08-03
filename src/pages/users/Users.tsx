import "./Users.scss";

import DataTable from "../../components/dataTable/DataTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { userRows } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avatar",
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
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  // {
  //   field: "actions",
  //   headerName: "Actions",
  //   width: 100,
  //   renderCell: (params) => {
  //     return (
  //       <div className="action">
  //         <div className="view">View</div>
  //         <div className="delete">Delete</div>
  //       </div>
  //     );
  //   },
  // },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: false,
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 130,
  },
  {
    field: "verified",
    headerName: "Verified",
    type: "boolean",
    width: 150,
  },
];

const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
    </div>
  );
};

export default Users;
