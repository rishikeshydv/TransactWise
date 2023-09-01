import React, { useState, useCallback } from 'react'

function requestAnalytics() {
    const [response, setResponse] = useState<string>("");

    const reqAnalytic = async () => {
        fetch("https://api.finicity.com/analytics/cashflow/v1/customer/7002533125/fcra?reference-number=abc123",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Finicity-App-Key": "0ec8bc7aac65c70b454e9680b3d6875a",
                "Finicity-App-Token": "RfXSMOognGdStlfiGvwm",  //might need to change later
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
    <div>requestAnalytics</div>
  )
}

export default requestAnalytics