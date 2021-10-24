import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { gardens } from "../data/gardens";

console.log(gardens);

// function Cards() {
//   return (
//     <div className="cards">
//       <div className="cards__container">
//         <h1>Bezoek deze prachtige tuinen!</h1>
//         <div className="cards__wrapper">
//           {gardens.map(({ id, image, title, description, tags, visit }) => (
//             <ul className="cards__items">
//               <CardItem
//                 src={image}
//                 text={description}
//                 label={title}
//                 path={visit}
//               />
//             </ul>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

function Cards() {
  return (
    <div className="cards">
      <h1>&nbsp;</h1>
      {gardens.map(({ id, image, title, description, tags, visit }) => (
        <CardItem src={image} text={description} label={title} path={visit} />
      ))}
    </div>
  );
}

export default Cards;
