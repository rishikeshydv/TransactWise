import React, { useState, useCallback } from 'react'

function Token() {
    const [response, setResponse] = useState<string>("");

    const tokenGenerator = async () => {
        fetch("https://api.finicity.com/aggregation/v2/partners/authentication",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Finicity-App-Key": "0ec8bc7aac65c70b454e9680b3d6875a",
                "Accept": "application/json",
                "Host": "api.finicity.com",
                "Accept-Encoding": "gzip, deflate, br",
                "Connection": "keep-alive",
                            },
            body: JSON.stringify({
                    "partnerId": "2445584276664",
                    "partnerSecret": "BvMWvk7PZ8SrwA7TNDLx"
                }),
        })
        .then(res => res.json())
        .then((data:string) =>{
            setResponse(data);
        })
        .catch(err => console.log(err));
    };
  return (
    <div>token</div>
  )
}

export default Token