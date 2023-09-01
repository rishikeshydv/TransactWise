import React, { useState, useEffect } from 'react';
import Token from './token';


function userid() {
    const [response, setResponse] = useState<string>("");

    fetch("https://api.finicity.com/aggregation/v2/customers/testing",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Finicity-App-Token": "",     //use the token 
                "Finicity-App-Key": "0ec8bc7aac65c70b454e9680b3d6875a",
                "Accept": "application/json",
                "Host": "api.finicity.com",
                "Accept-Encoding": "gzip, deflate, br",
                "Connection": "keep-alive",
                            },
            body: JSON.stringify({
                "username": "customer_1",
                "firstName": "test1",
                "lastName": "test1"
                }),
        })
        .then(res => res.json())
        .then((data:string) =>{
            setResponse(data);
        })
        .catch(err => console.log(err));
  return (
    <div>userid</div>
  )
}

export default userid