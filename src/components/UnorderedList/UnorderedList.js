import React, { useState, useEffect } from "react";
import "./UnorderedList.css";

function UnorderedList() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://cimauae.avmdevs.com/wp-json/custom-product/v1/slot-data/product/106")
      .then((res) => res.json())
      .then((data) => {
          setListData(data.availableSlots)
          console.log(data)
        }
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="unordered-list">
      <h4>When would you like to join?</h4>
        {listData.map((item, index) => (
          <div key={index} className="list-comp">
            <div>{item.time} <br/> {item.duration}</div>
            <div>
              <img className="icon-image" src={item.image} alt="Image Not Found" />
            </div>
            <div>{item.title} <br/> {item.instructor} <br/> {item.studio}</div>
            <div>{item.location}</div>
          </div>
        ))}
    </div>
    
  );
}

export default UnorderedList;
