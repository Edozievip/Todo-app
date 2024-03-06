import React, { useState, useEffect } from "react";

const Api = () => {

  const [getname, setGetname] = useState({
    id: "",
    title: "",
    thumbnail: "",
    category: "",
    description: "",
  })
  const { id, title, thumbnail, category, description } = getname;

  useEffect(() => { 
    fetch("https://dummyjson.com/products/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setGetname({id: data.id, title: data.title, thumbnail: data.thumbnail, category: data.category, description: data.description})
    })
    .catch((err) => console.log(err));
  }, []);
 
  

  return (
    <div>
      <h3>id: {id}</h3>
      <h3>title: {title}</h3>
      <img src={thumbnail}></img>
      <h3>category: {category}</h3>
      <h3>description: {description}</h3>
      
      
      
      
    </div>
  );
};

export default Api;
