import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./Details.module.css";

const Deatil = () => {
  const { id } = useParams();
  const [dog, setDog] = useState([]);

  useEffect(() => {
    axios(`https://servidor-dogs-6whl.onrender.com/dogs/${id}`).then(({ data }) => {
      if (data.name) {
        setDog(data);
      }
      if (data[0].name) {
        setDog(data[0]);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setDog([]);
  }, [id]);

  return (
    <div>
      <Link to="/homePage">
        <button className={style.homeButon} >Home</button>
      </Link>
      {dog.name ? (
        <div className={style.container}>
          <div >
            <img className={style.img} src={dog.image} alt="" />
          </div>
          <div>
            <h1>ID: {dog.id}</h1>
            <h1>Race Name: {dog.name}</h1>
            <h1>Weight: {dog.weight} kg</h1>
            <h1>Height: {dog.height} cm</h1>
            <h1>Life span: {dog.life_span}</h1>
            <h1>Temperamets:</h1>
            <h1>{dog.temperaments}</h1>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Deatil;
