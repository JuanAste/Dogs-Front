import { Link } from "react-router-dom";
import style from "./Card.module.css"

const Card = ({id, name, image, weight, temperaments, origen }) => {

  return (
      <Link className={style.link} to={`/detail/${id}`}>
    <div className={style.card}>
      <h1>Race Name:</h1>
      <h2>{name}</h2>
      <h1>Weight:</h1>
      <h2>{weight} kg</h2>
      <h1>Temperaments:</h1>
      <h2>{temperaments} </h2>
      <h2>origen:</h2>
      <h2>{origen}</h2>
      <img className={style.img} src={image} />
    </div>
      </Link>
  );
};

export default Card;
