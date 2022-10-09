import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  //const [hello, setHello] = useState("hello les GENS")
  //le useeffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <h1>Liste des Pays du monde</h1>
      <ul>
        {
          //hello
          data.map((country, index) => (
            <Card />
          ))
        }
      </ul>
    </div>
  );
};

export default Countries;
