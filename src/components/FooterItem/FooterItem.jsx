import React from "react";

const FooterItem = ({ data }) => {
  return (
    <div className="">
      <p>{data.item1}</p>
      <p>{data.item2}</p>
      <p>{data.item3}</p>
    </div>
  );
};

export default FooterItem;
