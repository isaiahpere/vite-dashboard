import "./TopBox.scss";

import { topDealUsers } from "../../data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      {topDealUsers.map((item) => (
        <div className="listItem" key={item.id}>
          <div className="user">
            <img src={item.img} alt={`${item.username} potrait`} />
            <div className="userText">
              <span className="username">{item.username}</span>
              <span className="email">{item.email}</span>
            </div>
          </div>
          <span className="amount">${item.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default TopBox;
