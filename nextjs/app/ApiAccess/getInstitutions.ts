import React, { useState, useEffect } from 'react';

function getInstitutions() {
    const [response, setResponse] = useState<string>("");
    const allInstitutions = async () => {
    fetch("https://api.finicity.com/institution/v2/institutions?search=finbank&start=1&limit=25&type=voa",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Finicity-App-Token": "RfXSMOognGdStlfiGvwm",
                "Finicity-App-Key": "0ec8bc7aac65c70b454e9680b3d6875a",
                "Accept": "application/json",
                "Host": "api.finicity.com",
                "Accept-Encoding": "gzip, deflate, br",
                "Connection": "keep-alive",
                            },
                //GET has no body
        })
        .then(res => res.json())
        .then((data:string) =>{
            setResponse(data);
        })
        .catch(err => console.log(err));
      }
  return (
    <div>getInstitutions</div>
  )
}

export default getInstitutions