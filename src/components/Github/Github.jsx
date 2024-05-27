import React, { useEffect, useState } from "react";

const Github = (newVal) => {
  const [data, setData] = useState([]);

  const getVal = () => {
    const val = document.getElementById("input");
    newVal = val.value;
    console.log(newVal);
    var API = `https://api.github.com/users/${newVal}`;
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        <div className=" justify-center  items-center gap-4 flex mt-12">
          <h1>ENTER YOUR GITHUB ID: </h1>
          <input type="text" id="input" className="text-black" />
          <button onClick={getVal} className="bg-orange-600 px-8 py-2 rounded">
            GET
          </button>
        </div>
        <div className="mt-12">
        <h1>Github Followers: {data.followers}</h1>
        <img src={data.avatar_url} alt="Github Profile" width={300} />
        </div>
      </div>
    </>
  );
};

export default Github;
