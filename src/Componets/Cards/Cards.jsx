import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Paginate from "./Paginate";
import style from "./Cards.module.css"

const Cards = () => {
  const { numPage, dogs } = useSelector((state) => state);
  let desde = (numPage - 1) * 8;
  let hasta = numPage * 8;

  let cantPages = Math.ceil(dogs.length / 8);

  let viewCharacters = dogs?.slice(desde, hasta);

  return (
    <div >
      <div className={style.cards}>
        {viewCharacters.map(({ id, name, temperaments, image, weight, origen }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              temperaments={temperaments}
              image={image}
              weight={weight}
              origen={origen}
            />
          );
        })}
      </div>
      <Paginate cantPages={cantPages}></Paginate>
    </div>
  );
};

export default Cards;
