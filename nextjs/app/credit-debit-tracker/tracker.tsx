import React, { useState, useEffect } from 'react';

function Tracker() {
    const [response, setResponse] = useState<string>("");

    //expenses
    const grocery = []
    const utility = []
    const eatingOut = []

    //credit
    const cashDeposit = []
    const directDeposit = []
    const zelle = []

    const accTransactions = async () => {
    fetch("https://api.finicity.com/aggregation/v1/customers/7002533125/accounts",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Finicity-App-Token": "RfXSMOognGdStlfiGvwm", //might need to change tokens
                "Finicity-App-Key": "0ec8bc7aac65c70b454e9680b3d6875a",
                "Accept": "application/json",
                "Host": "api.finicity.com",
                "Accept-Encoding": "gzip, deflate, br",
                "Connection": "keep-alive",
                            },
                //GET has no body
        })
        .then(res => res.json())
        .then(

            //write your logic to append the expense into grocery, utility and eating out
            //write your logic to append the Credit into cash, direct and zelle

            //the response is of the format:

            //     transactions:[]

            //so you can loop over each transactions and detect some keywords and signs - or +


        )
        .catch(err => console.log(err));
      }
  return (
    <div>customerAccTrans</div>
  )
}

export default Tracker

//expense types: grocery, utilities, eating out
//credit: we find that out via the sign plus: cash deposit, direct deposit, zelle transfer