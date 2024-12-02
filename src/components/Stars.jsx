import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Stars = ({ rating }) => {
  function calculateStar(n) {
    if (n === 0 || n.toString().length === 1) return n;
    let [whole, rest] = n.toString().split(".");
    return rest[0] < 3 ? +whole : rest[0] < 8 ? +whole + 0.5 : +whole + 1;
  }

  const setStar = (n) => {
    let number = calculateStar(n);
    let fill = Math.floor(number);
    let helf = number - Math.floor(number) ? 1 : 0;
    let outline = 5 - Math.ceil(number);
    let fillStar = Array(fill).fill().map((_,inx)=> <FaStar key={`fil-${inx}`}/>);
    let helfStar = Array(helf).fill().map((_,inx)=> <FaStarHalfAlt key={`helf-${inx}`}/>);
    let outlineStar = Array(outline).fill().map((_,inx)=> <FaRegStar key={`outline-${inx}`}/>);
    return [
      ...fillStar,
      ...helfStar,
      ...outlineStar,
    ];
  };
  return setStar(rating);
};

export default Stars;
