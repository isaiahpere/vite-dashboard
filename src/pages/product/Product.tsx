import { FC } from "react";

import Single from "../../components/single/Single";
import { singleProduct } from "../../data";

import "./Product.scss";

const Product: FC = () => {
  // fetch data and send to Single component

  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
