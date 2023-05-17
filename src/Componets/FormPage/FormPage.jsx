import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validation from "./validation";
import axios from "axios";
import { allDogs } from "../../redux/actions";
import { Link } from "react-router-dom";
import style from "./FormPage.module.css"

const FormPage = () => {
  const dispatch = useDispatch();
  const { temperaments, originDogs } = useSelector((state) => state);
  const perro = originDogs[originDogs.length - 1];
  const [error, setError] = useState({});

  const [dog, setDog] = useState({
    name: "",
    image: "",
    heightmax: 50,
    heightmin: 40,
    weightmax: 50,
    weightmin: 40,
    lifemax: 50,
    lifemin: 40,
    temperament: [],
  });

  const handleChange = (event) => {
    setError(
      validation({
        ...dog,
        [event.target.name]: event.target.value,
      })
    );
    setDog({
      ...dog,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange2 = (event) => {
    setError(
      validation({
        ...dog,
        temperament: [...dog.temperament, event.target.value],
      })
    );
    setDog({
      ...dog,
      temperament: [...dog.temperament, event.target.value],
    });
  };

  const handleSubmit = (event) => {
    try {
      event.preventDefault();

    if (Object.values(error).length === 0) {
      const newDog = {
        id: perro.id + 1,
        name: dog.name,
        image: dog.image,
        height: dog.heightmin + " - " + dog.heightmax,
        weight: dog.weightmin + " - " + dog.weightmax,
        life_span: dog.lifemin + " - " + dog.lifemax + " years",
        temperaments: dog.temperament,
      };

      axios.post("http://localhost:3001/dogs", newDog);

      window.alert("create Dog");

      axios.get(`http://localhost:3001/dogs`).then((results) => {
        dispatch(allDogs(results.data));
      });

      setDog({
        name: "",
        image: "",
        heightmax: 50,
        heightmin: 40,
        weightmax: 50,
        weightmin: 40,
        lifemax: 50,
        lifemin: 40,
        temperament: [],
      });
      setError({});
    } else window.alert("you need to complete more parameters");
    } catch (error) {
      console.log(error.messaje)
      window.alert("An error has occurred");
    }
    
  };

  const filterTemp = (event) => {
    const closeTemp = dog.temperament.filter((temp) => {
      return temp !== event.target.value;
    });
    setError(validation({
      ...dog,
      temperament: closeTemp,
    }))
    setDog({
      ...dog,
      temperament: closeTemp,
    });
  };

  return (
    <div >
      <Link to="/homePage">
        <button className={style.homeButon} >Home</button>
      </Link>
      <form className={style.container} onSubmit={handleSubmit}>
        <h1>Create Dog Race:</h1>
        <div>
          <label>Race Name: </label>
          <input value={dog.name} name="name" type="text" onChange={handleChange} />
          <p className={style.error} >{error.name}</p>
        </div>
        <div>
          <label>Image: </label>
          <input value={dog.image} name="image" type="text" onChange={handleChange} />
          <p className={style.error} >{error.image}</p>
        </div>
        <div>
          <div>
          <label>Max Height: </label>
          <input
          value={dog.heightmax}
            type="range"
            name="heightmax"
            min={20}
            max={200}
            onChange={handleChange}
          />
          <span>{dog.heightmax + " Cm"} </span>
          </div>
          <div>
          <label>Min Height: </label>
          <input
          value={dog.heightmin}
            type="range"
            name="heightmin"
            min={20}
            max={200}
            onChange={handleChange}
          />
          <span>{dog.heightmin + " Cm"}</span>
          <p className={style.error} >{error.height}</p>
          </div>
        </div>
        <div>
          <div>
          <label>Max weight: </label>
          <input
          value={dog.weightmax}
            type="range"
            name="weightmax"
            min={1}
            max={200}
            onChange={handleChange}
          />
          <span>{dog.weightmax + " Kg"} </span>
          </div>
          <div>
          <label>Min weight: </label>
          <input
          value={dog.weightmin}
            type="range"
            name="weightmin"
            min={1}
            max={200}
            onChange={handleChange}
          />
          <span>{dog.weightmin + " Kg"}</span>
          <p className={style.error} >{error.weight}</p>
          </div>
        </div>
        <div>
          <div>
          <label>Max Life span: </label>
          <input
          value={dog.lifemax}
            type="range"
            name="lifemax"
            min={1}
            max={100}
            onChange={handleChange}
          />
          <span>{dog.lifemax + " years"} </span>
          </div>
          <div>
          <label>Min Life span: </label>
          <input
          value={dog.lifemin}
            type="range"
            name="lifemin"
            min={1}
            max={100}
            onChange={handleChange}
          />
          <span>{dog.lifemin + " years"} </span>
          <p className={style.error} >{error.life}</p>
          </div>
        </div>
        <div>
          <select name="temperament" onChange={handleChange2}>
            {temperaments.map(({ name, id }) => {
              return (
                <option key={id} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
          <div className={style.temp} >
            {dog.temperament.map((temp, index) => {
              return (
                <div>
                  <span key={index}>
                    {temp}{" "}
                    <button className={style.butonTemp}   onClick={filterTemp} value={temp}>
                      x
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
            <p className={style.error} >{error.temperament}</p>
        </div>
        <button className={style.sumitButon} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
