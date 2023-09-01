//need to figure out the 42003 Forbidden Issue and then we can do this thing
//the following is just a template
//you have to change the header & body

import React, { useState, useEffect } from 'react';

function refreshCustomerAcc() {
    const [response, setResponse] = useState<string>("");

    const refresh = async () => {
        fetch("https://api.finicity.com/aggregation/v2/partners/authentication",{
            method: "POST",
            headers: {
                // Need to update headers
                            },
            body: JSON.stringify({
                    //need to update body
                }),
        })
        .then(res => res.json())
        .then((data:string) =>{
            setResponse(data);
        })
        .catch(err => console.log(err));
    };
  return (
    <div>refreshCustomerAcc</div>
  )
}

export default refreshCustomerAcc