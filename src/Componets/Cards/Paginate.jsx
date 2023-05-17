import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";
import style from "./Cards.module.css";

export default function Paginate({ cantPages }) {
  const { numPage } = useSelector((state) => state);
  const dispatch = useDispatch();
  function next() {
    dispatch(nextPage());
  }
  function prev() {
    dispatch(prevPage());
  }

  return (
    <div className={style.paginate}>
      {numPage > 1 ? (
        <button className={style.buton} onClick={prev}>PREV</button>
      ) : (
        <button className={style.notButon} >PREV</button>
      )}
      <h3>{numPage - 1 ? numPage - 1 : null}</h3>
      <h3>{numPage}</h3>
      <h3>{numPage < cantPages ? numPage + 1 : null}</h3>
      {numPage < cantPages ? (
        <button className={style.buton} onClick={next}>NEXT</button>
      ) : (
        <button className={style.notButon} >NEXT</button>
      )}
    </div>
  );
}
