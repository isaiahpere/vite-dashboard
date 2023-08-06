import { FC } from "react";
import Single from "../../components/single/Single";
import { singleUser } from "../../data";

import "./User.scss";

const User: FC = () => {
  return (
    <div>
      <Single {...singleUser} />
    </div>
  );
};

export default User;
