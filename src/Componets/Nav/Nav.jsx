import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  tempsFilter,
  originFilter,
  raceOrder,
  weightOrder,
  resetPage,
} from "../../redux/actions";
import style from "./Nav.module.css";

const Nav = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(resetPage());
  };

  const handlefilter = (event) => {
    dispatch(tempsFilter(event.target.value));
  };

  const handleOrigi = (event) => {
    dispatch(originFilter(event.target.value));
  };

  const hadleRace = (event) => {
    dispatch(raceOrder(event.target.value));
  };

  const hadleWeight = (event) => {
    dispatch(weightOrder(event.target.value));
  };

  const { temperaments } = useSelector((state) => state);

  return (
    <div >
      <div className={style.seach}>
        <Link to="/formPage">
          <button className={style.formButon}>Create</button>
        </Link>
        <SearchBar />
        <Link to="/">
          <button className={style.exitButon}>Exit</button>
        </Link>
      </div>
      <div className={style.nav}>
        <div className={style.navOrd}>
          <select onChange={hadleWeight} className={style.order}>
            <option>Order by weight:</option>
            <option value="A">Upward</option>
            <option value="D">Falling</option>
          </select>
          <select onChange={hadleRace} className={style.order}>
            <option>Order by race:</option>
            <option value="A">Upward</option>
            <option value="D">Falling</option>
          </select>
        </div>
        <div className={style.navOrd}>
          <select onChange={handleOrigi} className={style.order}>
            <option value="Reset">Filter by origin:</option>
            <option value="A">Api</option>
            <option value="B">DataBase</option>
          </select>

        <select onChange={handlefilter} className={style.order}>
          <option value="Reset">Filter by temperamets:</option>
          {temperaments.map(({ name, id }) => {
            return (
              <option key={id} value={name}>
                {name}
              </option>
            );
          })}
        </select>
        </div>
      </div>
      <button onClick={onClick} className={style.resetButon}>
        Reset
      </button>
    </div>
  );
};

export default Nav;
