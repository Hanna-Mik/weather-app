import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather() {
  function showTemp(response) {
    alert(response.data.main.temp);
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=738993d32099f81cb584e637be73ea30&units=metric`;
  axios.get(apiUrl).then(showTemp);
  return (
    <div className="Weather">
      Hello from Weather{" "}
      <Audio
        height="80"
        width="80"
        radius="9"
        color="yellow"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
