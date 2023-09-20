import React, { useCallback, useState } from "react";
import axios from "axios";

const Deals = () => {
    const [deals,setDeals] = useState([]);
  const result = () => {
    const encodedToken = encodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJwcm9jZXNzQGdtYWlsLmNvbSIsImlhdCI6MTY4ODIzNDcxMSwiZXhwIjoxNjg4NDA3NTExfQ.sZOT6kNzyL9wSO7jAIP_MIZ6M4nV0925ZmWSIQ2EwsE");
    const headers = {
      Authorization: `Bearer ${encodedToken}`,
    };

    axios({
      method: "get",
      url: "https://kinkiverse.onrender.com/deals",
      headers,
    })
      .then((response) => {
        console.log(response.data);
        // setDeals(response.data.)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button type="submit" onClick={result}>
        hyyyyy
      </button>
    </div>
  );
};

export default Deals;
