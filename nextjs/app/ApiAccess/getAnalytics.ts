import React, { useState, useCallback } from 'react'

function getAnalytics() {
    const [response, setResponse] = useState<string>("");
    const getAnalytics = async () => {
    fetch("https://api.finicity.com/analytics/data/v1/%7B%7BobbFcraReportId%7D%7D/fcra?purpose=31",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Finicity-App-Token": "RfXSMOognGdStlfiGvwm",  //change per session
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
    <div>getAnalytics</div>
  )
}

export default getAnalytics