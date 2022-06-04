import React, { useEffect, useState } from "react";

function Cuaca() {
  const [data, setData] = useState([]);
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Jakarta&units=metric&appid=750f2d55dd517990c9c55517d0b7e9e3";
  var errFlag = 0;
  function handlethis() {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        console.log(data.weather[0].main);
        if (errFlag === 0) {
          //document.getElementById("cuaca").innerHTML = data.weather[0].main;
          errFlag++;
        }
      });
  }

  return <div></div>;
}
export default Cuaca;
