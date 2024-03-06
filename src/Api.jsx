import React, { useState, useEffect } from "react";

const Api = () => {

  const [getname, setGetname] = useState({
    name: "",
    email: "",
    address: "",
    company: "",
  })
  const { name, email, address, company } = getname;

  useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      setGetname({name: data.name, email: data.email, address: data.address.zipcode, company: data.company.name})
    })
    .catch((err) => console.log(err));
  }, []);
 
  

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
      <h3>Address: {address}</h3>
      <h3>Company: {company}</h3>
      
      
      
      
    </div>
  );
};

export default Api;
