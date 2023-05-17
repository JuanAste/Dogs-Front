import { searchDogs } from "../../redux/actions";
import axios from "axios";
import { useDispatch} from "react-redux";
import { resetNumPage } from "../../redux/actions";
import style from "./SearchBar.module.css"

const SearchBar = () => {
  const dispatch = useDispatch();

  const onSearch = async (event) => {
    try {
      const nom = event.target.value
      const { data } = await axios(`https://servidor-dogs-6whl.onrender.com/name?q=${nom}`);
      if (data[0].name) {
        dispatch(searchDogs(data));
        dispatch(resetNumPage())
      }
    } catch (error) {
      dispatch(searchDogs([]));
    }
  };

  return (
    <div  >
      <input className={style.search} type="search" onChange={onSearch} />
    </div>
  );
};

export default SearchBar;
