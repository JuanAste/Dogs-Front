import "./App.css";
import { Routes, Route} from "react-router-dom";
import React from "react";
import axios from "axios";
import { allDogs, allTemperaments } from "./redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LandingPage from "./Componets/LandingPage/LandingPage";
import HomePage from "./Componets/HomePage/HomePage";
import Deatil from "./Componets/Details/Details";
import NotFound from "./Componets/NotFound/NotFound";
import FormPage from "./Componets/FormPage/FormPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:3001/temperaments`).then((results) => {
      dispatch(allTemperaments(results.data));
    });
  }, [dispatch]);

  useEffect(() => {
    axios.get(`http://localhost:3001/dogs`).then((results) => {
      dispatch(allDogs(results.data));
    });
  }, [dispatch]);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/detail/:id" element={<Deatil />} />
        <Route path="/formPage" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
