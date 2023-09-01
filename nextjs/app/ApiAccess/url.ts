import React, { useState, useEffect } from 'react';

function url() {
    const [response, setResponse] = useState<string>("");
    const urlGenerator = async () => {
    fetch("https://api.finicity.com/connect/v2/generate",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Finicity-App-Token": "BAEOaWRfbCnI0Fdehwrm",   //need to change this as response from token.ts
                "Finicity-App-Key": "0ec8bc7aac65c70b454e9680b3d6875a",
                "Accept": "application/json",
                "Host": "api.finicity.com",
                "Accept-Encoding": "gzip, deflate, br",
                "Connection": "keep-alive",
                            },
            body: JSON.stringify({
                "partnerId": "2445584276664",
                "customerId": "7002426679",         //need to change this as response from userid.ts
                "language": "en",
                "consumerId": "0bf46322c167b562e6cbed9d40e19a4c",
                "redirectUri": "https://www.finicity.com/connect/",
                "webhookContentType": "application/json",
                "webhookData": {},
                "webhookHeaders": {},
                "singleUseUrl": true,
                "institutionSettings": {},
                }),
        })
        .then(res => res.json())
        .then((data:string) =>{
            setResponse(data);
        })
        .catch(err => console.log(err));
      }
  return (
    <div>url</div>
  )
}

export default url