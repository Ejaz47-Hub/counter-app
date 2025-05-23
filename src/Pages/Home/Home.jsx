import { useState } from "react";
import React from "react";

const Home = () => {
  const data = [
    { name: "ejaz", class: 9 },
    { name: "vishal", class: 10 },
    { name: "anurag", class: 11 },
    { name: "doora", class: 12 },
  ];

  const [filterData, setFilterData] = useState(data);
};

export default Home;
