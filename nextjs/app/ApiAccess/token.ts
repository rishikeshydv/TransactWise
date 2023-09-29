import React, { useState, useCallback, useEffect } from 'react';

function Token({ onTokenReceived }) {
  const [response, setResponse] = useState<string>("");

  const tokenGenerator = useCallback(async () => {
    try {
      const response = await fetch("https://api.finicity.com/aggregation/v2/partners/authentication", {
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
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setResponse(data.token);

      // Pass the token to the parent component via the callback
      onTokenReceived(data.token);
    } catch (err) {
      console.error(err);
    }
  }, [onTokenReceived]);

  useEffect(() => {
    tokenGenerator();
  }, [tokenGenerator]);
}
 
export default Token;
