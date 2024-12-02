import React, { useState, useEffect } from "react";
import "./UnorderedList.css";

function UnorderedList() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://cimauae.avmdevs.com/wp-json/custom-product/v1/slot-data/product/106")
      .then((res) => res.json())
      .then((data) => setListData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul className="unordered-list">
      {listData.map((item, index) => (
        <li key={index}>{item.slot_name}</li>
      ))}
    </ul>
  );
}

export default UnorderedList;
