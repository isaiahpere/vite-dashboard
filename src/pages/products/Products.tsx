import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";

import { products } from "../../data";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";

import "./Products.scss";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img} alt="product image" />;
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 250,
    type: "string",
  },
  {
    field: "color",
    headerName: "Color",
    width: 150,
    type: "string",
  },
  {
    field: "price",
    headerName: "Price",
    width: 200,
    type: "number",
  },
  {
    field: "produce",
    headerName: "Produce",
    width: 200,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={handleOpen}>Add New Product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="product" setOpen={setOpen} columns={columns} />}
    </div>
  );
};

export default Products;
