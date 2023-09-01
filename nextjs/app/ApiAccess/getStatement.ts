import React from 'react'

function getStatement() {
    const [response, setResponse] = useState<string>("");
    const getStatement = async () => {
    fetch("https://api.finicity.com/aggregation/v1/customers/7002533125/accounts",{
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
    <div>getStatement</div>
  )
}

export default getStatement