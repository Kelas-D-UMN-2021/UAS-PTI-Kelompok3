import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [newdata, setnewdata] = useState([]);
  const url =
    "https://newsdata.io/api/1/news?apikey=pub_798704567c7e7180db32ee18f1562466243f&country=id&language=in";
  useEffect(() => {
    fetchnews();
  }, []);
  const fetchnews = async () => {
    const respond = await axios.get(url);
    setData(respond.data.results);
    console.log(respond);
  };

  return (
    <div>
      {data.map(({ description }) => (
        <h6>{description}</h6>
      ))}
    </div>
  );
};

export default App;
