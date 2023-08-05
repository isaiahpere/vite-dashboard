import { FC, FormEvent } from "react";
import "./Add.scss";
import { GridColDef } from "@mui/x-data-grid";

interface Iprops {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Add: FC<Iprops> = ({ setOpen, slug, columns }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //add new item here
    // axios.post('/api/${slug}s', {data})
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={handleClose}>
          X
        </span>
        <h1>Add New {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
